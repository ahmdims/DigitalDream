export default function HeaderHowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.5rem] relative z-10">
      <div className="flex flex-col items-center justify-center gap-[0.5rem]">
        <p
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          className="text-[1rem] xl:text-[0.875rem] leading-[28px]"
        >
          HOW IT WORK
        </p>
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
          className="font-bold text-secondary text-[2.5rem] leading-[52px] text-center"
        >
          Seamlessly Bringing Your Vision to Life
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="600"
        className="text-[1.25rem] font-normal leading-[28px] text-center text-[#676767]"
      >
        From Concept to Creation, Made Simple.
      </p>
    </div>
  );
}
