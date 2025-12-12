import { JSX } from "react";
import { ButtonArrow } from "../button";

interface FeatureItem {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}

const AboutUsSection = ({
  image,
  features,
}: {
  image: string;
  features: FeatureItem[];
}): JSX.Element => {
  const svgCheck = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill="url(#paint0_linear_1_2752)"
      />
      <path
        d="M5.33203 10.666L7.9987 13.3327L14.6654 6.66602"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2752"
          x1="10"
          y1="0"
          x2="10"
          y2="20"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0094D9" />
          <stop offset="1" stopColor="#00539F" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 space-y-8 md:space-y-12">
      {/* Top Section: Text + Image */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 justify-center">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-[#A11E1F] shadow-inner-white backdrop-blur-sm py-2 px-4 text-center text-white font-gotham text-xs sm:text-sm md:text-base font-medium">
            Sobre Nosotros
          </span>

          <h2 className="text-[#14559C] font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Excelencia desde 2007
          </h2>

          <div className="text-[#364153] font-poppins text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Somos una empresa líder en el sector energético con más de 18 años
              de experiencia desarrollando soluciones EPC e ingeniería integral
              —eléctrica, mecánica y civil.
            </p>
            <p>
              Vivimos nuestro lema{" "}
              <span className="font-semibold">"Sin Límites"</span>, generando
              valor en proyectos de alta complejidad y en el mantenimiento
              especializado de equipos para asegurar su operación confiable.
            </p>
            <p>
              Nuestro compromiso es ser un aliado estratégico para nuestros
              clientes: ofrecemos soluciones a retos complejos, calidad
              superior, tecnología de vanguardia, altos estándares de seguridad
              y un cumplimiento en los tiempos de entrega.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {svgCheck}
                <span className="text-[#364153] font-poppins text-xs sm:text-sm md:text-base font-medium">
                  Experiencia Comprobada
                </span>
              </div>
              <div className="flex items-center gap-2">
                {svgCheck}
                <span className="text-[#364153] font-poppins text-xs sm:text-sm md:text-base font-medium">
                  Experiencia Comprobada
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {svgCheck}
                <span className="text-[#364153] font-poppins text-xs sm:text-sm md:text-base font-medium">
                  Experiencia Comprobada
                </span>
              </div>
              <div className="flex items-center gap-2">
                {svgCheck}
                <span className="text-[#364153] font-poppins text-xs sm:text-sm md:text-base font-medium">
                  Certificaciones Vigentes
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button - Centrado en móvil */}
          <div className="mt-4 sm:mt-6 w-full sm:w-fit flex justify-center">
            <ButtonArrow variant="outline" size="md">
              Ver Más
            </ButtonArrow>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-80">
          <img
            src={image}
            alt="Líderes en el Sector Energético"
            className="h-full w-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-[rgba(20,85,156,0.9)] via-[rgba(20,85,156,0.4)] to-transparent"></div>
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl flex flex-col justify-end p-4 sm:p-6 text-left">
            <p className="text-white/90 font-poppins text-xs sm:text-sm md:text-base font-normal">
              Líderes en el Sector Energético
            </p>
            <p className="text-white/90 font-poppins text-xs sm:text-sm md:text-base font-normal">
              Transformando la infraestructura energética
            </p>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-2xl border-t border-l border-r border-gray-100 bg-white shadow-lg flex flex-col justify-between hover:shadow-xl transition h-full">
            <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
              <div
                className={`rounded-xl ${feature.bgColor} w-14 sm:w-16 flex items-center justify-center p-3`}>
                {feature.icon}
              </div>
              <p
                className={`${feature.borderColor} font-poppins text-sm sm:text-base font-medium`}>
                {feature.title}
              </p>
              <p className="text-gray-700 font-poppins text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className={`rounded-b-2xl ${feature.bgColor} h-2`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
