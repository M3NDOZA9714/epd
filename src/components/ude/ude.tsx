import { JSX } from "react";
import { ButtonArrow } from "../button";
import udeImage from "../../assets/ude/ude.jpg"
export const Ude = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px]">
        <div className="relative flex items-center justify-center w-full max-w-[643px] aspect-[643/544] overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="border w-full h-full object-cover"
            src={udeImage}
            alt="Ude"
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
                  d="M18.3307 9.99935H16.2641C15.8999 9.99857 15.5454 10.1171 15.255 10.3368C14.9645 10.5565 14.7541 10.8653 14.6557 11.216L12.6974 18.1827C12.6848 18.226 12.6585 18.264 12.6224 18.291C12.5863 18.3181 12.5425 18.3327 12.4974 18.3327C12.4523 18.3327 12.4085 18.3181 12.3724 18.291C12.3363 18.264 12.31 18.226 12.2974 18.1827L7.6974 1.81602C7.68477 1.77274 7.65846 1.73473 7.6224 1.70768C7.58633 1.68064 7.54247 1.66602 7.4974 1.66602C7.45232 1.66602 7.40846 1.68064 7.3724 1.70768C7.33633 1.73473 7.31002 1.77274 7.2974 1.81602L5.33906 8.78268C5.24112 9.13198 5.03188 9.43978 4.74312 9.65936C4.45435 9.87894 4.10183 9.99831 3.73906 9.99935H1.66406"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="text-white font-poppins text-base font-semibold leading-[26px] tracking-[-0.002px]">
                UDE
              </span>
            </div>
            <p className="text-[#14559C] font-poppins text-2xl font-bold leading-7 self-stretch">
              Unidad de Diagnósticos Eléctricos
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              Realizamos diagnósticos eléctricos avanzados para equipos de
              potencia, integrando personal calificado, un portafolio completo
              de pruebas eléctricas y análisis de aceite, equipos de última
              generación y nuestra experiencia acumulada. De esta manera
              obtenemos la condición real de los activos y aseguramos la
              confiabilidad del sistema.
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
