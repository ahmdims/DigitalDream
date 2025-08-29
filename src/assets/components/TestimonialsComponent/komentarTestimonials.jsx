export default function KomentarTestimonials() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-[2rem]">
      {/* 1 */}
      <div className="flex flex-col justify-start xl:items-start gap-[2rem] w-full md:w-[50%] relative z-10">
        {/* kiri */}
        {/* atas */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          className="flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full"
        >
          {/* komentar */}
          <p className="text-[#4A4A4A] text-[1.25rem] leading-[28px]">
            "From concept to execution, DigitalDream delivered top-notch
            work. The designer is incredibly skilled at creating modern,
            engaging interfaces that are easy to navigate. They were proactive
            in communication and responsive to feedback, making the whole
            process seamless. Our product now looks sleek and performs better
            than ever!"
          </p>
          {/* profile */}
          <div className="flex justify-start items-center gap-[1rem]">
            {/* pp */}
            <div className="flex flex-col items-start justify-start">
              <p className="text-start text-[1rem] font-bold">Ricky</p>
              <div className="flex items-center justify-center gap-[0.5rem]">
                <p className="text-[0.875rem] text-[#4A4A4A]">CEO</p>
                <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]"></div>
                <p className="text-[0.875rem] text-[#4A4A4A]">Ravenry</p>
              </div>
            </div>
          </div>
        </div>
        {/* bawah */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
          className="flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full"
        >
          {/* komentar */}
          <p className="text-[#4A4A4A] text-[1.25rem] leading-[28px]">
            "We partnered with DigitalDream to revamp our web app, and the results
            exceeded our expectations. The team took the time to understand our
            brand identity and translated it into a stunning, cohesive design.
            Their ability to balance aesthetics with functionality is truly
            impressive."
          </p>
          {/* profile */}
          <div className="flex justify-start items-center gap-[1rem]">
            {/* pp */}
            <div className="flex flex-col items-start justify-start">
              <p className="text-start text-[1rem] font-bold">Chelly</p>
              <div className="flex items-center justify-center gap-[0.5rem]">
                <p className="text-[0.875rem] text-[#4A4A4A]">CEO </p>
                <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]"></div>
                <p className="text-[0.875rem] text-[#4A4A4A]">Tukangsayur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col justify-normal xl:items-start gap-[2rem] relative z-10 w-full md:w-[50%]">
        {/* kanan */}
        {/* atas */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
          className="flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full"
        >
          {/* komentar */}
          <p className="text-[#4A4A4A] text-[1.25rem] leading-[28px]">
            "What sets DigitalDream apart is their collaborative approach and
            creative thinking. They brought fresh ideas to the table and made
            sure every detail aligned with our vision. The designs they created
            were not only visually appealing but also strategically thought out,
            which has greatly improved our conversion rates."
          </p>
          {/* profile */}
          <div className="flex justify-start items-center gap-[1rem]">
            {/* pp */}
            <div className="flex flex-col items-start justify-start">
              <p className="text-start text-[1rem] font-bold">Michael</p>
              <div className="flex items-center justify-center gap-[0.5rem]">
                <p className="text-[0.875rem] text-[#4A4A4A]">
                  Head of Business
                </p>
                <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]"></div>
                <p className="text-[0.875rem] text-[#4A4A4A]">Shipper</p>
              </div>
            </div>
          </div>
        </div>
        {/* bawah */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="800"
          className="flex flex-col items-stretch justify-start border border-primary bg-white rounded-[0.938rem] p-[1.5rem] gap-[1.5rem] w-full"
        >
          {/* komentar */}
          <p className="text-[#4A4A4A] text-[1.25rem] leading-[28px]">
            "Working with DigitalDream has been a game-changer for our
            business. Their attention to detail and understanding of user
            experience are unmatched. They didn’t just deliver beautiful designs
            but also created intuitive, user-friendly interfaces that improved
            our customer engagement. I highly recommend them for anyone looking
            for a professional design partner!"
          </p>
          {/* profile */}
          <div className="flex justify-start items-center gap-[1rem]">
            {/* pp */}
            <div className="flex flex-col items-start justify-start">
              <p className="text-start text-[1rem] font-bold">Fahmi</p>
              <div className="flex items-center justify-center gap-[0.5rem]">
                <p className="text-[0.875rem] text-[#4A4A4A]">Director</p>
                <div className="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#D9D9D9]"></div>
                <p className="text-[0.875rem] text-[#4A4A4A]">KNKS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
