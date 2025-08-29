import Logo from "../img/logo/logo.svg";
import Btn from "./btn";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const menus = [
    { id: 1, name: "Why us", link: "whyus", style: "" },
    { id: 2, name: "Services", link: "services", style: "" },
    { id: 3, name: "Testimonials", link: "testimonials", style: "" },
    { id: 4, name: "FAQs", link: "faq", style: "" },
  ];

  return (
    <motion.nav className="nav flex justify-center bg-transparent mx-auto sm:py-0 xl:py-4 fixed z-40 w-full">
      <div className="container mx-auto max-w-[1120px] relative z-40">
        <motion.div
          className={`nav-box flex justify-between items-center p-[12px] xl:p-[16px] xl:rounded-2xl mx-auto relative z-10 transition-all duration-500 ease-in-out ${
            openMenu
              ? "bg-white rounded-none"
              : "bg-white bg-opacity-60 backdrop-blur-lg delay-500 rounded-b-xl"
          }`}
        >
          {/* logo */}
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            href="/"
          >
            <figure className="flex items-center justify-center gap-[1rem]">
              <img
                src={Logo}
                alt=""
                className="w-[3.125rem] h-[3.125rem] xl:w-[2.125rem] xl:h-[2.125rem] object-cover"
              />
              <figcaption
                viewport={{ once: true }}
                className="text-primary text-[1.2rem] md:text-[2rem] xl:text-[1.5rem] font-bold"
              >
                DigitalDream
              </figcaption>
            </figure>
          </Link>
          {/* menus */}
          <ul className="hidden xl:flex items-center justify-center gap-[1.5rem]">
            {menus.map((menu, index) => (
              <li key={menu.id} className="cursor-pointer">
                <Link
                  to={menu.link}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary text-[1rem]"
                  href={menu.link}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* kontak */}
          <a
            href="https://cal.com/digitalndream/30min"
            target="_blank"
            aria-label="book a call"
          >
            <Btn
              title="Book a Call"
              style="hidden xl:flex justify-center items-center bg-primary hover:bg-[#04525b] transition-all duration-500 ease-in-out border border-primary px-[1.5rem] py-[0.719rem] rounded-[0.75rem] relative overflow-hidden"
            />
          </a>
          {/* hamburger menu */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="xl:hidden flex flex-col justify-between items-center w-[30px] md:w-[40px] h-[20px] md:h-[30px] gap-[2px] mt-1"
            aria-label="hamburger menu"
          >
            <span
              className={`w-full h-[2px] bg-primary transition-all ease-in-out duration-500 delay-150 ${
                openMenu
                  ? "rotate-45 translate-y-1.5 md:rotate-45 md:translate-y-4"
                  : "rotate-0 translate-y-0"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-primary transition-all ease-in-out duration-500 ${
                openMenu ? "opacity-0" : "opacity-100 delay-150"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-primary transition-all ease-in-out duration-500 delay-150 ${
                openMenu
                  ? "-rotate-45 -translate-y-3"
                  : "rotate-0 translate-y-0"
              }`}
            ></span>
          </button>
        </motion.div>
        {/* menu mobile */}
        <div
          className={`w-full p-5 bg-white absolute z-0 rounded-b-2xl transition-all ease-in duration-500 ${
            openMenu ? "top-[65px] opacity-100" : "-top-[350px] opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-[1.5rem]">
            {menus.map((menu) => (
              <li key={menu.id} className="cursor-pointer">
                <Link
                  to={menu.link}
                  href={menu.link}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary text-[1.1rem] md:text-[1.8rem] font-semibold"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <a
              href="https://cal.com/digitalndream/30min"
              aria-label="book a call"
              target="_blank"
              className="border border-primary px-[1.5rem] py-[0.719rem] rounded-[0.75rem] bg-primary hover:bg-[#04525b] text-white text-[1.1rem] md:text-[1.8rem] transition-all duration-500 ease-in-out mt-[1.5rem]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
