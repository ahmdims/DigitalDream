import Logo from "../img/logo/logo.svg";
import Ft1 from "../img/icon/ft1.svg";
import Ft2 from "../img/icon/ft2.svg";
import Ft3 from "../img/icon/ft3.svg";
import Ft4 from "../img/icon/ft4.svg";

export default function Footer() {
  const ft_icons = [
    { id: 1, icon: Ft1, link: "https://dribbble.com/digitalndream" },
    { id: 2, icon: Ft2, link: "https://www.behance.net/digitalndream" },
    { id: 3, icon: Ft3, link: "https://www.instagram.com/digitalndream" },
    {
      id: 4,
      icon: Ft4,
      link: "https://www.linkedin.com/company/digitalndream",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-box bg-white py-[1.5rem] px-[2rem] flex flex-col md:flex-row justify-center md:justify-between gap-[1rem] md:gap-0">
        {/* kiri */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-[1rem]">
          {/* logo */}
          <figure className="flex items-center justify-center gap-[1rem]">
            <img
              src={Logo}
              alt=""
              className="w-[2.125rem] h-[2.125rem] md:w-[2.5rem] md:h-[2.5rem] xl:w-[2.125rem] xl:h-[2.125rem] object-cover"
            />
            <figcaption className="text-primary text-[1.5rem] font-bold">
              DigitalDream
            </figcaption>
          </figure>
          {/* icons */}
          <div className="flex justify-center items-center md:justify-start md:items-start gap-[1rem] xl:gap-[0.75rem]">
            {ft_icons.map((ft_icon) => (
              <figure key={ft_icon.id}>
                <a
                  href={ft_icon.link}
                  target="_blank"
                  className="cursor-pointer"
                  aria-label="icon sosial media"
                >
                  <img src={ft_icon.icon} alt="" />
                </a>
              </figure>
            ))}
          </div>
        </div>
        {/* tengah */}
        <div className="flex items-center justify-center">
          <p className="text-primary text-[20px] leading-[28px]">
            "Bring Your Ideas to Life"
          </p>
        </div>
        {/* kanan */}
        <div className="flex flex-col items-center md:items-end justify-center gap-[1rem]">
          <h2 className="text-[1.25rem] text-secondary text-center md:text-end">
            Malang City, East Java, Indonesia
          </h2>
          <h2 className="text-[1.25rem] text-secondary text-center md:text-end">
            © {new Date().getFullYear()} DigitalDream
          </h2>
        </div>
      </div>
    </footer>
  );
}
