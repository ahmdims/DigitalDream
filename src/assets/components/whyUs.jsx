import Awan1 from "../img/awan1.png";
import Awan2 from "../img/awan2.png";
import WhyUsContent from "./WhyUsComponent/whyUsContent";
export default function WhyUs() {
  return (
    <div id="whyus" className="whyus relative px-[24px] w-full overflow-hidden">
      <WhyUsContent />
      <img src={Awan1} alt="" className="absolute top-0 xl:top-72 left-0 z-0" />
      <img src={Awan2} alt="" className="absolute top-[51.25rem] right-0 z-0" />
      <img src={Awan1} alt="" className="absolute bottom-0 left-0 z-0" />
    </div>
  );
}
