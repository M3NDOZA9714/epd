import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroAboutUs = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-20 lg:py-0">
      {/* Main Heading */}
      <p className="text-white text-shadow-dark font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug md:leading-relaxed max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        ¿Quiénes Somos?
      </p>

      {/* Subtitle */}
      <p className="text-white text-shadow-subtle font-poppins text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        Conoce la historia y trayectoria de Energía PD
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
