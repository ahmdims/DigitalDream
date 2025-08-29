import Works1 from "../../img/how_it_work/work1.svg";
import Works2 from "../../img/how_it_work/work2.svg";
import Works3 from "../../img/how_it_work/work3.svg";
import Works4 from "../../img/how_it_work/work4.svg";

export default function HowItWorksContentTab() {
  const tab_1visions = [
    {
      id: 1,
      img: Works1,
      title: "Subscribe to a Plan",
      desc: "Choose the plan that fits your needs and subscribe effortlessly. Our flexible plans are designed to cater to businesses of all sizes.",
      style: "w-[259px] h-[259px]",
      delay: "700",
    },
    {
      id: 2,
      img: Works2,
      title: "Submit Your Task",
      desc: "Have a project in mind? Simply submit your task details through our easy-to-use platform. Be as detailed as possible to help us understand your vision.",
      style: "w-[259px] h-[259px]",
      delay: "900",
    },
  ];
  const tab_2visions = [
    {
      id: 1,
      img: Works3,
      title: "Design & Iteration",
      desc: "Our talented designers will start crafting your design. We’ll collaborate with you through iterations, ensuring every detail aligns with your expectations.",
      style: "mt-0 w-[259px] h-[259px]",
      delay: "1100",
    },
    {
      id: 2,
      img: Works4,
      title: "Handoff & Documentation",
      desc: "Once you’re happy with the final design, we’ll hand over all the files you need. Enjoy your new, professionally crafted design!",
      style: "mt-0 xl:mt-[2.5rem] w-[259px] h-[259px]",
      delay: "1300",
    },
  ];
  return (
    <>
      {/* tab content*/}
      <div className="hidden md:flex xl:hidden justify-center gap-[2rem] pt-5">
        {tab_1visions.map((tab_1vision) => (
          <div
            key={tab_1vision.id}
            className="flex flex-col items-center justify-center gap-[1rem]"
          >
            <figure
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_1vision.delay}
              className={tab_1vision.style}
            >
              <img
                src={tab_1vision.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
            <h3
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_1vision.delay}
              className="font-bold text-[1.5rem] text-secondary text-center leading-[36px]"
            >
              {tab_1vision.title}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_1vision.delay}
              className="text-[0.875rem] text-[#676767] text-center leading-[28px] w-full"
            >
              {tab_1vision.desc}
            </p>
          </div>
        ))}
      </div>
      {/* tab2 content*/}
      <div className="hidden md:flex xl:hidden justify-center gap-[2rem] pt-5">
        {tab_2visions.map((tab_2visions) => (
          <div
            key={tab_2visions.id}
            className="flex flex-col items-center justify-center gap-[1rem]"
          >
            <figure
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_2visions.delay}
              className={tab_2visions.style}
            >
              <img
                src={tab_2visions.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
            <h3
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_2visions.delay}
              className="font-bold text-[1.5rem] text-secondary text-center leading-[36px]"
            >
              {tab_2visions.title}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={tab_2visions.delay}
              className="text-[0.875rem] text-[#676767] text-center leading-[28px] w-full"
            >
              {tab_2visions.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
