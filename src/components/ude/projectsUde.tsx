import { JSX, useEffect, useRef, useState } from "react";
import { ButtonArrow } from "../button";
import slide1 from "../../assets/ude/slide1.png";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface ProjectCard {
  id: string;
  image: string;
}

export const ProjectsUde = (): JSX.Element => {
  const projects: ProjectCard[] = [
    {
      id: "1",
      image: slide1,
    },
    {
      id: "2",
      image: slide1,
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
      <div className="text-[#0094D9] text-center font-poppins text-[25px] font-semibold leading-6">
        Nuestros Proyectos
      </div>

      <div className="flex justify-center w-full">
        <div className="relative flex flex-col w-full max-w-7xl gap-6 pb-12">
          {/* Viewport */}
          <div
            ref={containerRef}
            className="overflow-hidden rounded-2xl md:rounded-3xl"
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={"proj" + project.id}
                  className="relative flex-shrink-0 overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
                  style={{ width: `${slideWidth}px` }}
                >
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 lg:p-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.40)_50%,rgba(0,0,0,0.00)_100%)]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="absolute hidden top-1/2 left-0 right-0 -translate-y-1/2 lg:flex items-center justify-between px-3 sm:px-4 md:px-6 z-10 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
              aria-label="Anterior servicio"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
              aria-label="Siguiente servicio"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={goToPrevious}
              className="flex lg:hidden pointer-events-auto p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
              aria-label="Anterior servicio"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
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
            <button
              onClick={goToNext}
              className="flex lg:hidden pointer-events-auto p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
              aria-label="Siguiente servicio"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
