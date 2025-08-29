import Btn from "../btn";

export default function CallUsOurService() {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-delay="500"
      className="mt-[3.75rem] mb-[5rem]"
    >
      <div className="flex flex-col xl:flex-row bg-transparent md:bg-white px-[2rem] py-[1.5rem] border border-primary rounded-[1.5rem] gap-[1rem] xl:gap-[2.5rem]">
        {/* kiri */}
        <div className="w-full xl:w-[75%] flex flex-col items-start justify-start gap-[0.5rem]">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-secondary">
            Can't find what you're looking for?
          </h2>
          <p className="text-[1.125rem] text-[#676767]">
            We haven’t listed everything here. Let us know what you need, and
            we’ll deliver the best services tailored just for you.
          </p>
        </div>
        {/* kanan */}
        <a
          href="https://cal.com/likearthstudio/30min"
          target="_blank"
          className="w-[100%] md:w-[40%] xl:w-[25%] flex justify-end items-center"
        >
          <Btn
            title="Book a Call"
            style="flex justify-center items-center bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out border border-primary px-[3.75rem] py-[1rem] rounded-[0.75rem] relative overflow-hidden w-full"
          />
        </a>
      </div>
    </div>
  );
}
