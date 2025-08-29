import CallUsOurService from "./OurServiceComponent/callUsOurService";
import OurServiceContentBottom from "./OurServiceComponent/ourServiceContentBottom";
import OurServiceContentTop from "./OurServiceComponent/ourServiceContentTop";

export default function OurService() {
  return (
    <div id="services" className="our-service bg-[#f0f9fa] px-[24px]">
      <div className="container mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-[2.5rem] xl:gap-0">
          {/* atas */}
          <OurServiceContentTop />
          {/* bawah */}
          <OurServiceContentBottom />
          {/* call us */}
          <CallUsOurService />
        </div>
      </div>
    </div>
  );
}
