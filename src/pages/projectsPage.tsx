import { JSX, useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import csbImage from "../assets/home/IMG - SAN BUENAVENTURA.jpg";
import vgdImage from "../assets/home/img - VILLANUEVA GENERACION DIESEL.png";
import leImage from "../assets/home/img - LA ENSENADA.jpg";
import efImage from "../assets/home/img - EL FARO.png";
import snnImage from "../assets/home/img - SE NUEVA NACAOME.jpg";

export interface ProjectCard {
  id: string;
  image: string;
  imageText?: string;
}

export const ProjectsPage = (): JSX.Element => {
  const projects: ProjectCard[] = [
    { id: "1", image: csbImage, imageText: "CA-5 SAN BUENAVENTURA" },
    { id: "2", image: vgdImage, imageText: "VILLANUEVA GENERACIÓN DIESEL" },
    { id: "3", image: leImage, imageText: "LA ENSENADA" },
    { id: "4", image: efImage, imageText: "EL FARO" },
    { id: "5", image: snnImage, imageText: "SUBESTACIÓN NUEVA NACAOME" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const visibleSlides = 3;
  const gapPx = 16; // Tailwind gap-4 = 16px

  const maxIndex = Math.max(projects.length - visibleSlides, 0);

  // Medir el ancho del contenedor
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

  const slideWidth =
    (containerWidth - (visibleSlides - 1) * gapPx) / visibleSlides;

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
    <div className="relative w-full p-12">
      {/* Contenedor del slider */}
      <div ref={containerRef} className="overflow-hidden w-full rounded-2xl">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (slideWidth + gapPx)}px)`,
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

      {/* Botones abajo a la izquierda */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={goToPrevious}
          className="p-2 bg-white rounded-full shadow-md"
          aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="p-2 bg-white rounded-full shadow-md"
          aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-blue-500 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
