import { JSX } from "react";
import { Navbar } from "../components/navbar";
import { HeroHome } from "../components/heroHome";
import DynamicBackground from "../components/video";
import miVideo from "../assets/videoHome.mp4";
import imgSobreNosotros from "../assets/img - Sobre nosotros.jpg";
import nuestorProyectos from "../assets/nuestrosProyectos.png";

export const HomePage = (): JSX.Element => {
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2752"
          x1="10"
          y1="0"
          x2="10"
          y2="20"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#0094D9" />
          <stop offset="1" stop-color="#00539F" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {/* Hero Section con video */}
      <DynamicBackground mediaType="video" mediaSource={miVideo}>
        <Navbar />
        <HeroHome />
      </DynamicBackground>

      {/* Sección Sobre Nosotros */}
      <section className="relative bg-white py-20 px-16 space-y-[32px]">
        <svg
          className="absolute top-2 left-2"
          width="131"
          height="184"
          viewBox="0 0 131 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2667)">
            <path
              d="M89.1325 27.3128C88.6725 27.3128 88.3025 26.9428 88.3025 26.4828C88.3025 26.0228 88.6725 25.6528 89.1325 25.6528C89.5925 25.6528 89.9625 26.0228 89.9625 26.4828C89.9625 26.9428 89.5925 27.3128 89.1325 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M89.1325 1.64874C88.6725 1.64874 88.3025 1.27874 88.3025 0.818741C88.3025 0.358741 88.6725 -0.011261 89.1325 -0.011261C89.5925 -0.011261 89.9625 0.358741 89.9625 0.818741C89.9625 1.27874 89.5925 1.64874 89.1325 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M106.789 27.3128C106.329 27.3128 105.959 26.9428 105.959 26.4828C105.959 26.0228 106.329 25.6528 106.789 25.6528C107.249 25.6528 107.619 26.0228 107.619 26.4828C107.619 26.9428 107.249 27.3128 106.789 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M106.789 1.64874C106.329 1.64874 105.959 1.27874 105.959 0.818741C105.959 0.358741 106.329 -0.011261 106.789 -0.011261C107.249 -0.011261 107.619 0.358741 107.619 0.818741C107.619 1.27874 107.249 1.64874 106.789 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M124.453 27.3128C123.993 27.3128 123.623 26.9428 123.623 26.4828C123.623 26.0228 123.993 25.6528 124.453 25.6528C124.913 25.6528 125.283 26.0228 125.283 26.4828C125.283 26.9428 124.913 27.3128 124.453 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M124.453 1.64874C123.993 1.64874 123.623 1.27874 123.623 0.818741C123.623 0.358741 123.993 -0.011261 124.453 -0.011261C124.913 -0.011261 125.283 0.358741 125.283 0.818741C125.283 1.27874 124.913 1.64874 124.453 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 181.27C0.367805 181.27 -0.00218201 180.9 -0.00218201 180.44C-0.00218201 179.98 0.367805 179.61 0.827805 179.61C1.2878 179.61 1.65781 179.98 1.65781 180.44C1.65781 180.9 1.2878 181.27 0.827805 181.27Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 155.61C0.367805 155.61 -0.00218201 155.24 -0.00218201 154.78C-0.00218201 154.32 0.367805 153.95 0.827805 153.95C1.2878 153.95 1.65781 154.32 1.65781 154.78C1.65781 155.24 1.2878 155.61 0.827805 155.61Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 129.95C0.367805 129.95 -0.00218201 129.58 -0.00218201 129.12C-0.00218201 128.66 0.367805 128.29 0.827805 128.29C1.2878 128.29 1.65781 128.66 1.65781 129.12C1.65781 129.58 1.2878 129.95 0.827805 129.95Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 104.289C0.367805 104.289 -0.00218201 103.919 -0.00218201 103.459C-0.00218201 102.999 0.367805 102.629 0.827805 102.629C1.2878 102.629 1.65781 102.999 1.65781 103.459C1.65781 103.919 1.2878 104.289 0.827805 104.289Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 78.6292C0.367805 78.6292 -0.00218201 78.2592 -0.00218201 77.7992C-0.00218201 77.3392 0.367805 76.9692 0.827805 76.9692C1.2878 76.9692 1.65781 77.3392 1.65781 77.7992C1.65781 78.2592 1.2878 78.6292 0.827805 78.6292Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 52.9691C0.367805 52.9691 -0.00218201 52.5991 -0.00218201 52.1391C-0.00218201 51.6791 0.367805 51.3091 0.827805 51.3091C1.2878 51.3091 1.65781 51.6791 1.65781 52.1391C1.65781 52.5991 1.2878 52.9691 0.827805 52.9691Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 27.3128C0.367805 27.3128 -0.00218201 26.9428 -0.00218201 26.4828C-0.00218201 26.0228 0.367805 25.6528 0.827805 25.6528C1.2878 25.6528 1.65781 26.0228 1.65781 26.4828C1.65781 26.9428 1.2878 27.3128 0.827805 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M0.827805 1.64874C0.367805 1.64874 -0.00218201 1.27874 -0.00218201 0.818741C-0.00218201 0.358741 0.367805 -0.011261 0.827805 -0.011261C1.2878 -0.011261 1.65781 0.358741 1.65781 0.818741C1.65781 1.27874 1.2878 1.64874 0.827805 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 181.27C18.0319 181.27 17.6619 180.9 17.6619 180.44C17.6619 179.98 18.0319 179.61 18.4919 179.61C18.9519 179.61 19.3219 179.98 19.3219 180.44C19.3219 180.9 18.9519 181.27 18.4919 181.27Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 155.61C18.0319 155.61 17.6619 155.24 17.6619 154.78C17.6619 154.32 18.0319 153.95 18.4919 153.95C18.9519 153.95 19.3219 154.32 19.3219 154.78C19.3219 155.24 18.9519 155.61 18.4919 155.61Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 129.95C18.0319 129.95 17.6619 129.58 17.6619 129.12C17.6619 128.66 18.0319 128.29 18.4919 128.29C18.9519 128.29 19.3219 128.66 19.3219 129.12C19.3219 129.58 18.9519 129.95 18.4919 129.95Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 104.289C18.0319 104.289 17.6619 103.919 17.6619 103.459C17.6619 102.999 18.0319 102.629 18.4919 102.629C18.9519 102.629 19.3219 102.999 19.3219 103.459C19.3219 103.919 18.9519 104.289 18.4919 104.289Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 78.6292C18.0319 78.6292 17.6619 78.2592 17.6619 77.7992C17.6619 77.3392 18.0319 76.9692 18.4919 76.9692C18.9519 76.9692 19.3219 77.3392 19.3219 77.7992C19.3219 78.2592 18.9519 78.6292 18.4919 78.6292Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 52.9691C18.0319 52.9691 17.6619 52.5991 17.6619 52.1391C17.6619 51.6791 18.0319 51.3091 18.4919 51.3091C18.9519 51.3091 19.3219 51.6791 19.3219 52.1391C19.3219 52.5991 18.9519 52.9691 18.4919 52.9691Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 27.3128C18.0319 27.3128 17.6619 26.9428 17.6619 26.4828C17.6619 26.0228 18.0319 25.6528 18.4919 25.6528C18.9519 25.6528 19.3219 26.0228 19.3219 26.4828C19.3219 26.9428 18.9519 27.3128 18.4919 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M18.4919 1.64874C18.0319 1.64874 17.6619 1.27874 17.6619 0.818741C17.6619 0.358741 18.0319 -0.011261 18.4919 -0.011261C18.9519 -0.011261 19.3219 0.358741 19.3219 0.818741C19.3219 1.27874 18.9519 1.64874 18.4919 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 181.27C35.6881 181.27 35.3181 180.9 35.3181 180.44C35.3181 179.98 35.6881 179.61 36.1481 179.61C36.6081 179.61 36.9781 179.98 36.9781 180.44C36.9781 180.9 36.6081 181.27 36.1481 181.27Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 155.61C35.6881 155.61 35.3181 155.24 35.3181 154.78C35.3181 154.32 35.6881 153.95 36.1481 153.95C36.6081 153.95 36.9781 154.32 36.9781 154.78C36.9781 155.24 36.6081 155.61 36.1481 155.61Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 129.95C35.6881 129.95 35.3181 129.58 35.3181 129.12C35.3181 128.66 35.6881 128.29 36.1481 128.29C36.6081 128.29 36.9781 128.66 36.9781 129.12C36.9781 129.58 36.6081 129.95 36.1481 129.95Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 104.289C35.6881 104.289 35.3181 103.919 35.3181 103.459C35.3181 102.999 35.6881 102.629 36.1481 102.629C36.6081 102.629 36.9781 102.999 36.9781 103.459C36.9781 103.919 36.6081 104.289 36.1481 104.289Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 78.6292C35.6881 78.6292 35.3181 78.2592 35.3181 77.7992C35.3181 77.3392 35.6881 76.9692 36.1481 76.9692C36.6081 76.9692 36.9781 77.3392 36.9781 77.7992C36.9781 78.2592 36.6081 78.6292 36.1481 78.6292Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 52.9691C35.6881 52.9691 35.3181 52.5991 35.3181 52.1391C35.3181 51.6791 35.6881 51.3091 36.1481 51.3091C36.6081 51.3091 36.9781 51.6791 36.9781 52.1391C36.9781 52.5991 36.6081 52.9691 36.1481 52.9691Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 27.3128C35.6881 27.3128 35.3181 26.9428 35.3181 26.4828C35.3181 26.0228 35.6881 25.6528 36.1481 25.6528C36.6081 25.6528 36.9781 26.0228 36.9781 26.4828C36.9781 26.9428 36.6081 27.3128 36.1481 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M36.1481 1.64874C35.6881 1.64874 35.3181 1.27874 35.3181 0.818741C35.3181 0.358741 35.6881 -0.011261 36.1481 -0.011261C36.6081 -0.011261 36.9781 0.358741 36.9781 0.818741C36.9781 1.27874 36.6081 1.64874 36.1481 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M53.8122 27.3128C53.3522 27.3128 52.9822 26.9428 52.9822 26.4828C52.9822 26.0228 53.3522 25.6528 53.8122 25.6528C54.2722 25.6528 54.6422 26.0228 54.6422 26.4828C54.6422 26.9428 54.2722 27.3128 53.8122 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M53.8122 1.64874C53.3522 1.64874 52.9822 1.27874 52.9822 0.818741C52.9822 0.358741 53.3522 -0.011261 53.8122 -0.011261C54.2722 -0.011261 54.6422 0.358741 54.6422 0.818741C54.6422 1.27874 54.2722 1.64874 53.8122 1.64874Z"
              fill="#0094D9"
            />
            <path
              d="M71.4684 27.3128C71.0084 27.3128 70.6384 26.9428 70.6384 26.4828C70.6384 26.0228 71.0084 25.6528 71.4684 25.6528C71.9284 25.6528 72.2984 26.0228 72.2984 26.4828C72.2984 26.9428 71.9284 27.3128 71.4684 27.3128Z"
              fill="#0094D9"
            />
            <path
              d="M71.4684 1.64874C71.0084 1.64874 70.6384 1.27874 70.6384 0.818741C70.6384 0.358741 71.0084 -0.011261 71.4684 -0.011261C71.9284 -0.011261 72.2984 0.358741 72.2984 0.818741C72.2984 1.27874 71.9284 1.64874 71.4684 1.64874Z"
              fill="#0094D9"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2667">
              <rect
                width="130.9"
                height="183.68"
                fill="white"
                transform="matrix(-1 0 0 -1 130.9 183.68)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="w-full grid grid-cols-2 gap-[500px]">
          <div className="flex flex-col space-y-[24px]">
            <p className="w-[174px] rounded-[100px] border border-white/15 bg-[#A11E1F] shadow-inner-white backdrop-blur-sm py-[6px] px-[16px] text-center text-white font-gotham text-base font-medium leading-relaxed tracking-tighter">
              Sobre Nosotros
            </p>
            <p className="text-[#14559C] font-poppins text-3xl font-bold leading-none self-stretch">
              Excelencia desde 2007
            </p>
            <div className="text-[#364153] font-poppins text-base font-normal leading-loose self-stretch">
              <p>
                Somos una empresa líder en el sector energético con más de 18
                años de experiencia desarrollando soluciones EPC e ingeniería
                integral —eléctrica, mecánica y civil.
              </p>
              <br />
              <p>
                Vivimos nuestro lema{" "}
                <span className="text-[#364153] font-poppins text-base font-semibold leading-loose">
                  “Sin Límites”
                </span>
                , generando valor en proyectos de alta complejidad y en el
                mantenimiento especializado de equipos para asegurar su
                operación confiable.
              </p>
              <br />
              <p>
                Nuestro compromiso es ser un aliado estratégico para nuestros
                clientes: ofrecemos soluciones a retos complejos, calidad
                superior, tecnología de vanguardia, altos estándares de
                seguridad y un cumplimiento en los tiempos de entrega.
              </p>
            </div>

            <div className="grid grid-cols-2">
              <div className="space-y-[12px]">
                <div className="flex items-center gap-[8px]">
                  {svgCheck}
                  <span className="text-[#364153] font-poppins text-base font-medium leading-tight">
                    Experiencia Comprobada
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  {svgCheck}
                  <span className="text-[#364153] font-poppins text-base font-medium leading-tight">
                    Experiencia Comprobada
                  </span>
                </div>
              </div>
              <div className="space-y-[12px]">
                <div className="flex items-center gap-[8px]">
                  {svgCheck}
                  <span className="text-[#364153] font-poppins text-base font-medium leading-tight">
                    Experiencia Comprobada
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  {svgCheck}
                  <span className="text-[#364153] font-poppins text-base font-medium leading-tight">
                    Certificaciones Vigentes y Personal Calificado
                  </span>
                </div>
              </div>
            </div>

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

              <span className="text-[#0094D9] text-center font-poppins text-xl font-semibold leading-tight p-[10px]">
                Ver Más
              </span>
            </button>
          </div>
          <div className="relative h-full w-full">
            {/* 1. Imagen (Capa base) */}
            <img
              src={imgSobreNosotros}
              alt="Líderes en el Sector Energético"
              className="h-full w-full object-cover rounded-3xl bg-transparent shadow-2xl"
            />

            {/* 2. Gradiente (Capa de superposición, z-index: 10) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(20,85,156,0.9)] from-0% via-[rgba(20,85,156,0.4)] via-50% to-[rgba(0,0,0,0)] to-100% rounded-3xl"></div>

            {/* 3. Texto (Capa superior, z-index: 20) */}
            {/* CAMBIOS: Se elimina 'items-center' y se añade 'text-left' */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
              {/* Título */}
              <p className="text-white/90 font-poppins text-base font-normal leading-relaxed">
                Líderes en el Sector Energético
              </p>

              {/* Subtítulo */}
              <p className="text-white/90 font-poppins text-base font-normal leading-relaxed">
                Transformando la infraestructura energética
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[32px]">
          <div className="rounded-2xl border-t border-l border-r border-gray-100 bg-white shadow-xl flex flex-col justify-between">
            <div className="flex flex-col space-y-[16px] px-[67px] py-[41px]">
              <div className="rounded-2xl bg-[#259DD7] w-[64px] flex items-center justify-center text-center p-4">
                <svg
                  className="text-white"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.33335 18.6667C5.08104 18.6675 4.83366 18.5968 4.61995 18.4627C4.40625 18.3285 4.23499 18.1365 4.12608 17.9089C4.01717 17.6813 3.97507 17.4275 4.00468 17.1769C4.03429 16.9263 4.13439 16.6893 4.29335 16.4933L17.4933 2.89335C17.5924 2.77906 17.7273 2.70182 17.876 2.67432C18.0247 2.64683 18.1783 2.6707 18.3117 2.74202C18.445 2.81334 18.5501 2.92788 18.6098 3.06682C18.6695 3.20577 18.6801 3.36088 18.64 3.50668L16.08 11.5333C16.0045 11.7354 15.9792 11.9527 16.0061 12.1667C16.0331 12.3807 16.1116 12.5849 16.2348 12.7619C16.358 12.9389 16.5224 13.0834 16.7137 13.1829C16.9051 13.2824 17.1177 13.334 17.3333 13.3333H26.6667C26.919 13.3325 27.1664 13.4032 27.3801 13.5374C27.5938 13.6715 27.765 13.8635 27.874 14.0911C27.9829 14.3187 28.025 14.5726 27.9953 14.8231C27.9657 15.0737 27.8656 15.3107 27.7067 15.5067L14.5067 29.1067C14.4077 29.221 14.2727 29.2982 14.124 29.3257C13.9753 29.3532 13.8217 29.3293 13.6884 29.258C13.555 29.1867 13.4499 29.0722 13.3902 28.9332C13.3306 28.7943 13.3199 28.6392 13.36 28.4933L15.92 20.4667C15.9955 20.2646 16.0209 20.0473 15.9939 19.8333C15.9669 19.6194 15.8885 19.4151 15.7652 19.2381C15.642 19.0611 15.4777 18.9167 15.2863 18.8171C15.095 18.7176 14.8824 18.666 14.6667 18.6667H5.33335Z"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#259DD7] font-poppins text-base font-medium leading-relaxed self-stretch">
                Tecnología de Vanguardia
              </p>
              <p className="text-gray-700 font-poppins text-sm font-normal leading-relaxed self-stretch">
                Aplicamos innovación real mediante el uso de tecnología de
                última generación garantizando mayor confiabilidad y eficiencia
                en cada proyecto
              </p>
            </div>
            <div className="rounded-b-2xl bg-[#259DD7] h-[10px]"></div>
          </div>
          <div className="rounded-2xl border-t border-l border-r border-gray-100 bg-white shadow-xl flex flex-col justify-between">
            <div className="flex flex-col space-y-[16px] px-[67px] py-[41px]">
              <div className="rounded-2xl bg-[#14559C] w-[64px] flex items-center justify-center text-center p-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.636 17.1866L22.656 28.5546C22.6786 28.6885 22.6598 28.8261 22.6021 28.949C22.5445 29.0719 22.4506 29.1742 22.3332 29.2424C22.2158 29.3105 22.0804 29.3412 21.945 29.3303C21.8097 29.3193 21.681 29.2674 21.576 29.1813L16.8026 25.5986C16.5722 25.4265 16.2923 25.3335 16.0046 25.3335C15.717 25.3335 15.4371 25.4265 15.2066 25.5986L10.4253 29.18C10.3204 29.2659 10.1918 29.3178 10.0566 29.3287C9.92148 29.3396 9.7862 29.3091 9.66886 29.2411C9.55151 29.1732 9.45767 29.0711 9.39987 28.9484C9.34206 28.8258 9.32302 28.6884 9.34531 28.5546L11.364 17.1866"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 18.6666C20.4183 18.6666 24 15.0849 24 10.6666C24 6.24835 20.4183 2.66663 16 2.66663C11.5817 2.66663 8 6.24835 8 10.6666C8 15.0849 11.5817 18.6666 16 18.6666Z"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#259DD7] font-poppins text-base font-medium leading-relaxed self-stretch">
                Estándares Internacionales
              </p>
              <p className="text-gray-700 font-poppins text-sm font-normal leading-relaxed self-stretch">
                Trabajamos bajo los estándares internacionales más altos del
                sector eléctrico.
              </p>
            </div>
            <div className="rounded-b-2xl bg-[#14559C] h-[10px]"></div>
          </div>
          <div className="rounded-2xl border-t border-l border-r border-gray-100 bg-white shadow-xl flex flex-col justify-between">
            <div className="flex flex-col space-y-[16px] px-[67px] py-[41px]">
              <div className="rounded-2xl bg-[#A11E1F] w-[64px] flex items-center justify-center text-center p-4">
                <svg
                  className="text-white"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.33335 18.6667C5.08104 18.6675 4.83366 18.5968 4.61995 18.4627C4.40625 18.3285 4.23499 18.1365 4.12608 17.9089C4.01717 17.6813 3.97507 17.4275 4.00468 17.1769C4.03429 16.9263 4.13439 16.6893 4.29335 16.4933L17.4933 2.89335C17.5924 2.77906 17.7273 2.70182 17.876 2.67432C18.0247 2.64683 18.1783 2.6707 18.3117 2.74202C18.445 2.81334 18.5501 2.92788 18.6098 3.06682C18.6695 3.20577 18.6801 3.36088 18.64 3.50668L16.08 11.5333C16.0045 11.7354 15.9792 11.9527 16.0061 12.1667C16.0331 12.3807 16.1116 12.5849 16.2348 12.7619C16.358 12.9389 16.5224 13.0834 16.7137 13.1829C16.9051 13.2824 17.1177 13.334 17.3333 13.3333H26.6667C26.919 13.3325 27.1664 13.4032 27.3801 13.5374C27.5938 13.6715 27.765 13.8635 27.874 14.0911C27.9829 14.3187 28.025 14.5726 27.9953 14.8231C27.9657 15.0737 27.8656 15.3107 27.7067 15.5067L14.5067 29.1067C14.4077 29.221 14.2727 29.2982 14.124 29.3257C13.9753 29.3532 13.8217 29.3293 13.6884 29.258C13.555 29.1867 13.4499 29.0722 13.3902 28.9332C13.3306 28.7943 13.3199 28.6392 13.36 28.4933L15.92 20.4667C15.9955 20.2646 16.0209 20.0473 15.9939 19.8333C15.9669 19.6194 15.8885 19.4151 15.7652 19.2381C15.642 19.0611 15.4777 18.9167 15.2863 18.8171C15.095 18.7176 14.8824 18.666 14.6667 18.6667H5.33335Z"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#A11E1F] font-poppins text-base font-medium leading-relaxed self-stretch">
                Tecnología de Vanguardia
              </p>
              <p className="text-gray-700 font-poppins text-sm font-normal leading-relaxed self-stretch">
                Profesionales altamente capacitados con amplia experiencia en el
                sector.
              </p>
            </div>
            <div className="rounded-b-2xl bg-[#A11E1F] h-[10px]"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <svg
            width="109"
            height="19"
            viewBox="0 0 109 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M107.299 15.8945C106.548 15.8945 105.938 16.4395 105.938 17.1094C105.938 17.7792 106.548 18.3242 107.299 18.3242C108.05 18.3242 108.661 17.7792 108.661 17.1094C108.661 16.4395 108.05 15.8945 107.299 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M107.299 1.0252e-05C108.051 1.0252e-05 108.661 0.543912 108.661 1.21485C108.661 1.88579 108.051 2.42969 107.299 2.42969C106.547 2.42969 105.938 1.88579 105.938 1.21485C105.938 0.543912 106.547 1.0252e-05 107.299 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M89.6507 15.8945C88.8999 15.8945 88.2891 16.4395 88.2891 17.1094C88.2891 17.7792 88.8999 18.3242 89.6507 18.3242C90.4015 18.3242 91.0123 17.7792 91.0123 17.1094C91.0123 16.4395 90.4015 15.8945 89.6507 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M89.6507 1.0252e-05C88.8999 1.0252e-05 88.2891 0.544984 88.2891 1.21485C88.2891 1.88471 88.8999 2.42969 89.6507 2.42969C90.4015 2.42969 91.0123 1.88471 91.0123 1.21485C91.0123 0.544984 90.4015 1.0252e-05 89.6507 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M71.9864 15.8945C71.2356 15.8945 70.6248 16.4395 70.6248 17.1094C70.6248 17.7792 71.2356 18.3242 71.9864 18.3242C72.7371 18.3242 73.348 17.7792 73.348 17.1094C73.348 16.4395 72.7371 15.8945 71.9864 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M71.9866 1.0252e-05C71.2358 1.0252e-05 70.625 0.544984 70.625 1.21485C70.625 1.88471 71.2358 2.42969 71.9866 2.42969C72.7374 2.42969 73.3482 1.88471 73.3482 1.21485C73.3482 0.544984 72.7374 1.0252e-05 71.9866 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M54.3382 15.8945C53.5874 15.8945 52.9766 16.4395 52.9766 17.1094C52.9766 17.7792 53.5874 18.3242 54.3382 18.3242C55.089 18.3242 55.6998 17.7792 55.6998 17.1094C55.6998 16.4395 55.089 15.8945 54.3382 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M54.3382 1.0252e-05C55.0902 1.0252e-05 55.6998 0.543912 55.6998 1.21485C55.6998 1.88579 55.0902 2.42969 54.3382 2.42969C53.5862 2.42969 52.9766 1.88579 52.9766 1.21485C52.9766 0.543912 53.5862 1.0252e-05 54.3382 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M36.674 15.8945C35.9232 15.8945 35.3124 16.4395 35.3124 17.1094C35.3124 17.7792 35.9232 18.3242 36.674 18.3242C37.4248 18.3242 38.0356 17.7792 38.0356 17.1094C38.0356 16.4395 37.4248 15.8945 36.674 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M36.6741 1.0252e-05C35.9233 1.0252e-05 35.3125 0.544984 35.3125 1.21485C35.3125 1.88471 35.9233 2.42969 36.6741 2.42969C37.4249 2.42969 38.0357 1.88471 38.0357 1.21485C38.0357 0.544984 37.4249 1.0252e-05 36.6741 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M19.0257 15.8945C18.2749 15.8945 17.6641 16.4395 17.6641 17.1094C17.6641 17.7792 18.2749 18.3242 19.0257 18.3242C19.7765 18.3242 20.3873 17.7792 20.3873 17.1094C20.3873 16.4395 19.7765 15.8945 19.0257 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M19.0257 1.0252e-05C18.2749 1.0252e-05 17.6641 0.544984 17.6641 1.21485C17.6641 1.88471 18.2749 2.42969 19.0257 2.42969C19.7765 2.42969 20.3873 1.88471 20.3873 1.21485C20.3873 0.544984 19.7765 1.0252e-05 19.0257 1.0252e-05Z"
              fill="#0094D9"
            />
            <path
              d="M1.3616 15.8945C0.610818 15.8945 0 16.4395 0 17.1094C0 17.7792 0.610818 18.3242 1.3616 18.3242C2.11239 18.3242 2.72321 17.7792 2.72321 17.1094C2.72321 16.4395 2.11239 15.8945 1.3616 15.8945Z"
              fill="#0094D9"
            />
            <path
              d="M1.3616 1.0252e-05C0.610818 1.0252e-05 0 0.544984 0 1.21485C0 1.88471 0.610818 2.42969 1.3616 2.42969C2.11239 2.42969 2.72321 1.88471 2.72321 1.21485C2.72321 0.544984 2.11239 1.0252e-05 1.3616 1.0252e-05Z"
              fill="#0094D9"
            />
          </svg>
        </div>
      </section>

      {/* Sección Proyectos Destacados */}
      <section className="bg-gradient-to-b from-gray-50 to-white w-full">
        <DynamicBackground mediaType="image" mediaSource={nuestorProyectos}>
          <div>
              hola
          </div>
        </DynamicBackground>
      </section>

      {/* Sección Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-red-900 py-20 px-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Contáctanos Hoy
          </button>
        </div>
      </section>
    </>
  );
};
