import { JSX } from "react";
import { ButtonArrow } from "../button";
import serviceUse from "../../assets/uat/serviceUat.png";

export const ServiceUat = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-b from-[#259DD7] to-[#14559C] p-[32px] max-w-[570px]">
          <div className="rounded-[10px] bg-white/20 p-8 w-fit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white font-poppins text-base font-semibold leading-6">
              Un SCADA Se Compone de:
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Control y supervision de todos los sistemas remotos",
                "Procesamiento de los datos y generación de informes",
                "Sistemas de alarmas",
                "Cálculos aritméticos complejos",
                "Datos históricos sobre el funcionamiento de los sistemas remotos",
                "Interfaz HMI",
                "Comunicación por red con equipos",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-[12px] text-white font-poppins text-base font-normal leading-6">
                  <div className="rounded-full bg-white p-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.33203 8.66602L5.9987 11.3327L12.6654 4.66602"
                        stroke="#A11E1F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden  max-w-[570px]">
          <img className="w-full h-full object-cover" src={serviceUse} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      <div>
        <ButtonArrow
          variant="tertiary"
          onClick={() => {
            window.location.href = "/contacto";
          }}>
          Solicite una Cotización
        </ButtonArrow>
      </div>
    </section>
  );
};
