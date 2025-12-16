import { JSX, useEffect, useRef, useState } from "react";
import nuestorProyectos from "../../assets/home/nuestrosProyectos.png";
import DynamicBackground from "../video";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface ProjectCard {
  id: string;
  image: string;
  imageText?: string;
}

interface ProjectsProps {
  projects: ProjectCard[];
}

export const OurProjects = ({ projects }: ProjectsProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const gapPx = 16; // gap-4

  // 🔥 Slides visibles según tamaño
  const visibleSlides = containerWidth < 768 ? 1 : 3;

  const maxIndex = Math.max(projects.length - visibleSlides, 0);

  // Medir ancho del contenedor
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

  // Evitar quedar fuera de rango al cambiar tamaño
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const slideWidth =
    containerWidth > 0
      ? (containerWidth - (visibleSlides - 1) * gapPx) / visibleSlides
      : 0;

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
    <DynamicBackground
      mediaType="image"
      mediaSource={nuestorProyectos}
      gradient="bg-gradient-to-tr from-[#14559C]/95 to-[#259DD7]/90">
      <section className="w-full h-full flex flex-col flex-1 space-y-8 md:space-y-12 py-25">
        {/* Header */}
        <div className="flex flex-col gap-[50px] p-11">
          <div className="flex justify-center">
            <span className="rounded-full border border-white/15 bg-[#A11E1F] py-2 px-4 text-white text-xs sm:text-sm font-medium">
              Nuestros Proyectos
            </span>
          </div>
          <div className="text-white text-center text-2xl sm:text-3xl font-bold">
            Explora las soluciones energéticas que hemos llevado a distintos
            lugares
          </div>
        </div>

        {/* Slider */}
        <div className="flex justify-center w-full px-4">
          <div className="flex flex-col w-full max-w-7xl gap-7 pb-12">
            <div ref={containerRef} className="overflow-hidden rounded-2xl">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (slideWidth + gapPx)
                  }px)`,
                }}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 rounded-2xl overflow-hidden"
                    style={{ width: `${slideWidth}px` }}>
                    <img
                      src={project.image}
                      alt={project.imageText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores */}
            <div className="relative flex justify-center items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-[#0094D9] w-7 shadow-lg"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}

              {/* Botones */}
              <div className="absolute -bottom-3 left-4 flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 bg-white rounded-full shadow-md">
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 bg-white rounded-full shadow-md">
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DynamicBackground>
  );
};
