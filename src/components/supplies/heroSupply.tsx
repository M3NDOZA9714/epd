import { JSX } from "react";
import { ButtonArrow } from "../button";

export const HeroSupply = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="text-white text-center font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-[52px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.40)]">
        Suministros eléctricos confiables que impulsan tus proyectos
      </div>

      <div className="flex flex-col gap-4 text-white text-center [text-shadow:1px_1px_5px_rgba(0,0,0,0.50)] font-poppins text-xl font-medium leading-[34px] self-stretch">
        <p>
          En Energía PD suministramos soluciones integrales de equipos para el
          sector energético, ofreciendo tecnología confiable, asesoría técnica y
          productos seleccionados según las necesidades de cada proyecto.
        </p>

        <p>
          Nuestro enfoque es brindar equipos de calidad y que aporten valor a
          nuestros clientes.
        </p>
      </div>

      <ButtonArrow variant="secondary">Contáctanos</ButtonArrow>
    </section>
  );
};
