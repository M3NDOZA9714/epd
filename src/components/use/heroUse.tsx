import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroUse = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col flex-1 justify-center items-center px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      {/* Main Heading */}
      <p className="text-center text-white text-shadow-lg font-poppins font-bold leading-tight sm:leading-snug md:leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl">
        Unidad de Servicios Especializados
      </p>

      {/* Subtitle */}
      <p className="text-center text-white text-shadow-md font-poppins font-medium leading-relaxed text-base sm:text-lg md:text-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        Soluciones especializadas para mantener tus equipos en operación.
      </p>

      {/* CTA Button */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <ButtonArrow variant="primary" size="md">
          Contáctanos
        </ButtonArrow>
      </div>
    </div>
  );
};
