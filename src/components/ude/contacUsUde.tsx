import { JSX } from "react";
import { ButtonArrow } from "../button";
import diagnosticImage from "../../assets/ude/diagnostico.jpg";
import DynamicBackground from "../video";
import bgContact from "../../assets/ude/bgContact.jpg";

export const ContactusUd = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="text-white text-center font-poppins text-xl font-semibold leading-normal drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        Contáctanos y descubre cómo un buen diagnóstico puede proteger tus
        equipos
      </div>
      <ButtonArrow variant="secondary">Solicite una Cotización</ButtonArrow>;
    </section>
  );
};
