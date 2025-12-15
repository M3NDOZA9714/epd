import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroAboutUs = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      {/* Main Heading */}
      <p className="text-shadow-dark text-white text-center font-poppins text-5xl font-bold leading-[85px] sm:text-3xl md:text-4xl lg:text-5xl max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl">
        ¿Quiénes Somos?
      </p>

      {/* Subtitle */}
      <p className="text-white text-center font-poppins text-xl font-medium leading-[40px] text-shadow-subtle sm:text-lg md:text-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
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
