import { JSX } from "react";
import { ButtonArrow } from "../button";
import useImage from "../../assets/uat/uat.png";
export const Uat = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px]">
        <div className="relative flex items-center justify-center w-full max-w-[643px] aspect-[643/544] overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="border w-full h-full object-cover"
            src={useImage}
            alt="Use"
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
                  d="M9.16927 8.5582L5.83594 2.7832"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16927 11.4414L5.83594 17.2164"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 18.3327V16.666"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 1.66602V3.33268"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6641 10H18.3307"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1693 17.2171L13.3359 15.7754"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1693 2.7832L13.3359 4.22487"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66406 10H3.33073"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2151 14.1673L15.7734 13.334"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2151 5.83398L15.7734 6.66732"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.78516 14.1673L4.22682 13.334"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.78516 5.83398L4.22682 6.66732"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0026 11.6673C10.9231 11.6673 11.6693 10.9211 11.6693 10.0007C11.6693 9.08018 10.9231 8.33398 10.0026 8.33398C9.08213 8.33398 8.33594 9.08018 8.33594 10.0007C8.33594 10.9211 9.08213 11.6673 10.0026 11.6673Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0026 16.6673C13.6845 16.6673 16.6693 13.6825 16.6693 10.0007C16.6693 6.31875 13.6845 3.33398 10.0026 3.33398C6.32071 3.33398 3.33594 6.31875 3.33594 10.0007C3.33594 13.6825 6.32071 16.6673 10.0026 16.6673Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="text-white font-poppins text-base font-semibold leading-[26px] tracking-[-0.002px]">
                UAT
              </span>
            </div>
            <p className="text-[#14559C] font-poppins text-2xl font-bold leading-7 self-stretch">
              Servicio de Unidad de Automatización
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              En <span className="font-semibold">Energía PD</span>
              {" "}
              diseñamos y automatizamos sistemas de control para plantas de
              generación, subestaciones y procesos industriales, creando
              soluciones robustas, modernas y totalmente adaptadas a las
              necesidades de cada cliente.
            </p>

            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              Nuestra experiencia acumulada y capacidad de ingeniería nos
              permiten transformar requerimientos operativos en sistemas
              inteligentes que optimizan la supervisión, operación remota y
              continuidad del servicio.
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              Integrando tecnologías de control, comunicación y SCADA,
              desarrollamos soluciones personalizadas que mejoran la eficiencia,
              aportan claridad operativa y garantizan un funcionamiento seguro y
              confiable.
            </p>
            <p className="text-[#364153] font-poppins text-xl font-medium leading-[34px]">
              Con Energía PD, la automatización se convierte en una ventaja
              competitiva: ingeniería especializada, soluciones a la medida y
              resultados que impulsan el desempeño de tus activos.
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
