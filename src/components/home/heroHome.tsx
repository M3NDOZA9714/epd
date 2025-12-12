
import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroHome = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      {/* Main Heading */}
      <p className="text-white text-shadow-lg font-poppins font-bold leading-tight sm:leading-snug md:leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl">
        "Nos Inspiran los Grandes Desafíos. Los Enfrentamos Sin Límites"
      </p>

      {/* Subtitle */}
      <p className="text-white text-shadow-md font-poppins font-medium leading-relaxed text-base sm:text-lg md:text-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        Creamos junto a nuestros clientes algo más que proyectos: soluciones EPC
        que transforman el sector energético y dejan una huella positiva en cada
        lugar donde llegamos
      </p>

      {/* CTA Button */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <ButtonArrow variant="outline" size="md">
          Contáctanos
        </ButtonArrow>
      </div>
    </div>
  );
};