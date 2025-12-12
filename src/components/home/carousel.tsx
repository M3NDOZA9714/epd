import { JSX, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { ButtonArrow } from "../button";

export interface ServiceCard {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  icon?: JSX.Element;
  imageText?: string;
}

interface ServicesCarouselProps {
  services: ServiceCard[];
}

const ServicesCarousel = ({ services }: ServicesCarouselProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      {/* Carousel Container */}
      <div className="w-full space-y-8 md:space-y-12">
        {/* Main Carousel - 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          {/* Left: Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 shadow-lg order-2 lg:order-1">
            <div
              className="h-full transition-all duration-500 ease-in-out flex"
              style={{
                transform: `translateX(calc(-${currentIndex} * 100%))`,
                width: "100%",
              }}>
              {services.map((service) => (
                <div
                  key={service.id}
                  className="h-full flex-shrink-0 flex-grow-0 basis-full relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/*Title overlay*/}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl flex flex-col justify-end p-4 sm:p-6 text-left">
                    <p className="text-white font-poppins text-base font-semibold leading-relaxed">
                      {service.imageText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden sm:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 md:px-6 z-10 pointer-events-none">
              <button
                onClick={goToPrevious}
                className="p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition pointer-events-auto hover:scale-110 duration-300"
                aria-label="Anterior servicio">
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition pointer-events-auto hover:scale-110 duration-300"
                aria-label="Siguiente servicio">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Navigation Buttons - Mobile (Bottom) */}
            <div className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
                aria-label="Anterior servicio">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition hover:scale-110 duration-300"
                aria-label="Siguiente servicio">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Content - Altura fija para evitar desplazamientos */}
          <div className="h-full flex flex-col md:space-y-6 justify-between order-1 lg:order-2 min-h-[320px] sm:min-h-[400px]">
            {/* Category Badge - Siempre arriba */}
            <div className="top-0 inline-flex w-fit">
              <span className="rounded-full border border-white/15 bg-[#A11E1F] shadow-inner-white backdrop-blur-sm py-2 px-4 text-center text-white font-gotham text-xs sm:text-sm font-medium">
                {currentService.category}
              </span>
            </div>

            {/* Title - Tamaño consistente */}
            <h3 className="text-[#14559C] font-poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-tight flex-shrink-0">
              {currentService.title}
            </h3>

            {/* Description - Crece/encoge según necesario */}
            <p className="text-gray-700 font-poppins text-sm sm:text-base leading-relaxed flex-grow">
              {currentService.description}
            </p>
          </div>
        </div>

        {/* Indicators - Solo círculos */}
        <div className="flex justify-center gap-2 sm:gap-3 pt-4 md:pt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "bg-[#0094D9] scale-125 shadow-lg shadow-[#0094D9]/50 w-7"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
              aria-label={`Ir a servicio ${index + 1}`}
              title={`${services[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
