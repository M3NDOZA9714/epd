import { JSX } from "react";
import { ButtonArrow } from "../button";

export const WhyChooseUs = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <span className="w-fit px-[16px] py-[6px] rounded-full border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-poppins text-base font-medium leading-relaxed tracking-[-0.002px] self-center">
        ¿Por Qué Elegirnos?
      </span>

      <p className="text-[#4A5565] text-center font-poppins text-base sm:text-lg md:text-xl font-medium leading-relaxed">
        Nos distinguimos por nuestro compromiso con la excelencia y la
        satisfacción del cliente
      </p>

      {/* Grid de Tarjetas - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1200px] mx-auto w-full">
        {/* Tarjeta 1: Experiencia Especializada (Azul Oscuro) */}
        <div className="px-6 sm:px-8 py-8 rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-white shadow-lg flex flex-col space-y-6 items-center group h-full">
          {/* Contenedor SVG */}
          <div className="w-fit rounded-2xl aspect-square bg-gradient-to-br from-[#14559C] to-[#14559C]/80 p-5 transition-all duration-500 ease-in-out group-hover:scale-110 flex justify-center items-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none">
              <path
                d="M25.7946 21.4844L28.3196 35.6944C28.3479 35.8617 28.3244 36.0337 28.2523 36.1873C28.1802 36.3409 28.0629 36.4689 27.9161 36.554C27.7694 36.6392 27.6001 36.6775 27.4309 36.6639C27.2618 36.6502 27.1008 36.5853 26.9696 36.4777L21.0029 31.9994C20.7149 31.7842 20.365 31.6679 20.0054 31.6679C19.6459 31.6679 19.296 31.7842 19.0079 31.9994L13.0313 36.476C12.9001 36.5834 12.7394 36.6483 12.5704 36.6619C12.4015 36.6756 12.2324 36.6374 12.0857 36.5525C11.939 36.4676 11.8217 36.3399 11.7495 36.1866C11.6772 36.0333 11.6534 35.8616 11.6813 35.6944L14.2046 21.4844"
                stroke="white"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 23.334C25.5228 23.334 30 18.8568 30 13.334C30 7.81114 25.5228 3.33398 20 3.33398C14.4772 3.33398 10 7.81114 10 13.334C10 18.8568 14.4772 23.334 20 23.334Z"
                stroke="white"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Contenedor de Texto */}
          <div className="flex flex-col space-y-4 w-full flex-grow">
            <p className="text-[#14559C] text-center font-poppins text-lg sm:text-xl font-semibold leading-snug">
              Experiencia Especializada
            </p>
            <p className="text-[#4A5565] text-center font-poppins text-sm sm:text-base font-normal leading-relaxed">
              Contamos con un equipo técnico altamente calificado y más de 18
              años de trayectoria en el sector energético, respaldados por un
              portafolio robusto de proyectos ejecturados en subestaciones,
              línas, generación y servicios especializados.
            </p>
          </div>

          {/* Borde inferior */}
          <div className="relative flex justify-center border-t w-full border-gray h-[24.667px]">
            <div className="absolute bottom-0 h-[4px] w-[48px] rounded-full bg-[#14559C] transition-all duration-500 ease-in-out group-hover:w-full"></div>
          </div>
        </div>

        {/* Tarjeta 2: Soluciones Confiables (Azul Claro) */}
        <div className="px-6 sm:px-8 py-8 rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-white shadow-lg flex flex-col space-y-6 items-center group h-full">
          <div className="w-fit rounded-2xl aspect-square bg-gradient-to-br from-[#259DD7] to-[#259DD7]/80 p-5 transition-all duration-500 ease-in-out group-hover:scale-110 flex justify-center items-center flex-shrink-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.3327 21.6661C33.3327 29.9994 27.4993 34.1661 20.566 36.5828C20.203 36.7058 19.8086 36.6999 19.4493 36.5661C12.4993 34.1661 6.66602 29.9994 6.66602 21.6661V9.99945C6.66602 9.55742 6.84161 9.1335 7.15417 8.82094C7.46673 8.50838 7.89065 8.33278 8.33268 8.33278C11.666 8.33278 15.8327 6.33278 18.7327 3.79945C19.0858 3.49778 19.5349 3.33203 19.9993 3.33203C20.4638 3.33203 20.9129 3.49778 21.266 3.79945C24.1827 6.34945 28.3327 8.33278 31.666 8.33278C32.108 8.33278 32.532 8.50838 32.8445 8.82094C33.1571 9.1335 33.3327 9.55742 33.3327 9.99945V21.6661Z"
                stroke="white"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="w-full flex-grow flex flex-col space-y-4">
            <p className="text-[#259DD7] text-center font-poppins text-lg sm:text-xl font-semibold leading-snug">
              Soluciones Confiables
            </p>
            <p className="text-[#4A5565] text-center font-poppins text-sm sm:text-base font-normal leading-relaxed">
              Comprometidos en entregar soluciones integrales que aporten valor
              real a nuestros clientes, garantizando resultados duraderos,
              seguros y respaldados por altosestándares de calidad.
            </p>
          </div>

          <div className="relative flex justify-center border-t w-full border-gray h-[24.667px]">
            <div className="absolute bottom-0 h-[4px] w-[48px] rounded-full bg-[#259DD7] transition-all duration-500 ease-in-out group-hover:w-full"></div>
          </div>
        </div>

        {/* Tarjeta 3: Personal de Apoyo (Rojo) */}
        <div className="px-6 sm:px-8 py-8 rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-white shadow-lg flex flex-col space-y-6 items-center group h-full">
          <div className="w-fit rounded-2xl aspect-square bg-gradient-to-br from-[#A11E1F] to-[#A11E1F]/80 p-5 transition-all duration-500 ease-in-out group-hover:scale-110 flex justify-center items-center flex-shrink-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 10V20L26.6667 23.3333"
                stroke="white"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.0007 36.6673C29.2054 36.6673 36.6673 29.2054 36.6673 20.0007C36.6673 10.7959 29.2054 3.33398 20.0007 3.33398C10.7959 3.33398 3.33398 10.7959 3.33398 20.0007C3.33398 29.2054 10.7959 36.6673 20.0007 36.6673Z"
                stroke="white"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="w-full flex-grow flex flex-col space-y-4">
            <p className="text-[#A11E1F] text-center font-poppins text-lg sm:text-xl font-semibold leading-snug">
              Respuesta Rápida
            </p>
            <p className="text-[#4A5565] text-center font-poppins text-sm sm:text-base font-normal leading-relaxed">
              Contamos con un equipo técnico altamente calificado y más de 18
              años de trayectoria en el sector energético, respaldados por un
              portafolio robusto de proyectos ejecturados en subestaciones,
              línas, generación y servicios especializados.
            </p>
          </div>

          <div className="relative flex justify-center border-t w-full border-gray h-[24.667px]">
            <div className="absolute bottom-0 h-[4px] w-[48px] rounded-full bg-[#A11E1F] transition-all duration-500 ease-in-out group-hover:w-full"></div>
          </div>
        </div>
      </div>

      {/* CTA Card - Mismo tamaño que las tarjetas de arriba */}
      <div className="rounded-2xl bg-gradient-to-b from-[#14559C] to-[#259DD7] shadow-2xl max-w-[1200px] mx-auto w-full px-6 sm:px-8 py-10 sm:py-12 md:py-14 flex flex-col space-y-6 items-center text-center justify-center min-h-[260px]">
        <p className="text-white text-center font-poppins text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          ¿Listo para Comenzar tu Proyecto?
        </p>
        <p className="text-white/90 text-center font-poppins text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
          Ponte en contacto y déjanos acompañarte en el desarrollo de tu próximo
          proyecto.
        </p>
        <ButtonArrow variant="primary" size="md">
          Contáctanos
        </ButtonArrow>
      </div>
    </section>
  );
};
