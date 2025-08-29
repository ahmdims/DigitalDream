import Service3 from "../../img/our_service/service3.svg";
import Service4 from "../../img/our_service/service4.svg";

export default function OurServiceContentBottom() {
  const third_services = [
    { id: 1, name: "2D Illustration", delay: "300" },
    { id: 2, name: "Character", delay: "400" },
    { id: 3, name: "Mascot", delay: "500" },
    { id: 4, name: "Iconography", delay: "600" },
  ];
  const fourth_services = [
    { id: 1, name: "Logo", delay: "400" },
    { id: 2, name: "Pitch Deck", delay: "500" },
    { id: 3, name: "Brand Guidelines", delay: "600" },
    { id: 4, name: "Social Media Design", delay: "700" },
    { id: 5, name: "Printed Design", delay: "800" },
    { id: 6, name: "Merchandise Design", delay: "900" },
  ];
  return (
    <div className="our-service-box pt-0 xl:pt-[5rem] flex flex-col xl:flex-row justify-between gap-[2.5rem]">
      {/* box1 */}
      <div className="flex flex-col justify-start items-start w-full xl:w-[50%]">
        {/* bagain atas */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          className="flex justify-start items-center gap-[1.5rem]"
        >
          {/* img */}
          <figure className="w-[40%] h-auto md:w-[167px] md:h-[120px]">
            <img src={Service3} alt="" className="w-full h-full object-cover" />
          </figure>
          {/* description */}
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary w-[60%] md:w-auto">
            <p className="text-[1rem] xl:text-[0.875rem]">OUR SERVICES</p>
            <p className="font-bold text-[1.5rem] md:text-[2rem]">
              Illustration Design
            </p>
            <p className="text-[1rem] leading-[28px] text-[#676767]">
              Let us turn your imagination into captivating illustrations.
            </p>
          </div>
        </div>
        {/* bagian bawah */}
        <div className="flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]">
          {third_services.map((third_service) => (
            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={third_service.delay}
              key={third_service.id}
              className="bg-white group transition-all duration-500 ease-in-out border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]"
            >
              <span className="text-[#494949] text-[1rem] xl:text-[0.875rem]">
                {third_service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* box2 */}
      <div className="flex flex-col justify-start items-start w-full xl:w-[50%]">
        {/* bagain atas */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
          className="flex justify-start items-center gap-[1.5rem]"
        >
          {/* img */}
          <figure className="w-[40%] h-auto md:w-[167px] md:h-[120px]">
            <img
              src={Service4}
              alt=""
              className="w-full h-full object-center"
            />
          </figure>
          {/* description */}
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary w-[60%] md:w-auto">
            <p className="text-[1rem] xl:text-[0.875rem]">OUR SERVICES</p>
            <p className="font-bold text-[1.5rem] md:text-[2rem]">
              Branding & Graphic Design
            </p>
            <p className="text-[1rem] leading-[28px] text-[#676767]">
              Make your brand more professional and memorable.
            </p>
          </div>
        </div>
        {/* bagian bawah */}
        <div className="flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]">
          {fourth_services.map((fourth_service) => (
            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={fourth_service.delay}
              key={fourth_service.id}
              className="bg-white group transition-all duration-500 ease-in-out border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]"
            >
              <span className="text-[#494949] text-[1rem] xl:text-[0.875rem]">
                {fourth_service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
