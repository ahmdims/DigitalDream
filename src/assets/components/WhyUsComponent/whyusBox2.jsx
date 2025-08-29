import Lottie from "lottie-react";
import AnimationDino from "../../lottie/rex2.json";
import { useMemo, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WhyUs from "../../img/why_us/whyus2.svg";

export default function WhyUsBox2() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Monitor window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);

  return (
    <div
      ref={ref}
      className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-10 md:pt-0 relative z-10"
    >
      {/* box1 */}
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-start justify-start w-full md:w-[50%] gap-[1.2rem] xl:gap-[1.5rem] order-1 md:order-2"
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <p className="text-[#676767] text-[1rem] xl:text-[0.875rem]">
            WHY US
          </p>
          <h2 className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px]">
            Your satisfaction is our priority
          </h2>
        </div>
        <p className="text-[#676767] text-[1.25rem] leading-[28px]">
          We prioritize your satisfaction by providing a seamless, collaborative
          experience and delivering designs that exceed your expectations.
        </p>
      </div>

      {/* box2 */}
      {inView &&
        (isMobile ? (
          // Mobile: Render image
          <figure
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-1 md:order-2"
          >
            <img src={WhyUs} alt="Why Us illustration for mobile" />
          </figure>
        ) : (
          // Desktop/Tablet: Render Lottie
          <div
            className="relative order-2 md:order-1 -mt-5 md:-mt-0"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Lottie
              animationData={memoizedAnimationData}
              loop={true}
              autoPlay={true}
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full"
            />
            <div className="w-[200px] h-[40px] absolute bottom-0 right-0 bg-white"></div>
          </div>
        ))}
    </div>
  );
}
