import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroEpcs = (): JSX.Element => {
  return (
    <section className="w-full h-full flex flex-col flex-1 justify-center items-start px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      <div className="text-white text-center font-poppins text-5xl font-bold leading-[64px] text-shadow-dark self-stretch">
        <p>Los Desafíos Nos Impulsan</p>
        <p>Las Soluciones Nos Definen</p>
      </div>
      <div className="w-full flex justify-center">
        <ButtonArrow variant="primary" size="md">
        Contáctanos
      </ButtonArrow>
      </div>
    </section>
  );
};
