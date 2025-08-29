import Marquee from "react-fast-marquee";
import Clients1 from "../img/client/client1.png";
import Clients2 from "../img/client/client2.png";
import Clients3 from "../img/client/client3.png";
import Clients4 from "../img/client/client4.png";
import Clients5 from "../img/client/client5.png";
import Clients6 from "../img/client/client6.png";
import Clients7 from "../img/client/client7.png";
import Awan3 from "../img/awan3.png";
import Awan5 from "../img/awan5.png";
import Awan6 from "../img/awan6.png";
import KomentarTestimonials from "./TestimonialsComponent/komentarTestimonials";
import HeaderTestimonials from "./TestimonialsComponent/headerTestimonials";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="testimonials flex flex-col gap-[2.875rem] relative px-[24px] overflow-hidden -mt-0 lg:-mt-28"
    >
      <div className="container mx-auto max-w-[1120px]">
        {/* box atas */}
        <HeaderTestimonials />
        {/* marquee */}
        <div className="">
          <Marquee
            autoFill
            gradient="true"
            gradientColor="white"
            gradientWidth={100}
          >
            <div className="flex justify-center items-center gap-[4.375rem] pt-0 pb-[3.574rem]">
              <img
                src={Clients1}
                alt=""
                className="h-[50px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients2}
                alt=""
                className="h-[50px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients3}
                alt=""
                className="h-[50px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients4}
                alt=""
                className="h-[100px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients5}
                alt=""
                className="h-[100px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients6}
                alt=""
                className="h-[100px] filter grayscale hover:grayscale-0"
              />
              <img
                src={Clients7}
                alt=""
                className="h-[100px] filter grayscale hover:grayscale-0 pr-[4.375rem]"
              />
            </div>
          </Marquee>
        </div>
        {/* komentar */}
        <KomentarTestimonials />
      </div>
      <img
        src={Awan3}
        alt=""
        className="hidden xl:inline-block absolute z-0 top-0 right-0"
      />
      <img src={Awan5} alt="" className="absolute z-0 bottom-0 left-0" />
      <img src={Awan6} alt="" className="absolute z-0 bottom-20 right-0" />
    </div>
  );
}
