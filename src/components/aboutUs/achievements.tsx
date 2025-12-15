import { JSX } from "react";
import logrosImg from "../../assets/aboutUs/img - logrosImpulsan.png";
import DynamicBackground from "../video";
import slide1 from "../../assets/aboutUs/slide de numeros 1.mp4";
import slide2 from "../../assets/aboutUs/slide de numeros 2.mp4";
import slide3 from "../../assets/aboutUs/slide de numeros 3.mp4";
import slide4 from "../../assets/aboutUs/slide de numeros 4.mp4";
import slide5 from "../../assets/aboutUs/slide de numeros 5.mp4";

export const AchievmentsAboutUs = (): JSX.Element => {
  return (
    <DynamicBackground
      mediaSource={logrosImg}
      mediaType="image"
      gradient="bg-[linear-gradient(135deg,rgba(20,85,156,0.95)_0%,rgba(37,157,215,0.90)_100%)]">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 space-y-8 md:space-y-12 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center w-fit px-[19px] py-[6px] rounded-[100px] border border-white/15 bg-[#A11E1F] backdrop-blur-[7px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] text-white font-poppins text-base font-medium leading-[26px] tracking-[-0.002px]">
          Logros Que Nos Impulsan
        </div>
        <div className="text-white text-center font-poppins text-2xl font-medium leading-[34px]">
          Números que reflejan nuestro compromiso y experiencia.
        </div>

        <div className="flex gap-[43px]">
          <div className="rounded-[24px] px-[13px] py-[30px] border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-base font-bold leading-6 flex flex-col gap-[16px]">
              <span className="w-[175px]">
                Transformadores de Potencia Instalados
              </span>
              <div className="w-[143px] h-[143px] rounded-full overflow-hidden mx-auto">
                <video
                  width="143px"
                  height="143px"
                  src={slide1}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          <div className="rounded-[24px] px-[13px] py-[30px] border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-base font-bold leading-6 flex flex-col gap-[16px]">
              <span className="w-[175px]">Subestaciones Recepcionadas</span>
              <div className="w-[143px] h-[143px] rounded-full overflow-hidden mx-auto">
                <video
                  width="143px"
                  height="143px"
                  src={slide2}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          <div className="rounded-[24px] px-[13px] py-[30px] border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-base font-bold leading-6 flex flex-col gap-[16px]">
              <span className="w-[175px]">En respuestas y Soluciones</span>
              <div className="w-[143px] h-[143px] rounded-full overflow-hidden mx-auto">
                <video
                  width="143px"
                  height="143px"
                  src={slide3}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          <div className="rounded-[24px] px-[13px] py-[30px] border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-base font-bold leading-6 flex flex-col gap-[16px]">
              <span className="w-[175px]">MVA Instaladas Actualmente</span>
              <div className="w-[143px] h-[143px] rounded-full overflow-hidden mx-auto">
                <video
                  width="143px"
                  height="143px"
                  src={slide4}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
          <div className="rounded-[24px] px-[13px] py-[30px] border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-base font-bold leading-6 flex flex-col gap-[16px]">
              <span className="w-[175px]">Clientes a Nivel Nacional</span>
              <div className="w-[143px] h-[143px] rounded-full overflow-hidden mx-auto">
                <video
                  width="143px"
                  height="143px"
                  src={slide5}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DynamicBackground>
  );
};
