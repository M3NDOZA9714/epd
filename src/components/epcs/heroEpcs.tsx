import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroEpcs = (): JSX.Element => {
  return (
    <section className="w-full h-full flex flex-col flex-1 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-6 sm:space-y-8 py-12 sm:py-16 md:py-20 lg:py-0">
      <div className="text-white text-center font-poppins font-bold text-shadow-dark space-y-2 sm:space-y-3">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-relaxed">
          Los Desafíos Nos Impulsan
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-relaxed">
          Las Soluciones Nos Definen
        </p>
      </div>
      <div className="w-full flex justify-center mt-4 sm:mt-6">
        <ButtonArrow variant="primary" size="md">
          Contáctanos
        </ButtonArrow>
      </div>
    </section>
  );
};
