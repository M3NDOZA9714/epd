import { JSX, ReactNode, useEffect, useRef, useState } from "react";
import vector1 from "../assets/vector1.svg";
import { RippleButton } from "./RippleButton";
import vector2 from "../assets/Button_derecha.svg";

export const Home = (): JSX.Element => {

  return (
    <div className="h-full flex flex-col justify-center ps-[64px] space-y-6">
      <p className="w-[467px] text-white text-shadow-lg font-poppins text-5xl font-bold leading-relaxed">
        "Nos Inspiran los Grandes Desafíos. Los Enfrentamos Sin Límites"
      </p>
      <p className="text-white text-shadow-md font-poppins text-xl font-medium leading-loose self-stretch w-[601px] ">
        Creamos junto a nuestros clientes algo más que proyectos: soluciones EPC
        que transforman el sector energético y dejan una huella positiva en cada
        lugar donde llegamos
      </p>
      <button className="flex items-center border w-[212px] rounded-[100px]">
        <div className="border rounded-full aspect-square p-[10px] border-[#8AABE5] bg-gradient-to-l from-[#0094D9] to-[#00539F] shadow-custom-blue">
          <svg
            className="h-6 w-6"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 8H17M17 8L10.1429 1M17 8L10.1429 15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <span className="text-white text-center text-shadow-sm font-poppins text-xl font-semibold leading-tight p-[10px]">
          Contáctanos
        </span>
      </button>
    </div>
  );
};
