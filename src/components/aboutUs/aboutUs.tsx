import { JSX, useState, useEffect } from "react";
import sliderImg1 from "../../assets/aboutUs/sliderImg1.png";
import sliderImg2 from "../../assets/aboutUs/sliderImg2.png";
import sliderImg3 from "../../assets/aboutUs/sliderImg3.jpg";
import sliderImg4 from "../../assets/aboutUs/sliderImg4.jpg";
import sliderImg5 from "../../assets/aboutUs/sliderImg5.png";
import sliderImg6 from "../../assets/aboutUs/sliderImg6.jpg";
import sliderImg7 from "../../assets/aboutUs/sliderImg7.png";

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
];

export const AboutUs = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 order-2 lg:order-1">
          <div className="text-white font-gotham text-sm sm:text-base font-medium py-2 px-4 leading-snug tracking-tight rounded-full border border-[rgba(255,255,255,0.15)] bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] w-fit">
            Sobre Nosotros
          </div>

          <p className="text-[#0094D9] font-poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            18 Años de Liderazgo Energético en Honduras
          </p>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-[#364153] text-sm sm:text-base leading-relaxed font-poppins text-justify">
            <p>
              En{" "}
              <span className="text-[#364153] font-semibold">Energía PD</span>{" "}
              somos una empresa con más de 18 años impulsando el desarrollo
              energético de la región. Crecimos guiados por la pasión por lo que
              hacemos y por el compromiso de llevar soluciones confiables,
              innovadoras y de alto impacto a nuestros clientes.
            </p>

            <p>
              Nuestra experiencia, nuestra gente y nuestra visión{" "}
              <span className="text-[#364153] font-semibold">Sin Límites</span>{" "}
              nos han permitido expandirnos regionalmente y convertirnos en un
              aliado estratégico para proyectos de generación, transmisión,
              distribución y servicios especializados.
            </p>
          </div>
        </div>

        {/* Right Image - Slider Automático */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg order-1 lg:order-2">
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Energía PD - Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Sombra */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

          {/* Indicadores de slide */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {sliderImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
