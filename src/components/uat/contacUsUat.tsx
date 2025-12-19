import { JSX } from "react";
import { ButtonArrow } from "../button";

export const ContactusUat = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-white text-center font-poppins text-xl font-semibold leading-normal drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
          ¿Listo para Optimizar tu Sistema Eléctrico?
        </p>
        <p className="text-white text-center [text-shadow:0_0_4px_rgba(0,0,0,0.25)] font-poppins text-lg font-semibold leading-normal">
          Contactanos hoy y permitinos apoyarte en tu próximo proyecto de
          automatización
        </p>
      </div>
      <ButtonArrow variant="secondary">Solicite una Cotización</ButtonArrow>;
    </section>
  );
};
