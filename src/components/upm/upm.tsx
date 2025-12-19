import { JSX } from "react";
import { ButtonArrow } from "../button";
import upmImage from "../../assets/upm/upm.jpg";
export const Upm = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px]">
        <div className="relative flex items-center justify-center w-full max-w-[643px] aspect-[643/544] overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="border w-full h-full object-cover"
            src={upmImage}
            alt="UPM"
          />

          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(37,157,215,0.46)_0%,rgba(0,0,0,0.00)_100%)]"></div>
        </div>
        <div className="flex flex-col justify-between gap-7">
          <div className="flex flex-col gap-[30px] max-w-[643px]">
            <div className="px-[16px] py-[6px] w-fit flex gap-2 rounded-[100px] border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6693 10.8331C16.6693 14.9997 13.7526 17.0831 10.2859 18.2914C10.1044 18.3529 9.90722 18.35 9.7276 18.2831C6.2526 17.0831 3.33594 14.9997 3.33594 10.8331V4.99972C3.33594 4.77871 3.42374 4.56675 3.58002 4.41047C3.7363 4.25419 3.94826 4.16639 4.16927 4.16639C5.83594 4.16639 7.91927 3.16639 9.36927 1.89972C9.54582 1.74889 9.7704 1.66602 10.0026 1.66602C10.2348 1.66602 10.4594 1.74889 10.6359 1.89972C12.0943 3.17472 14.1693 4.16639 15.8359 4.16639C16.057 4.16639 16.2689 4.25419 16.4252 4.41047C16.5815 4.56675 16.6693 4.77871 16.6693 4.99972V10.8331Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="text-white font-poppins text-base font-semibold leading-[26px] tracking-[-0.002px]">
                UPM
              </span>
            </div>
            <p className="text-[#14559C] font-poppins text-2xl font-bold leading-7 self-stretch">
              Unidad de Protección y Medición
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              En Energía PD desarrollamos soluciones avanzadas en Protección,
              Control y Medición (PCyM) para garantizar la operación segura y
              precisa de sistemas eléctricos.
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              Ejecutamos pruebas y parametrización de relés, certificación de
              puntos de medición comercial, estudios de coordinación de
              protecciones, ingeniería de detalle e integración completa de
              tableros PCyM.
            </p>
          </div>
          <div>
            <ButtonArrow variant="tertiary">Contáctanos</ButtonArrow>
          </div>
        </div>
      </div>
    </section>
  );
};
