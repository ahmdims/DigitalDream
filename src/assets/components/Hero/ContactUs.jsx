import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function ContactUs() {
  // slider animation framer
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeDevice(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthAnimation = isLargeDevice ? ["20%", "100%"] : ["30%", "100%"];
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="px-7 sm:px-[58px] md:px-[165px] lg:px-[280px] xl:px-[270px] container mx-auto max-w-[1120px] hidden md:flex items-center justify-center"
    >
      <motion.div
        whileInView={{ width: widthAnimation }}
        transition={{ delay: 2.4, duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-[0.938rem] pl-[17px] py-1 xl:py-0 justify-between items-center flex relative z-10 overflow-hidden"
      >
        {/* invisible place holder */}
        <p className="invisible py-[0.1rem] md:py-[0.6rem] leading-[28px]">1</p>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center absolute left-[17px] gap-[10px]"
        >
          {/* icon pulse invisible placeholder*/}
          <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
            <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
          </div>
          <motion.p
            whileInView={{
              opacity: [0, 1],
              fontSize: ["0.1rem", "0.875rem"],
            }}
            transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=" leading-[28px]"
          >
            <span className="text-primary">1 Slot available!</span>{" "}
            <span className="hidden md:inline-block text-[#676767]">
              Let's talk
            </span>{" "}
            <span className="hidden xl:inline-block text-[#676767]">
              to get your project started.
            </span>
          </motion.p>
        </motion.div>
        {/* icon pulse */}
        <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite"></div>
        <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
        <motion.a
          href="https://cal.com/likearthstudio/30min"
          target="_blank"
          className="py-[10px] md:py-[17px] xl:py-[13px] w-[100px] md:w-[160px] text-center text-white text-[0.875rem] bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out rounded-[0.938rem] absolute right-0 z-30"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
