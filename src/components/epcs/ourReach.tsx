import { JSX } from "react";
import engineering from "../../assets/epcs/engineering.png";
import suministros from "../../assets/epcs/suministros.png";
import construcción from "../../assets/epcs/construcción.png";
import puestaMarcha from "../../assets/epcs/puestaMarcha.png";
import subestacion from "../../assets/epcs/img1_subestacion.png";
import lineaTransmision from "../../assets/aboutUs/sliderImg4.jpg";
import plantaGeneración from "../../assets/aboutUs/sliderImg1.png";
import energiaSolar from "../../assets/home/EnergiaSolar.jpg";

export const OurReachEpc = (): JSX.Element => {
  return (
    <section className="w-full h-full flex flex-col flex-1 justify-center items-center space-y-8 md:space-y-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="px-4 py-2 w-fit rounded-full border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-poppins text-sm sm:text-base font-semibold leading-snug tracking-tight">
        Nuestro Alcance
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl px-4">
        <div className="relative w-full rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden aspect-square">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-lg sm:text-xl md:text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)] p-4">
            INGENIERIA
          </div>
          <img
            className="object-cover w-full h-full"
            src={engineering}
            alt="Ingeniería"
          />
        </div>
        <div className="relative w-full rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden aspect-square">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-lg sm:text-xl md:text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)] p-4">
            SUMINISTROS
          </div>
          <img
            src={suministros}
            alt="Suministros"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden aspect-square">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-lg sm:text-xl md:text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)] p-4">
            CONSTRUCCIÓN
          </div>
          <img
            src={construcción}
            alt="Construcción"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden aspect-square">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-lg sm:text-xl md:text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)] p-4">
            PUESTA EN MARCHA
          </div>
          <img
            className="w-full h-full object-cover"
            src={puestaMarcha}
            alt="Puesta en Marcha"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full">
        {[
          {
            src: subestacion,
            alt: "Subestación",
            title: "SUBESTACIONES",
            description:
              "Diseñamos, suministramos, construimos y ponemos en marcha subetaciones eléctricas de media y alta tensión, entregando soluciones seguras y confiables.",
          },
          {
            src: lineaTransmision,
            alt: "Linea de Transmisión",
            title: "LINEAS DE TRANSMISIÓN",
            description:
              "Diseño, suministro y construcción de líneas de transmisión en proyectos llave en mano de hasta 230 kV.",
          },
          {
            src: plantaGeneración,
            alt: "Planta de Generación",
            title: "PLANTA DE GENERACIÓN",
            description:
              "Brindamos servicios de ingeniería, suministro y construcción (EPC) para plantas de generación, entregando soluciones integrales desde el diseño hasta la puesta en marcha.",
          },
          {
            src: energiaSolar,
            alt: "Energía Solar",
            title: "ENERGÍA SOLAR",
            description:
              "Brindamos servicios de ingeniería, suministro y construcción (EPC) para plantas de generación, entregando soluciones integrales desde el diseño hasta la puesta en marcha.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group transition-all duration-500 flex-[1] hover:flex-[1.5] sm:hover:flex-[1.2] h-full"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[391px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)] pointer-events-none">
              <span className="text-white text-center [text-shadow:0_4px_5px_rgba(0,0,0,0.45)] font-poppins text-lg sm:text-base md:text-2xl font-bold leading-normal">
                {item.title}
              </span>
              <span className="h-0 transform scale-0 group-hover:scale-100 ease-in-out overflow-hidden group-hover:h-[300px] min-w-[150px] max-w-[500px] text-white text-center transition-all duration-500 font-poppins text-xs sm:text-sm md:text-base font-normal leading-normal whitespace-normal break-words px-2 sm:px-4">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
