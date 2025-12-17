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
    <section className="w-full h-full flex flex-col flex-1 justify-center items-center px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      <div className="px-[16px] py-[6px] w-fit rounded-[100px] border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-poppins text-base font-semibold leading-[26px] tracking-tight self">
        Nuestro Alcance
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative w-[270px] rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            INGENIERIA
          </div>
          <img className="object-cover" src={engineering} alt="" />
        </div>
        <div className="relative w-[270px]  rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            SUMINISTROS
          </div>
          <img src={suministros} alt="" />
        </div>
        <div className="relative w-[270px]  rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            CONSTRUCCIÓN
          </div>
          <img src={construcción} alt="" />
        </div>
        <div className="relative w-[270px]  rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            PUESTA EN MARCHA
          </div>
          <img className="" src={puestaMarcha} alt="" />
        </div>
      </div>

      <div className="flex w-full h-[391px]">
        {/* Wrapper para manejar el hover */}
        <div className="flex flex-1">
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
              className="relative overflow-hidden group transition-all duration-500 flex-[1] hover:flex-[1.2]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
                <span className="text-white text-center [text-shadow:0_4px_5px_rgba(0,0,0,0.45)] font-poppins text-2xl font-bold leading-normal">
                  {item.title}
                </span>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-poppins text-base font-normal leading-normal">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
