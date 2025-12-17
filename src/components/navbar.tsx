import { JSX, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoEPD from "../assets/home/logo-energiapd-blanco-2-1.png";
import vector1 from "../assets/home/vector1.svg";

export const Navbar = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string>("");
  const [desktopDropdown, setDesktopDropdown] = useState<string>("");
  const location = useLocation();

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown("");
  }, [location.pathname]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuList = {
    services: [
      { name: "UDE", url: "/servicios/ude" },
      { name: "USE", url: "/servicios/use" },
      { name: "UPM", url: "/servicios/upm" },
      { name: "UAT", url: "/servicios/uat" },
    ],
    contact: [
      { name: "Contáctanos", url: "/contacto" },
      { name: "Únete a Nuestro Equipo", url: "/empleo" },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  const renderArrow = (isOpen: boolean) => (
    <svg
      className={`w-4 h-4 transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <nav className="w-full flex justify-between items-center py-4 md:py-6 px-4 md:px-12 lg:px-[87px] bg-transparent relative z-50">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          className="w-[100px] sm:w-[120px] lg:w-[170px]"
          src={logoEPD}
          alt="Logo EPD"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-wrap items-center justify-end gap-6 xl:gap-9">
        <li>
          <Link
            to="/"
            className={`text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg hover:opacity-80 transition ${
              isActive("/") ? "border-b-2 border-white" : ""
            }`}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            className={`text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg hover:opacity-80 transition ${
              isActive("/nosotros") ? "border-b-2 border-white" : ""
            }`}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/epcs"
            className={`text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg hover:opacity-80 transition ${
              isActive("/epcs") ? "border-b-2 border-white" : ""
            }`}>
            EPCs
          </Link>
        </li>

        {/* services Dropdown Desktop */}
        <li
          className="relative group"
          onMouseEnter={() => setDesktopDropdown("services")}
          onMouseLeave={() => setDesktopDropdown("")}>
          <div className="flex gap-2 text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg cursor-pointer hover:opacity-80 transition items-center py-2">
            Servicios
            <img src={vector1} alt="Vector Icon" className="w-4 h-4" />
          </div>
          {desktopDropdown === "services" && (
            <div className="absolute w-64 right-0 mt-1 rounded-2xl bg-white p-4 shadow-2xl z-50 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white animate-in fade-in duration-200">
              <ul className="space-y-2">
                {menuList.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className="flex justify-between items-center px-4 py-2 text-black font-poppins font-bold text-sm hover:bg-gray-100 rounded-lg transition">
                      {item.name}
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none">
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
            to="/suministros"
            className={`text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg hover:opacity-80 transition ${
              isActive("/suministros") ? "border-b-2 border-white" : ""
            }`}>
            Suministros
          </Link>
        </li>

        {/* Contact Dropdown Desktop */}
        <li
          className="relative group"
          onMouseEnter={() => setDesktopDropdown("contact")}
          onMouseLeave={() => setDesktopDropdown("")}>
          <div className="flex gap-2 rounded-full bg-gradient-to-r from-[#A11E1F] to-[#84191A] shadow-lg py-2 px-4 xl:px-6 items-center text-white font-semibold font-poppins text-sm lg:text-base xl:text-lg cursor-pointer hover:opacity-90 transition">
            Contáctanos
            <img src={vector1} alt="Vector Icon" className="w-4 h-4" />
          </div>
          {desktopDropdown === "contact" && (
            <div className="absolute w-64 right-0 mt-1 rounded-2xl bg-white p-4 shadow-2xl z-50 before:content-[''] before:absolute before:bottom-full before:right-8 before:border-8 before:border-transparent before:border-b-white animate-in fade-in duration-200">
              <ul className="space-y-2">
                {menuList.contact.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className="flex justify-between items-center px-4 py-2 text-black font-poppins font-bold text-sm hover:bg-gray-100 rounded-lg transition">
                      {item.name}
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none">
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

      {/* Hamburger Button - Mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white z-50"
        aria-label="Toggle menu">
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
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

      {/* Mobile Menu Overlay - Cubre toda la pantalla */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-4/5 sm:w-2/3 bg-gradient-to-b from-[#013852] to-[#A11E1F] overflow-y-auto z-40">
          <div className="flex flex-col space-y-1 pt-20 px-4 sm:px-6">
            {/* Navigation Links */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 transition ${
                isActive("/") ? "text-yellow-300" : ""
              }`}>
              Inicio
            </Link>
            <Link
              to="/nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 transition ${
                isActive("/nosotros") ? "text-yellow-300" : ""
              }`}>
              Nosotros
            </Link>
            <Link
              to="/epcs"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 transition ${
                isActive("/epcs") ? "text-yellow-300" : ""
              }`}>
              EPCs
            </Link>

            {/* EPCs Accordion */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "services" ? "" : "services")
                }
                className="w-full flex justify-between items-center text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 hover:bg-white/10 transition">
                Servicios
                {renderArrow(openDropdown === "services")}
              </button>
              {openDropdown === "services" && (
                <div className="bg-white/10 space-y-1">
                  {menuList.services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 font-poppins text-sm py-2 px-8 hover:bg-white/20 transition">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/suministros"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 transition ${
                isActive("/suministros") ? "text-yellow-300" : ""
              }`}>
              Suministros
            </Link>

            {/* Contact Accordion */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "contact" ? "" : "contact")
                }
                className="w-full flex justify-between items-center text-white font-semibold font-poppins py-3 px-4 border-b border-white/20 hover:bg-white/10 transition">
                Contáctanos
                {renderArrow(openDropdown === "contact")}
              </button>
              {openDropdown === "contact" && (
                <div className="bg-white/10 space-y-1">
                  {menuList.contact.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/80 font-poppins text-sm py-2 px-8 hover:bg-white/20 transition">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
