import Awan2 from "../img/awan2.png";
import Awan4 from "../img/awan4.png";
import HeaderHowItWorks from "./HowItWorksComponent/HeaderHowItWorks";
import HowItWorksContent from "./HowItWorksComponent/howItWorksContent";
import HowItWorksContentTab from "./HowItWorksComponent/howItWorkwContentTab";

export default function HowItWorks() {
  return (
    <div className="howItWorks relative px-[24px]">
      <div className="container mx-auto max-w-[1120px]">
        <div className="howItWorks-box flex flex-col justify-center items-center py-[4.773rem]">
          {/* atas header*/}
          <HeaderHowItWorks />
          {/* bawah content */}
          <HowItWorksContent />
          {/* tab content*/}
          <HowItWorksContentTab />
        </div>
      </div>
      <img src={Awan2} alt="" className="absolute z-0 top-0 right-0" />
      <img src={Awan4} alt="" className="absolute z-0 bottom-0-0 left-0" />
    </div>
  );
}
