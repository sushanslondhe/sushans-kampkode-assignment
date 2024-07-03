"use client";
import { ChevronDown, Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
export default function Navbar() {
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
    <motion.section
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 1 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="  max-md:w-[375px] max-md:h-[72px]   shadow-md  shadow-[#7D6EEB80] sticky items-center top-[20px] left-[35px] w-[1370px] h-[80px] px-[13.5px] py-[40px]  flex rounded-[20px] justify-between z-20 "
    >
      <div className=" w-[200px] h-[60px]">
        <h1 className=" text-center text-[40px] uppercase font-normal flex">
          <h1>
            <span className=" text-violet-700">N</span>
            av
          </h1>
          <h1 className="max-md:hidden">
            <span className="  text-violet-700">b</span>ar
          </h1>
        </h1>
      </div>
      <div className="flex w-[894px] h-[44px] gap-[300px] items-center ">
        <div className="max-md:hidden flex w-[404px] h-[32px] gap-[32px] font-bold   ">
          <button className=" w-[46px] h-[24px]">Home</button>
          <button className="flex justify-center w-[98px] h-[24px]  gap-[8px]">
            Products <ChevronDown />
          </button>
          <button className="flex justify-center w-[110px] h-[32px] gap-[8px]">
            Resources <ChevronDown />
          </button>
          <button className="flex">Pricing</button>
        </div>
        <div className=" w-[190px] h-[44px] flex justify-center max-md:justify-end items-center gap-3">
          <button className=" max-md:hidden font-semibold   w-[83px] h-[44px] rounded-[8px] bg-[#F9F5FF] text-[#6941C6]">
            Log in
          </button>
          <button className=" max-md:hidden   w-[95px] h-[44px] rounded-[8px] bg-[#7F56D9] text-white">
            Sign up
          </button>
          <button className=" md:hidden">
            <Menu className=" text-slate-800 w-[40px] h-[40px]" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
