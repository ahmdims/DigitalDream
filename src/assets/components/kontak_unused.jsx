export default function KontakUnsued() {
  return (
    <>
      <div className="flex justify-center items-center">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.9, duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-1 md:gap-4 xl:gap-[0.625rem] bg-white pl-[0.75rem] rounded-[0.938rem] relative w-auto transition-all duration-500 ease-in-out"
        >
          <div className="flex items-center justify-center gap-[0.625rem]">
            {/* icon pulse invis */}
            <div className="invisible flex items-center justify-center bg-red-500 w-[1rem] h-[1rem] rounded-[50%] isolate">
              <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%]"></div>
            </div>
            {/*attention */}
            <p className="py-[0.1rem] md:py-[0.6rem] leading-[28px] text-[0.7rem] md:text-[1.1rem]">
              <span className="text-primary">1 Slot available!</span>{" "}
              <span className="hidden md:inline-block text-[#676767]">
                Let's talk
              </span>{" "}
              <span className="hidden xl:inline-block text-[#676767]">
                to get your project started.
              </span>
            </p>
          </div>
          {/* icon pulse */}
          <div className="absolute left-[0.75rem] flex items-center justify-center bg-primary bg-opacity-25 w-[1rem] h-[1rem] rounded-[50%] animate-scale-down-infinite"></div>
          <div className="w-[0.625rem] h-[0.625rem] bg-primary rounded-[50%] absolute left-[0.90rem]"></div>
          {/* btn */}
          <a href="https://cal.com/likearthstudio/30min" target="_blank">
            <Btn
              title="Book a Call"
              style="flex justify-center items-center relative bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out text-white border border-primary overflow-hidden rounded-[0.938rem] py-[0.719rem] px-[1.5rem] absolute"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
}
