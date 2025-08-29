import HeroParagraph from "./Hero/HeroParagraph";
import PoinDesktop from "./Hero/PoinDesktop";
import PoinMobile from "./Hero/PoinMobile";
import Tagline from "./Hero/Tagline";
import ContactUs from "./Hero/ContactUs";
import ContactUsMobile from "./Hero/ContactUsMobile";

export default function Hero() {
  return (
    <div
      id="home"
      className="hero w-full h-screen pt-[8rem] md:pt-[10rem] xl:pt-[8rem] px-[24px] overflow-hidden transition-all ease-in-out duration-500"
    >
      <div className="container mx-auto max-w-[1120px]">
        <div className="hero-box flex flex-col items-center justify-center gap-[1rem]">
          <div className="flex flex-col items-center justify-center gap-[1.5rem] md:gap-[1rem]">
            {/* tagline */}
            <Tagline />
            {/* description */}
            <HeroParagraph />
            {/* poins desktop */}
            <PoinDesktop />
            {/* mobile poins */}
            <PoinMobile />
          </div>
          {/* contact us */}
          <ContactUs />
          {/* contack us mobile */}
          <ContactUsMobile />
        </div>
      </div>
    </div>
  );
}
