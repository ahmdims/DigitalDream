import Works1 from "../../img/how_it_work/work1.svg";
import Works2 from "../../img/how_it_work/work2.svg";
import Works3 from "../../img/how_it_work/work3.svg";
import Works4 from "../../img/how_it_work/work4.svg";

export default function HowItWorksContent() {
  const visions = [
    {
      id: 1,
      img: Works1,
      title: "Subscribe to a Plan",
      desc: "Choose the plan that fits your needs and subscribe effortlessly. Our flexible plans are designed to cater to businesses of all sizes.",
      style: "mt-0 w-[250px] h-[250px] flex item-center justify-center",
      delay: "700",
    },
    {
      id: 2,
      img: Works2,
      title: "Submit Your Task",
      desc: "Have a project in mind? Simply submit your task details through our easy-to-use platform. Be as detailed as possible to help us understand your vision.",
      style:
        "mt-0 xl:mt-[5rem] w-[250px] h-[250px] flex item-center justify-center",
      delay: "900",
    },
    {
      id: 3,
      img: Works3,
      title: "Design & Iteration",
      desc: "Our talented designers will start crafting your design. We’ll collaborate with you through iterations, ensuring every detail aligns with your expectations.",
      style: "mt-0 w-[250px] h-[250px] flex item-center justify-center",
      delay: "1100",
    },
    {
      id: 4,
      img: Works4,
      title: "Handoff & Documentation",
      desc: "Once you’re happy with the final design, we’ll hand over all the files you need. Enjoy your new, professionally crafted design!",
      style:
        "mt-0 xl:mt-[5rem] w-[250px] h-[250px] flex item-center justify-center",
      delay: "1300",
    },
  ];
  return (
    <div className="flex md:hidden xl:flex flex-col xl:flex-row justify-center gap-[2rem]">
      {visions.map((vision) => (
        <div key={vision.id} className="flex flex-col items-center gap-[1rem]">
          <figure
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay={vision.delay}
            className={vision.style}
          >
            <img
              src={vision.img}
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay={vision.delay}
            className="font-bold text-[1.5rem] text-secondary text-center leading-[36px]"
          >
            {vision.title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay={vision.delay}
            className="text-[0.875rem] text-[#676767] text-center leading-[28px] w-[80%] md:w-[50%] xl:w-full"
          >
            {vision.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
