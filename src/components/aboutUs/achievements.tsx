import { JSX, useState, useEffect } from "react";
import logrosImg from "../../assets/aboutUs/imgLogrosImpulsan.png";
import DynamicBackground from "../video";
import slide1 from "../../assets/aboutUs/slide1.mp4";
import slide2 from "../../assets/aboutUs/slide2.mp4";
import slide3 from "../../assets/aboutUs/slide3.mp4";
import slide4 from "../../assets/aboutUs/slide4.mp4";
import slide5 from "../../assets/aboutUs/slide5.mp4";

export const AchievmentsAboutUs = (): JSX.Element => {
  return (
    <DynamicBackground
      mediaSource={logrosImg}
      mediaType="image"
      minHeight="min-h-screen"
      gradient="bg-[linear-gradient(135deg,rgba(20,85,156,0.95)_0%,rgba(37,157,215,0.90)_100%)]">
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 md:space-y-12 flex flex-col items-center justify-center min-h-dvh">
        <div className="flex justify-center items-center w-fit px-3 sm:px-4 py-2 rounded-full border border-white/15 bg-[#A11E1F] backdrop-blur-md shadow-inner-white text-white font-poppins text-xs sm:text-sm font-medium leading-snug tracking-tight">
          Logros Que Nos Impulsan
        </div>

        <div className="text-white text-center font-poppins text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl">
          Números que reflejan nuestro compromiso y experiencia.
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
          {/* Card 1 */}
          <div className="rounded-2xl px-3 sm:px-4 py-6 sm:py-8 border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-sm sm:text-base font-bold leading-snug flex flex-col gap-4 sm:gap-5">
              <span className="line-clamp-2">
                Transformadores de Potencia Instalados
              </span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto flex-shrink-0">
                <video
                  width="160"
                  height="160"
                  src={slide1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl px-3 sm:px-4 py-6 sm:py-8 border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-sm sm:text-base font-bold leading-snug flex flex-col gap-4 sm:gap-5">
              <span className="line-clamp-2">Subestaciones Recepcionadas</span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto flex-shrink-0">
                <video
                  width="160"
                  height="160"
                  src={slide2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl px-3 sm:px-4 py-6 sm:py-8 border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-sm sm:text-base font-bold leading-snug flex flex-col gap-4 sm:gap-5">
              <span className="line-clamp-2">En respuestas y Soluciones</span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto flex-shrink-0">
                <video
                  width="160"
                  height="160"
                  src={slide3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl px-3 sm:px-4 py-6 sm:py-8 border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-sm sm:text-base font-bold leading-snug flex flex-col gap-4 sm:gap-5">
              <span className="line-clamp-2">MVA Instaladas Actualmente</span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto flex-shrink-0">
                <video
                  width="160"
                  height="160"
                  src={slide4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl px-3 sm:px-4 py-6 sm:py-8 border border-white/50 bg-[linear-gradient(180deg,rgba(0,148,217,0.23)_-49.81%,rgba(10,22,34,0.23)_100%)]">
            <div className="text-white text-center font-poppins text-sm sm:text-base font-bold leading-snug flex flex-col gap-4 sm:gap-5">
              <span className="line-clamp-2">Clientes a Nivel Nacional</span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto flex-shrink-0">
                <video
                  width="160"
                  height="160"
                  src={slide5}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DynamicBackground>
  );
};
