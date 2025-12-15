import { JSX, useState } from "react";
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full space-y-8 md:space-y-12">
      <DynamicBackground
        mediaType="image"
        mediaSource={nuestorProyectos}
        gradient="bg-gradient-to-tr from-[#14559C]/95 to-[#259DD7]/90">
        <div className="flex flex-col gap-[50px] p-11">
          <div className="flex justify-center items-center">
            <span className="rounded-full border border-white/15 bg-[#A11E1F] shadow-inner-white backdrop-blur-sm py-2 px-4 text-center text-white font-gotham text-xs sm:text-sm font-medium">
              Nuestros Proyectos
            </span>
          </div>
          <div className="text-white text-center font-poppins text-3xl font-bold leading-10">
            Explora las soluciones energéticas que hemos llevado a distintos
            lugares
          </div>
        </div>
        <div className="w-full space-y-8 md:space-y-12">
          <div className="flex justify-center px-4 sm:px-6 md:px-8">
            <div className="relative w-full max-w-7xl mx-auto">
              <div
                className="overflow-hidden rounded-2xl md:rounded-3xl"
                style={{ "--slide-distance": "100%" } as React.CSSProperties}>
                {/* Slide Track (The one that moves) */}
                <div
                  className="h-[400px] sm:h-[450px] md:h-[500px] transition-transform duration-500 ease-in-out flex items-stretch gap-6"
                  style={{
                    transform: `translateX(calc(-${currentIndex} * var(--slide-distance)))`,
                  }}>
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-full sm:w-[495px] relative rounded-2xl md:rounded-3xl overflow-hidden">
                      {/* Image Element */}
                      <img
                        src={project.image}
                        alt={project.imageText}
                        className="w-full h-full object-cover"
                      />

                      {/* Contenedor del Texto Superpuesto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 md:p-10 lg:p-12">
                        <p className="text-white font-poppins text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                          {project.imageText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End of overflow-hidden wrapper */}

              {/* Navigation Buttons */}
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 z-20">
                <button
                  onClick={goToPrevious}
                  className="p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300 shadow-md"
                  aria-label="Anterior servicio">
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300 shadow-md"
                  aria-label="Siguiente servicio">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            {/* End of relative max-w-7xl wrapper */}
          </div>
          {/* End of flex justify-center */} {/* Indicators - Only dots */}
          <div className="flex justify-center gap-2 sm:gap-3 pt-4 md:pt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#0094D9] scale-125 shadow-lg shadow-[#0094D9]/50 w-7"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110 w-2 sm:w-2"
                }`}
                aria-label={`Ir a servicio ${index + 1}`}
                title={projects[index]?.imageText}
              />
            ))}
          </div>
        </div>
      </DynamicBackground>
    </section>
  );
};
