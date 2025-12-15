import { JSX } from "react";
import { ButtonArrow } from "../button";
import sliderImg1 from "../../assets/aboutUs/slider - img1.png";
import sliderImg2 from "../../assets/aboutUs/slider - img2.png";
import sliderImg3 from "../../assets/aboutUs/slider - img3.png";
import sliderImg4 from "../../assets/aboutUs/slider - img4.png";
import sliderImg5 from "../../assets/aboutUs/slider - img5.png";
import sliderImg6 from "../../assets/aboutUs/slider - img6.png";
import sliderImg7 from "../../assets/aboutUs/slider - img7.png";

export const AboutUs = (): JSX.Element => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 space-y-8 md:space-y-12">
      <div className="flex gap-[30px]">
        <div className="flex flex-col gap-[40px]">
          <div className="text-white font-gotham text-base font-medium py-[6px] px-4 leading-[26px] tracking-tight rounded-full border border-[rgba(255,255,255,0.15)] bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] w-fit">
            Sobre Nosotros
          </div>
          <p className="text-[#0094D9] font-poppins text-4xl font-bold leading-[51px] tracking-tight self-stretch">
            18 Años de Liderazgo Energético en Honduras
          </p>
          <div className="flex flex-col gap-[32px] text-black text-justify font-poppins text-base font-normal leading-[30px] flex-shrink-0 self-stretch gap">
            <p>
              En{" "}
              <span className="text-black font-poppins text-base font-semibold leading-[30px]">
                Energía PD
              </span>{" "}
              somos una empresa con más de 18 años impulsando el desarrollo
              energético de la región. Crecimos guiados por la pasión por lo que
              hacemos y por el compromiso de llevar soluciones confiables,
              innovadoras y de alto impacto a nuestros clientes.
            </p>

            <p>
              Nuestra experiencia, nuestra gente y nuestra visión{" "}
              <span className="text-black font-poppins text-base font-semibold leading-[30px]">
                Sin Límites
              </span>{" "}
              nos han permitido expandirnos regionalmente y convertirnos en un
              aliado estratégico para proyectos de generación, transmisión,
              distribución y servicios especializados.
            </p>
          </div>
        </div>
        <div className="relative rounded-[32px] w-[605.129px] h-[796.442px]">
          <img
            className="rounded-[32px] w-[605.129px] h-[796.442px] object-cover flex-shrink-0 max-w-none"
            src={sliderImg1}
            alt=""
          />
          <div className="absolute rounded-[32px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
        </div>
      </div>
    </section>
  );
};
