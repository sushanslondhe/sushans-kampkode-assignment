"use client";
import { ChevronDown } from "lucide-react";
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
      className=" shadow-md  shadow-[#7D6EEB80] sticky items-center top-[20px] left-[35px] w-[1370px] h-[80px] px-[13.5px] py-[40px]  flex rounded-[20px] justify-between z-20 "
    >
      <div className=" w-[200px] h-[60px]">
        <h1 className=" text-center text-[40px] uppercase font-normal">
          <span className=" text-violet-700">N</span>
          av
          <span className=" text-violet-700">b</span>ar
        </h1>
      </div>
      <div className="flex w-[894px] h-[44px] gap-[300px] items-center ">
        {/* Container */}

        <div className="flex w-[404px] h-[32px] gap-[32px] font-bold   ">
          {/* Sections */}

          <button className=" w-[46px] h-[24px]">Home</button>
          <button className="flex justify-center w-[98px] h-[24px]  gap-[8px]">
            Products <ChevronDown />
          </button>
          <button className="flex justify-center w-[110px] h-[32px] gap-[8px]">
            Resources <ChevronDown />
          </button>
          <button className="flex">Pricing</button>
        </div>
        <div className=" w-[190px] h-[44px] flex  gap-3">
          {/* buttons */}
          <button className=" font-semibold   w-[83px] h-[44px] rounded-[8px] bg-[#F9F5FF] text-[#6941C6]">
            Log in
          </button>
          <button className="  w-[95px] h-[44px] rounded-[8px] bg-[#7F56D9] text-white">
            Sign up
          </button>
        </div>
      </div>
    </motion.section>
  );
}
