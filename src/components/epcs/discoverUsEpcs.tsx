import { JSX, useEffect, useRef, useState } from "react";
import slide1 from "../../assets/epcs/slide1.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface ProjectCard {
  id: string;
  title: string;
  image: string;
  location: string;
  capacity: string;
}

export const DiscoverUsEpcs = (): JSX.Element => {
  const projects: ProjectCard[] = [
    {
      id: "1",
      title: "Línea de Transmisión",
      image: slide1,
      location: "En CA-5",
      capacity: "230kV",
    },
    {
      id: "2",
      title: "Línea de Transmisión",
      image: slide1,
      location: "En CA-5",
      capacity: "230kV",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const visibleSlides = 1;
  const maxIndex = Math.max(projects.length - visibleSlides, 0);

  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const slideWidth = containerWidth;

  // Navegación
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="px-[16px] py-[6px] w-fit rounded-[100px] border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-poppins text-base font-semibold leading-[26px] tracking-tight self">
          Descubre Nuestros Proyectos
        </div>
        <div className="text-[#0094D9] text-center font-poppins text-xl sm:text-4xl font-bold leading-[54px] tracking-tighter">
          Soluciones EPC que Transforman la Infraestructura Energética de la
          Región
        </div>

        <div className="flex flex-col gap-6 text-black font-poppins text-base sm:text-xl font-normal leading-[34px]">
          <p className="">
            En <span className="font-semibold">Energía PD</span> creemos que un
            proyecto exitoso empieza mucho antes de la construcción. Por eso
            acompañamos a nuestros clientes desde la etapa de concepto,
            desarrollando la ingeniería que les permite visualizar la mejor
            solución técnica y económica para su proyecto. Transformamos ideas
            en proyectos confiables y seguros.
          </p>
          <p>
            Nuestro enfoque EPC integra ingeniería, suministro, construcción y
            puesta en marcha en un solo equipo coordinado, reduciendo riesgos,
            simplificando la gestión y asegurando cumplimiento en tiempo, costo
            y calidad.
          </p>

          <p>
            Con tecnología de última generación, aliados estratégicos y una
            cadena de suministro robusta, construimos proyectos que cumplen con
            los más altos estándares.
          </p>

          <p>
            Más que un contratista EPC, somos un socio comprometido con la
            visión de cada cliente. Diseñamos, construimos y ponemos en marcha
            infraestructura que fortalece el sistema eléctrico de Centroamérica
            y contribuye al desarrollo sostenible de la región.
          </p>

          <p>
            En Energía PD, los proyectos EPC se construyen con experiencia,
            precisión técnica y la pasión que nos impulsa a superar
            expectativas, siempre trabajando{" "}
            <span className="italic font-semibold">Sin Límites.</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full px-4">
        <div className="relative flex flex-col w-full max-w-7xl gap-6 pb-12">
          {/* Viewport */}
          <div ref={containerRef} className="overflow-hidden rounded-[24px]">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
              }}>
              {projects.map((project) => (
                <div
                  key={"proj" + project.id}
                  className="relative flex-shrink-0 overflow-hidden h-[600px]"
                  style={{ width: `${slideWidth}px` }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className=" absolute inset-0 flex flex-col justify-end gap-3 sm:gap-4 md:gap-4 p-4 sm:p-6 md:p-10  bg-[linear-gradient(0deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.40)_50%,rgba(0,0,0,0.00)_100%)] ">
                    {/* Badge */}
                    <div className="  w-fit  px-3 py-1 rounded-full   border border-white/50   bg-white/20  text-white text-xs sm:text-sm  font-poppins  ">
                      Proyecto Destacado
                    </div>

                    {/* Título */}
                    <div className="    text-white   font-poppins   text-base sm:text-lg md:text-lg font-semibold leading-snug  ">
                      {project.title}
                    </div>

                    {/* Metadata */}
                    <div className="  flex flex-col sm:flex-row  gap-2 sm:gap-6  text-white font-poppins text-sm sm:text-base ">
                      {/* Ubicación */}
                      <div className="flex items-center gap-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.33398 10H11.6673"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.33398 6.66699H11.6673"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6673 17.4997V14.9997C11.6673 14.5576 11.4917 14.1337 11.1792 13.8212C10.8666 13.5086 10.4427 13.333 10.0007 13.333C9.55862 13.333 9.1347 13.5086 8.82214 13.8212C8.50958 14.1337 8.33398 14.5576 8.33398 14.9997V17.4997"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.99935 8.33301H3.33268C2.89065 8.33301 2.46673 8.5086 2.15417 8.82116C1.84161 9.13372 1.66602 9.55765 1.66602 9.99967V15.833C1.66602 16.275 1.84161 16.699 2.15417 17.0115C2.46673 17.3241 2.89065 17.4997 3.33268 17.4997H16.666C17.108 17.4997 17.532 17.3241 17.8445 17.0115C18.1571 16.699 18.3327 16.275 18.3327 15.833V7.49967C18.3327 7.05765 18.1571 6.63372 17.8445 6.32116C17.532 6.0086 17.108 5.83301 16.666 5.83301H14.9993"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 17.5V4.16667C5 3.72464 5.17559 3.30072 5.48816 2.98816C5.80072 2.67559 6.22464 2.5 6.66667 2.5H13.3333C13.7754 2.5 14.1993 2.67559 14.5118 2.98816C14.8244 3.30072 15 3.72464 15 4.16667V17.5"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <span className="truncate">{project.location}</span>
                      </div>

                      {/* Capacidad */}
                      <div className="flex items-center gap-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.33422 11.6662C3.17653 11.6668 3.02191 11.6226 2.88835 11.5387C2.75479 11.4549 2.64775 11.3349 2.57968 11.1926C2.51161 11.0504 2.4853 10.8917 2.5038 10.7351C2.52231 10.5785 2.58487 10.4304 2.68422 10.3079L10.9342 1.8079C10.9961 1.73647 11.0804 1.6882 11.1734 1.67101C11.2663 1.65382 11.3623 1.66874 11.4457 1.71332C11.529 1.7579 11.5947 1.82948 11.632 1.91632C11.6693 2.00317 11.676 2.10011 11.6509 2.19123L10.0509 7.2079C10.0037 7.33417 9.98786 7.47 10.0047 7.60374C10.0216 7.73748 10.0706 7.86513 10.1476 7.97575C10.2247 8.08638 10.3274 8.17666 10.447 8.23887C10.5665 8.30107 10.6994 8.33334 10.8342 8.3329H16.6676C16.8253 8.33236 16.9799 8.37658 17.1134 8.46042C17.247 8.54425 17.354 8.66427 17.4221 8.80652C17.4902 8.94877 17.5165 9.10741 17.498 9.26402C17.4795 9.42062 17.4169 9.56877 17.3176 9.69123L9.06756 18.1912C9.00567 18.2627 8.92134 18.3109 8.8284 18.3281C8.73547 18.3453 8.63945 18.3304 8.55611 18.2858C8.47278 18.2412 8.40707 18.1697 8.36978 18.0828C8.33248 17.996 8.32582 17.899 8.35089 17.8079L9.95089 12.7912C9.99807 12.665 10.0139 12.5291 9.99706 12.3954C9.98021 12.2617 9.93117 12.134 9.85415 12.0234C9.77712 11.9128 9.67441 11.8225 9.55483 11.7603C9.43524 11.6981 9.30235 11.6658 9.16756 11.6662H3.33422Z"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <span className="truncate">{project.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className=" absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-between px-4 md:px-6 z-10 pointer-events-none ">
            <button
              onClick={goToPrevious}
              className=" pointer-events-auto p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300  "
              aria-label="Anterior servicio">
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="pointer-events-auto  p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800  transition hover:scale-110 duration-300  "
              aria-label="Siguiente servicio">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={"ind" + idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#0094D9] w-7 shadow-lg"
                    : "bg-gray-300 w-2"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
