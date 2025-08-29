import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import PoinsType from "./FooterHero/PoinsType";

export default function FooterHero() {
  const poins = [
    { id: 1, name: "Experienced Designer", delay: "700" },
    { id: 2, name: "Your satisfactions is our priority", delay: "900" },
    { id: 3, name: "Unlimited design requests & revisions", delay: "1100" },
  ];
  // slider animation framer
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => setIsLargeDevice(window.innerWidth > 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const widthAnimation = isLargeDevice ? ["20%", "100%"] : ["30%", "100%"];

  return (
    <div className="footerHero w-full h-screen pt-[11.625rem] px-[24px] relative z-30">
      <div className="container mx-auto max-w-[1120px]">
        <div className="footerHero-box flex flex-col items-center justify-center gap-[1.5rem] pt-[0.2rem] md:pt-[10rem]">
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            className="text-[2rem] md:text-[2.5rem] font-bold text-primary text-center leading-tight xl:leading-[72px]"
          >
            Transform Your Vision into Reality
          </h2>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            className="text-[1rem] text-primary text-center leading-[28px] md:leading-[52px]"
          >
            Crafting exceptional designs that elevate your brand and captivate
            your audience.
          </p>
          {/* poins */}
          <div className="flex items-center justify-center gap-[1.5rem]">
            {poins.map((poin) => (
              <div
                key={poin.id}
                className="hidden lg:flex items-center justify-center gap-[0.5rem]"
              >
                <i
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay={poin.delay}
                  className="bi bi-check-circle text-primary text-[1rem]"
                ></i>
                <p
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-delay={poin.delay}
                  className="text-[1rem] text-[#676767] text-center"
                >
                  {poin.name}
                </p>
              </div>
            ))}
          </div>
          {/* mobile poins */}
          <PoinsType />
          {/* contact us */}
          <div className="px-7 sm:px-[58px] md:px-[165px] lg:px-[280px] xl:px-[270px] container mx-auto max-w-[1120px] flex items-center justify-center">
            <motion.div
              whileInView={{ width: widthAnimation }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-[0.938rem] pl-[17px] py-1 xl:py-0 justify-between items-center flex relative z-10"
            >
              {/* invisible place holder */}
              <p className="invisible py-[0.1rem] md:py-[0.6rem] leading-[28px]">
                1
              </p>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex items-center justify-center absolute left-[17px] gap-[10px]"
              >
                {/* icon pulse invisible placeholder*/}
                <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
                  <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
                </div>
                <p className=" text-[0.875rem] leading-[28px]">
                  <span className="text-primary">1 Slot available!</span>{" "}
                  <span className="hidden md:inline-block text-[#676767]">
                    Let's talk
                  </span>{" "}
                  <span className="hidden xl:inline-block text-[#676767]">
                    to get your project started.
                  </span>
                </p>
              </motion.div>
              {/* icon pulse */}
              <div className="absolute left-[17px] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite"></div>
              <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[20px]"></div>
              <motion.a
                href="https://cal.com/likearthstudio/30min"
                target="_blank"
                className="py-[10px] md:py-[17px] xl:py-[13px] w-[100px] md:w-[160px] text-center text-white text-[0.875rem] bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out rounded-[0.938rem] absolute right-0"
              >
                Book a Call
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
