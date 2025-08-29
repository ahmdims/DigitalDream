import Lottie from "lottie-react";
import AnimationDino from "../../lottie/rex.json";
import { useMemo, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WhyUs from "../../img/why_us/whyus1.svg";

export default function WhyUsBox1() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true }); // triggerOnce tetap true agar AOS hanya sekali
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Monitor window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update visibility state based on intersection observer
  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true); // Tetap true setelah pertama kali terlihat
    }
  }, [inView]);

  // Memoize Lottie animation data
  const memoizedAnimationData = useMemo(() => AnimationDino, []);

  return (
    <div
      ref={ref}
      className="whyus-box flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-[40px] pt-[5rem] relative z-10"
    >
      {/* box1 */}
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-start justify-start w-full md:w-[50%] gap-[1.2rem] xl:gap-[1.5rem]"
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <p className="text-[#676767] text-[1rem] xl:text-[0.875rem]">
            WHY US
          </p>
          <h2 className="font-bold text-[#1C1C1C] text-[2.5rem] leading-[52px]">
            Work with professional and experienced designers
          </h2>
        </div>
        <p className="text-[#676767] text-[1.25rem] leading-[28px]">
          Partner with us to access dedicated UI/UX designers, illustrators, and
          design directors with professional expertise, who designs for brands
          used by millions.
        </p>
      </div>

      {/* box2 */}
      {hasBeenVisible &&
        (isMobile ? (
          // Mobile: Render image
          <figure
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={WhyUs} alt="Why Us illustration for mobile" />
          </figure>
        ) : (
          // Desktop/Tablet: Render Lottie
          <div
            className="relative order-2 md:order-1 -mt-10 md:-mt-0"
            data-aos="fade-left"
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
