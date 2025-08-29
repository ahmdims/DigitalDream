import Marquee from "react-fast-marquee";
import Ft1 from "../img/icon/ft1.svg";
import Portfolio1 from "../img/portfolio/portfolio1.png";
import Portfolio2 from "../img/portfolio/portfolio2.png";
import Portfolio3 from "../img/portfolio/portfolio3.png";
import Portfolio4 from "../img/portfolio/portfolio4.png";
import Portfolio5 from "../img/portfolio/portfolio5.png";
import Portfolio6 from "../img/portfolio/portfolio6.png";
import Portfolio_Second1 from "../img/portfolio/portfolio_second 1.png";
import Portfolio_Second2 from "../img/portfolio/portfolio_second 2.png";
import Portfolio_Second3 from "../img/portfolio/portfolio_second 3.png";
import Portfolio_Second4 from "../img/portfolio/portfolio_second 4.png";
import Portfolio_Second5 from "../img/portfolio/portfolio_second 5.png";
import Portfolio_Second6 from "../img/portfolio/portfolio_second 6.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      img: Portfolio3,
    },
    {
      id: 2,
      img: Portfolio2,
    },
    {
      id: 3,
      img: Portfolio1,
    },
    {
      id: 4,
      img: Portfolio4,
    },
    {
      id: 5,
      img: Portfolio5,
    },
    {
      id: 6,
      img: Portfolio6,
    },
  ];
  const portfolios_second = [
    {
      id: 1,
      img: Portfolio_Second1,
    },
    {
      id: 2,
      img: Portfolio_Second2,
    },
    {
      id: 3,
      img: Portfolio_Second3,
    },
    {
      id: 4,
      img: Portfolio_Second4,
    },
    {
      id: 5,
      img: Portfolio_Second5,
    },
    {
      id: 6,
      img: Portfolio_Second6,
    },
  ];
  return (
    <div className="portfolio pt-[16px]">
      <div className="portfolio-box flex flex-col gap-[16px] relative overflow-hidden">
        {/* Gradasi putih dari bawah ke atas */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-10"></div>
        {/* atas */}
        <Marquee
          loop={0}
          speed={25}
          autoFill
          gradientColor="white"
          gradientWidth={50}
          className="flex gap-4"
        >
          <div className="flex gap-4">
            {portfolios.map((portfolio) => (
              <figure
                key={portfolio.id}
                className="w-[400px] h-[300px] md:w-[550px] md:h-[380px] rounded-[12px] overflow-hidden"
              >
                <img
                  src={portfolio.img}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px] transition-all ease-in-out hover:scale-[1.01] duration-500"
                />
              </figure>
            ))}
          </div>
        </Marquee>
        {/* bawah */}
        <Marquee
          loop={0}
          speed={25}
          direction="right"
          autoFill
          gradientColor="white"
          gradientWidth={50}
          className="flex gap-4"
        >
          <div className="flex gap-4">
            {portfolios_second.map((portfolio) => (
              <figure
                key={portfolio.id}
                className="w-[400px] h-[300px] md:w-[550px] md:h-[380px] rounded-[12px] overflow-hidden"
              >
                <img
                  src={portfolio.img}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px] transition-all ease-in-out hover:scale-[1.01] duration-500"
                />
              </figure>
            ))}
          </div>
        </Marquee>
        {/* Tombol See More */}
        <a
          href="https://dribbble.com/digitaldream"
          className="p-4 flex items-center justify-center gap-2 bg-white bg-opacity-50 filter backdrop-filter backdrop-blur-xl w-[170px] rounded-[12px] shadow-md absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 overflow-hidden hover:scale-105 transition-all ease-in-out duration-500"
        >
          <img src={Ft1} alt="" className="w-[30px] h-[30px]" />
          <span className="font-medium text-[16px]">See Portfolio</span>
        </a>
      </div>
    </div>
  );
}
