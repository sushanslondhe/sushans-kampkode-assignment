"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          (className =
            " z-40 fixed top-5 flex items-center inset-x-0 md:mx-10 px-[40px] py-4 justify-between bg-white bg-opacity-90 backdrop-blur-sm rounded-[20px] md:shadow-navbar")
        )}
      >
        <div className="text-2xl font-medium">
          <div className="flex">
            <span className="text-[#7F6EFC]">N</span>
            AV
            <div className="hidden md:block">
              <span className="text-[#7F6EFC]">B</span>
              AR
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative hidden lg:flex items-center gap-1 text-lg font-medium hover:text-gray-700 transition-all"
              )}
            >
              <span className="">{navItem.name}</span>
              <div>
                {navItem.dropdown && <ChevronDown className="w-4 h-4" />}
              </div>
            </Link>
          ))}
        </div>

        {/* cta btns */}
        <div className="transition-all">
          <div className="z-[5000] flex md:hidden transition-all">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col">
                      {/* login and signup btns */}
                      <div className="flex gap-4 transition-all">
                        <button className="px-4 py-2 bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] font-semibold rounded-[8px] shadow-ctabtn hover:bg-purple-100 transition-all">
                          Login
                        </button>
                        <button className="px-4 py-2 rounded-[8px] text-white font-semibold bg-[#7F56D9] border border-[#7F56D9] shadow-ctabtn hover:bg-purple-700 transition-all">
                          Sign Up
                        </button>
                      </div>

                      {/* nav links */}
                      <div className="mt-10 flex flex-col gap-4 text-xl">
                        {navItems.map((link, index) => (
                          <Link
                            key={index}
                            href={link.link}
                            className="flex items-center gap-1 font-medium hover:text-gray-700 transition-all"
                          >
                            <span className="">{link.name}</span>
                            <div>
                              {link && <ChevronDown className="w-4 h-4" />}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex gap-4 transition-all">
            <button className="px-4 py-2 bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] font-semibold rounded-[8px] shadow-ctabtn hover:bg-purple-100 transition-all">
              Login
            </button>
            <button className="px-4 py-2 rounded-[8px] text-white font-semibold bg-[#7F56D9] border border-[#7F56D9] shadow-ctabtn hover:bg-purple-700 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
