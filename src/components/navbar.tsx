import { JSX, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoEPD from "../assets/logo-energiapd-blanco-2-1.png";
import vector1 from "../assets/vector1.svg";

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (type: string) => {
    setIsOpen((prev) => {
      setOpenMenu(type);
      return !prev;
    });
  };

  const isActive = (path: string) => location.pathname === path;

  const menuList = {
    epc: [
      { name: "USED", url: "/epc/used" },
      { name: "UPM", url: "/epc/upm" },
      { name: "UAT", url: "/epc/uat" },
    ],
    contact: [
      { name: "Contáctanos", url: "/contacto" },
      { name: "Únete a Nuestro Equipo", url: "/empleo" },
    ],
  };

  return (
    <div className="">
      <nav className="w-full flex justify-between items-center py-4 md:py-[21px] px-4 md:px-[87px]">
        <Link to="/">
          <img
            className="cursor-pointer w-[120px] md:w-[170px]"
            src={logoEPD}
            alt="Logo EPD"
          />
        </Link>

        {/* Hamburger Button - Solo móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white z-50"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap items-center justify-end gap-[36px]">
          <li>
            <Link
              to="/"
              className={`text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className={`text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition ${
                isActive("/nosotros") ? "border-b-2 border-white" : ""
              }`}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/proyectos"
              className={`text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition ${
                isActive("/proyectos") ? "border-b-2 border-white" : ""
              }`}
            >
              Proyecto
            </Link>
          </li>
          <li
            onClick={(e) => {
              toggleMenu("epc");
              e.stopPropagation();
            }}
            className="relative"
          >
            <div className="flex gap-[8px] text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition">
              EPCs
              <img src={vector1} alt="Vector Icon" />
            </div>
            {isOpen && openMenu === "epc" && (
              <div className="absolute w-[315px] right-0 mt-3 rounded-[25px] bg-white p-4 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white z-50">
                <ul className="w-full space-y-3">
                  {menuList.epc.map((item) => (
                    <li key={item.name} className="w-full px-4">
                      <Link
                        className="inline-flex w-full justify-between items-center text-black font-poppins text-[18px] font-bold tracking-[-0.18px] hover:bg-gray-200 p-2 rounded-[10px]"
                        to={item.url}
                      >
                        {item.name}
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.36328C0.447715 6.36328 2.89694e-08 6.811 0 7.36328C-2.89694e-08 7.91557 0.447715 8.36328 1 8.36328L1 7.36328L1 6.36328ZM16.5731 8.07039C16.9636 7.67986 16.9636 7.0467 16.5731 6.65618L10.2091 0.292214C9.81858 -0.0983105 9.18542 -0.0983105 8.79489 0.292214C8.40437 0.682738 8.40437 1.3159 8.79489 1.70643L14.4517 7.36328L8.79489 13.0201C8.40437 13.4107 8.40437 14.0438 8.79489 14.4343C9.18542 14.8249 9.81858 14.8249 10.2091 14.4343L16.5731 8.07039ZM1 7.36328L1 8.36328L15.866 8.36328L15.866 7.36328L15.866 6.36328L1 6.36328L1 7.36328Z"
                            fill="#083EA3"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/servicios"
              className={`text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition ${
                isActive("/servicios") ? "border-b-2 border-white" : ""
              }`}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/suministros"
              className={`text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-80 transition ${
                isActive("/suministros") ? "border-b-2 border-white" : ""
              }`}
            >
              Suministros
            </Link>
          </li>
          <li
            onClick={(e) => {
              toggleMenu("contact");
              e.stopPropagation();
            }}
            className="relative"
          >
            <div className="flex gap-[8px] rounded-[38.651px] bg-[linear-gradient(98deg,#A11E1F_7.34%,#84191A_91.69%)] shadow-[0_0_14.866px_0_rgba(0,0,0,0.1)] pt-[10.92px] pr-[22.299px] pb-[8.92px] pl-[22.299px] items-center text-white font-semibold font-poppins text-[18px] leading-[22.894px] tracking-[-0.54px] cursor-pointer hover:opacity-90 transition">
              Contáctanos
              <img src={vector1} alt="Vector Icon" />
            </div>
            {isOpen && openMenu === "contact" && (
              <div className="absolute w-[315px] right-0 mt-3 rounded-[25px] bg-white p-4 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white z-50">
                <ul className="w-full space-y-3">
                  {menuList.contact.map((item) => (
                    <li key={item.name} className="w-full px-4">
                      <Link
                        className="inline-flex w-full justify-between items-center text-black font-poppins text-[18px] font-bold tracking-[-0.18px] hover:bg-gray-200 p-2 rounded-[10px]"
                        to={item.url}
                      >
                        {item.name}
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.36328C0.447715 6.36328 2.89694e-08 6.811 0 7.36328C-2.89694e-08 7.91557 0.447715 8.36328 1 8.36328L1 7.36328L1 6.36328ZM16.5731 8.07039C16.9636 7.67986 16.9636 7.0467 16.5731 6.65618L10.2091 0.292214C9.81858 -0.0983105 9.18542 -0.0983105 8.79489 0.292214C8.40437 0.682738 8.40437 1.3159 8.79489 1.70643L14.4517 7.36328L8.79489 13.0201C8.40437 13.4107 8.40437 14.0438 8.79489 14.4343C9.18542 14.8249 9.81858 14.8249 10.2091 14.4343L16.5731 8.07039ZM1 7.36328L1 8.36328L15.866 8.36328L15.866 7.36328L15.866 6.36328L1 6.36328L1 7.36328Z"
                            fill="#083EA3"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#013852] to-[#A11E1F] transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-6 space-y-6">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20 ${
                isActive("/") ? "text-yellow-300" : ""
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20 ${
                isActive("/nosotros") ? "text-yellow-300" : ""
              }`}
            >
              Nosotros
            </Link>
            <Link
              to="/proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20 ${
                isActive("/proyectos") ? "text-yellow-300" : ""
              }`}
            >
              Proyecto
            </Link>
            
            {/* EPCs Accordion */}
            <div>
              <button
                onClick={() => toggleMenu("epc")}
                className="flex justify-between items-center w-full text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20"
              >
                EPCs
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMenu === "epc" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openMenu === "epc" && (
                <div className="pl-4 space-y-2 mt-2">
                  {menuList.epc.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 font-poppins text-[16px] py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/servicios"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20 ${
                isActive("/servicios") ? "text-yellow-300" : ""
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/suministros"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20 ${
                isActive("/suministros") ? "text-yellow-300" : ""
              }`}
            >
              Suministros
            </Link>

            {/* Contact Accordion */}
            <div>
              <button
                onClick={() => toggleMenu("contact")}
                className="flex justify-between items-center w-full text-white font-semibold font-poppins text-[18px] py-3 border-b border-white/20"
              >
                Contáctanos
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMenu === "contact" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openMenu === "contact" && (
                <div className="pl-4 space-y-2 mt-2">
                  {menuList.contact.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 font-poppins text-[16px] py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overlay para cerrar el menú móvil */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};