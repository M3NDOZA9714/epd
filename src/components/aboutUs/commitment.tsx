import { JSX, useState, useEffect } from "react";
import sliderImg1 from "../../assets/aboutUs/sliderNuestroCompromiso_img1.png";
import sliderImg2 from "../../assets/aboutUs/sliderNuestroCompromiso_img2.jpg";
import sliderImg3 from "../../assets/aboutUs/sliderNuestroCompromiso_img3.png";
import sliderImg4 from "../../assets/aboutUs/sliderNuestroCompromiso_img4.jpg";
import sliderImg5 from "../../assets/aboutUs/sliderNuestroCompromiso_img5.jpg";
import sliderImg6 from "../../assets/aboutUs/sliderNuestroCompromiso_img6.jpg";

const commitmentSliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
];

export const CommitmentAboutUs = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commitmentSliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 md:space-y-12">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Badge */}
        <div className="w-fit py-2 px-4 sm:px-6 rounded-full border border-[rgba(255,255,255,0.15)] bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-gotham text-sm sm:text-base font-medium leading-snug tracking-tight">
          Nuestro Compromiso
        </div>

        {/* Título */}
        <p className="text-[#364153] text-center font-poppins text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
          Desde el concepto hasta la puesta en marcha, nuestra experiencia y
          soluciones integrales brindan certeza, innovación y valor agregado a
          cada proyecto, impulsados siempre por la pasión que nos mueve a hacer
          las cosas con excelencia.
        </p>

        {/* Slider Automático */}
        <div className="w-full max-w-4xl relative h-64 sm:h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
          {commitmentSliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Nuestro Compromiso - Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {commitmentSliderImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-6 shadow-lg"
                    : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="relative overflow-hidden group shadow-md rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between gap-6 border border-gray-100 border-b-0 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] transition-shadow duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-fit rounded-2xl bg-[#259DD7] p-5 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 41 41" fill="none">
                  <path
                    d="M6.6766 23.3658C6.36077 23.3668 6.05113 23.2783 5.78363 23.1104C5.51613 22.9425 5.30177 22.7021 5.16544 22.4172C5.02912 22.1323 4.97642 21.8146 5.01349 21.501C5.05055 21.1873 5.17584 20.8906 5.37481 20.6454L21.8974 3.62205C22.0214 3.47899 22.1903 3.38232 22.3764 3.3479C22.5625 3.31348 22.7548 3.34336 22.9217 3.43263C23.0886 3.52191 23.2202 3.66527 23.2949 3.8392C23.3696 4.01312 23.3829 4.20727 23.3327 4.38977L20.1284 14.4369C20.0339 14.6898 20.0021 14.9618 20.0359 15.2296C20.0696 15.4975 20.1678 15.7531 20.3221 15.9747C20.4764 16.1962 20.6821 16.3771 20.9216 16.5016C21.1611 16.6262 21.4272 16.6908 21.6972 16.69H33.3798C33.6957 16.6889 34.0053 16.7774 34.2728 16.9453C34.5403 17.1132 34.7547 17.3536 34.891 17.6385C35.0273 17.9234 35.08 18.2411 35.043 18.5547C35.0059 18.8684 34.8806 19.1651 34.6816 19.4103L18.159 36.4337C18.0351 36.5767 17.8662 36.6734 17.68 36.7078C17.4939 36.7422 17.3016 36.7124 17.1347 36.6231C16.9678 36.5338 16.8362 36.3904 16.7615 36.2165C16.6868 36.0426 16.6735 35.8485 16.7237 35.6659L19.9281 25.6189C20.0226 25.366 20.0543 25.0939 20.0206 24.8261C19.9868 24.5582 19.8886 24.3026 19.7343 24.081C19.5801 23.8595 19.3744 23.6787 19.1349 23.5541C18.8954 23.4295 18.6292 23.3649 18.3593 23.3658H6.6766Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#259DD7] font-poppins text-lg sm:text-xl font-semibold">
                +250 MV
              </h3>
              <p className="text-[#14559C] font-poppins font-semibold text-base sm:text-lg">
                Potencia Instalada
              </p>
              <p className="text-[#4A5565] font-poppins text-sm leading-relaxed">
                Siendo parte de proyectos estratégicos
              </p>
            </div>
            <div className="absolute h-[15px] bottom-0 left-0 right-0 bg-[#259DD7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden group shadow-md rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between gap-6 border border-gray-100 border-b-0 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] transition-shadow duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-fit rounded-2xl bg-[#14559C] p-5 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 42 42" fill="none">
                  <path
                    d="M20.9434 10.4717V20.943L27.9242 24.4334"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.9424 38.3945C30.5809 38.3945 38.3945 30.5809 38.3945 20.9424C38.3945 11.3038 30.5809 3.49023 20.9424 3.49023C11.3038 3.49023 3.49023 11.3038 3.49023 20.9424C3.49023 30.5809 11.3038 38.3945 20.9424 38.3945Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#14559C] font-poppins text-lg sm:text-xl font-semibold">
                {"<"}24 hrs
              </h3>
              <p className="text-[#14559C] font-poppins font-semibold text-base sm:text-lg">
                Tiempo de Respuesta
              </p>
              <p className="text-[#4A5565] font-poppins text-sm leading-relaxed">
                Soluciones rápidas y efectivas
              </p>
            </div>
            <div className="absolute h-[15px] bottom-0 left-0 right-0 bg-[#14559C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden group shadow-md rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between gap-6 border border-gray-100 border-b-0 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] transition-shadow duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-fit rounded-2xl bg-[#A11E1F] p-5 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 41 41" fill="none">
                  <path
                    d="M6.6766 23.3658C6.36077 23.3668 6.05113 23.2783 5.78363 23.1104C5.51613 22.9425 5.30177 22.7021 5.16544 22.4172C5.02912 22.1323 4.97642 21.8146 5.01349 21.501C5.05055 21.1873 5.17584 20.8906 5.37481 20.6454L21.8974 3.62205C22.0214 3.47899 22.1903 3.38232 22.3764 3.3479C22.5625 3.31348 22.7548 3.34336 22.9217 3.43263C23.0886 3.52191 23.2202 3.66527 23.2949 3.8392C23.3696 4.01312 23.3829 4.20727 23.3327 4.38977L20.1284 14.4369C20.0339 14.6898 20.0021 14.9618 20.0359 15.2296C20.0696 15.4975 20.1678 15.7531 20.3221 15.9747C20.4764 16.1962 20.6821 16.3771 20.9216 16.5016C21.1611 16.6262 21.4272 16.6908 21.6972 16.69H33.3798C33.6957 16.6889 34.0053 16.7774 34.2728 16.9453C34.5403 17.1132 34.7547 17.3536 34.891 17.6385C35.0273 17.9234 35.08 18.2411 35.043 18.5547C35.0059 18.8684 34.8806 19.1651 34.6816 19.4103L18.159 36.4337C18.0351 36.5767 17.8662 36.6734 17.68 36.7078C17.4939 36.7422 17.3016 36.7124 17.1347 36.6231C16.9678 36.5338 16.8362 36.3904 16.7615 36.2165C16.6868 36.0426 16.6735 35.8485 16.7237 35.6659L19.9281 25.6189C20.0226 25.366 20.0543 25.0939 20.0206 24.8261C19.9868 24.5582 19.8886 24.3026 19.7343 24.081C19.5801 23.8595 19.3744 23.6787 19.1349 23.5541C18.8954 23.4295 18.6292 23.3649 18.3593 23.3658H6.6766Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#A11E1F] font-poppins text-lg sm:text-xl font-semibold">
                +100
              </h3>
              <p className="text-[#A11E1F] font-poppins font-semibold text-base sm:text-lg">
                Clientes
              </p>
              <p className="text-[#4A5565] font-poppins text-sm leading-relaxed">
                Siendo parte de proyectos estratégicos
              </p>
            </div>
            <div className="absolute h-[15px] bottom-0 left-0 right-0 bg-[#A11E1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
