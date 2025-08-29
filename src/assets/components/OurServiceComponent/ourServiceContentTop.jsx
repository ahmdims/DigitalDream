import Service1 from "../../img/our_service/service1.svg";
import Service2 from "../../img/our_service/service2.svg";

export default function OurServiceContentTop() {
  const first_services = [
    { id: 1, name: "Why Us", delay: "100" },
    { id: 2, name: "Workshop Facilitation", delay: "200" },
    { id: 3, name: "UX Audit", delay: "300" },
    { id: 4, name: "Design Sprint Facilitation", delay: "400" },
    { id: 5, name: "Ideation", delay: "500" },
    { id: 6, name: "Information Architecture", delay: "600" },
    { id: 7, name: "User Flow", delay: "700" },
    { id: 8, name: "Wireframe", delay: "800" },
    { id: 9, name: "Prototyping", delay: "900" },
    { id: 10, name: "Usability Testing", delay: "1000" },
  ];
  const second_services = [
    { id: 1, name: "Design System", delay: "200" },
    { id: 2, name: "Website Design", delay: "300" },
    { id: 3, name: "Responsive Design", delay: "400" },
    { id: 4, name: "Mobile App Design", delay: "500" },
    { id: 5, name: "Dashboard Design ", delay: "600" },
    { id: 6, name: "Landing Page", delay: "700" },
  ];
  return (
    <div className="our-service-box pt-[5rem] flex flex-col xl:flex-row justify-between gap-[2.5rem]">
      {/* box1 */}
      <div className="flex flex-col justify-start items-start w-full xl:w-[50%]">
        {/* bagain atas */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-start items-center gap-[1.5rem]"
        >
          {/* img */}
          <figure className="w-[40%] h-auto md:w-[167px] md:h-[120px]">
            <img
              src={Service1}
              alt=""
              className="w-full h-full object-cover place-content-center"
            />
          </figure>
          {/* description */}
          <div className="flex flex-col items-start justify-start gap-[0.2rem] xl:gap-[0.5rem] text-secondary w-[60%] md:w-auto">
            <p className="text-[1rem] xl:text-[0.875rem]">OUR SERVICES</p>
            <p className="font-bold text-[1.5rem] md:text-[2rem]">UX Design</p>
            <p className="text-[1rem] leading-[28px] text-[#676767]">
              We ensure your design is intuitive, easy to use, and provides a
              delightful experience.{" "}
            </p>
          </div>
        </div>
        {/* bagian bawah */}
        <div className="flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]">
          {first_services.map((first_service) => (
            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={first_service.delay}
              key={first_service.id}
              className="bg-white group transition-all duration-500 ease-in-out border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem] gap-[1.5rem]"
            >
              <span className="text-[#494949] text-[1rem] xl:text-[0.875rem]">
                {first_service.name}
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
          data-aos-delay="200"
          className="flex justify-start items-center gap-[1.5rem]"
        >
          {/* img */}
          <figure className="w-[80%] h-auto md:w-[167px] md:h-[120px]">
            <img
              src={Service2}
              alt=""
              className="w-full h-full object-center"
            />
          </figure>
          {/* description */}
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-secondary w-[60%] md:w-auto">
            <p className="text-[1rem] xl:text-[0.875rem]">OUR SERVICES</p>
            <p className="font-bold text-[1.5rem] md:text-[2rem]">UI Design</p>
            <p className="text-[1rem] leading-[28px] text-[#676767]">
              We craft captivating designs that catch your users' attention.
            </p>
          </div>
        </div>
        {/* bagian bawah */}
        <div className="flex justify-start items-center flex-wrap gap-[0.75rem] mt-[1.5rem]">
          {second_services.map((second_service) => (
            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={second_service.delay}
              key={second_service.id}
              className="bg-white group transition-all duration-500 ease-in-out border border-[#E8E8E8] py-[0.75rem] px-[1rem] rounded-[0.75rem]"
            >
              <span className="text-[#494949] text-[1rem] xl:text-[0.875rem]">
                {second_service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
