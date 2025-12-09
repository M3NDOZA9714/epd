import { JSX, useEffect, useRef, useState } from "react";
import logoEPD from "../assets/logo-energiapd-blanco-2-1.png";
import vector1 from "../assets/vector1.svg";

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (type: string) => {
    setIsOpen((prev) => {
      setOpenMenu(type);
      return !prev;
    });
  };

  const menuList = {
    epc: [
      { name: "USED", url: "" },
      { name: "UPM", url: "" },
      { name: "UAT", url: "" },
    ],
    contact: [
      { name: "Contáctanos", url: "#contact-general" },
      { name: "Únete a Nuestro Equipo", url: "#support" },
    ],
  };

  return (
    <div className="">
      <nav className="w-full flex justify-between items-center py-[21px] px-[87px]">
        <img
          className=""
          src={logoEPD}
          width="170px"
          height="65px"
          alt="Logo EPD"
        />
        <ul className="w-full flex flex-wrap items-center justify-end gap-[36px]">
          <li className="text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
            Inicio
          </li>
          <li className="text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
            Nosotros
          </li>
          <li className="text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
            Proyecto
          </li>
          <li
            onClick={(e) => {
              toggleMenu("epc");
              e.stopPropagation();
            }}
            className="relative">
            <div className="flex gap-[8px] d- text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
              EPCs
              <img src={vector1} alt="Vector Icon" />
            </div>
            {isOpen && openMenu === "epc" && (
              <div className="absolute w-[315px] right-0 mt-3 rounded-[25px] bg-white p-4 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white">
                <ul className="w-full space-y-3">
                  {menuList.epc.map((item) => (
                    <li key={item.name} className="w-full px-4">
                      <a
                        className="inline-flex w-full justify-between items-center text-black font-poppins text-[18px] font-bold tracking-[-0.18px] hover:bg-gray-200 p-2 rounded-[10px]"
                        href={item.url}>
                        {item.name}
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 6.36328C0.447715 6.36328 2.89694e-08 6.811 0 7.36328C-2.89694e-08 7.91557 0.447715 8.36328 1 8.36328L1 7.36328L1 6.36328ZM16.5731 8.07039C16.9636 7.67986 16.9636 7.0467 16.5731 6.65618L10.2091 0.292214C9.81858 -0.0983105 9.18542 -0.0983105 8.79489 0.292214C8.40437 0.682738 8.40437 1.3159 8.79489 1.70643L14.4517 7.36328L8.79489 13.0201C8.40437 13.4107 8.40437 14.0438 8.79489 14.4343C9.18542 14.8249 9.81858 14.8249 10.2091 14.4343L16.5731 8.07039ZM1 7.36328L1 8.36328L15.866 8.36328L15.866 7.36328L15.866 6.36328L1 6.36328L1 7.36328Z"
                            fill="#083EA3"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
            Servicios
          </li>
          <li className="text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
            Suministros
          </li>
          <li
            onClick={(e) => {
              toggleMenu("contact");
              e.stopPropagation();
            }}
            className="relative">
            <div className="flex gap-[8px] rounded-[38.651px] bg-[linear-gradient(98deg,#A11E1F_7.34%,#84191A_91.69%)] shadow-[0_0_14.866px_0_rgba(0,0,0,0.1)] pt-[10.92px] pr-[22.299px] pb-[8.92px] pl-[22.299px] items-center text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer">
              Contáctanos
              <img src={vector1} alt="Vector Icon" />
            </div>
            {isOpen && openMenu === "contact" && (
              <div className="absolute w-[315px] right-0 mt-3 rounded-[25px] bg-white p-4 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white">
                <ul className="w-full space-y-3">
                  {menuList.epc.map((item) => (
                    <li key={item.name} className="w-full px-4">
                      <a
                        className="inline-flex w-full justify-between items-center text-black font-poppins text-[18px] font-bold tracking-[-0.18px] hover:bg-gray-200 p-2 rounded-[10px]"
                        href={item.url}>
                        {item.name}
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 6.36328C0.447715 6.36328 2.89694e-08 6.811 0 7.36328C-2.89694e-08 7.91557 0.447715 8.36328 1 8.36328L1 7.36328L1 6.36328ZM16.5731 8.07039C16.9636 7.67986 16.9636 7.0467 16.5731 6.65618L10.2091 0.292214C9.81858 -0.0983105 9.18542 -0.0983105 8.79489 0.292214C8.40437 0.682738 8.40437 1.3159 8.79489 1.70643L14.4517 7.36328L8.79489 13.0201C8.40437 13.4107 8.40437 14.0438 8.79489 14.4343C9.18542 14.8249 9.81858 14.8249 10.2091 14.4343L16.5731 8.07039ZM1 7.36328L1 8.36328L15.866 8.36328L15.866 7.36328L15.866 6.36328L1 6.36328L1 7.36328Z"
                            fill="#083EA3"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
