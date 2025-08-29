import { useState } from "react";

export default function Accordion({ title, isi, delay }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay={delay}
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="bg-transparent cursor-pointer py-4 xl:py-0 relative z-20 border-b border-[#dadada]"
      >
        {/* Button accordion */}
        <div
          className={`flex justify-between gap-1 w-full bg-transparent transition-all duration-500 ease-in-out ${
            accordionOpen ? "py-2" : "py-4"
          }`}
        >
          <span className="font-bold text-secondary text-[1rem]">{title}</span>
          <i
            className={`bi bi-chevron-up text-primary text-center text-[1rem] md:text-[1.4rem] xl:text-[1rem] pt-[2px] transition-all duration-500 ease-in-out ${
              accordionOpen ? "rotate-[0deg]" : "rotate-[180deg]"
            }`}
          ></i>
        </div>
        {/* isi accordion */}
        <div
          className={`bg-transparent grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 pr-10 pt-1 pb-3"
              : "grid-rows-[0fr] opacity-0 pl-6 pr-10 py-0"
          }`}
        >
          <div
            className={`text-[#737373] text-[1rem] leading-[28px] overflow-hidden transition-all duration-500 delay-300 ease-in-out ${
              accordionOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {isi}
          </div>
        </div>
      </div>
    </>
  );
}
