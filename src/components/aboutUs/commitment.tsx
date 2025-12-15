import { JSX } from "react";
import sliderImg1 from "../../assets/aboutUs/slider nuestroCompromiso_img1.png";
import sliderImg2 from "../../assets/aboutUs/slider nuestroCompromiso_img2.png";
import sliderImg3 from "../../assets/aboutUs/slider nuestroCompromiso_img3.png";
import sliderImg4 from "../../assets/aboutUs/slider nuestroCompromiso_img4.png";
import sliderImg5 from "../../assets/aboutUs/slider nuestroCompromiso_img5.png";
import sliderImg6 from "../../assets/aboutUs/slider nuestroCompromiso_img6.png";

export const CommitmentAboutUs = (): JSX.Element => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 space-y-8 md:space-y-12 flex justify-center">
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <div className="w-fit py-[6px] px-[16px] rounded-[100px] border border-[rgba(255,255,255,0.15)] bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-gotham text-base font-medium leading-[26px] tracking-[-0.002px]">
          Nuestro Compromiso
        </div>
        <p className="text-black text-center font-poppins text-xl font-medium leading-8 flex-shrink-0">
          Desde el concepto hasta la puesta en marcha, nuestra experiencia y
          soluciones integrales brindan certeza, innovación y valor agregado a
          cada proyecto, impulsados siempre por la pasión que nos mueve a hacer
          las cosas con excelencia.
        </p>
        <div>
          <img className="h-[489px] rounded-[16px]" src={sliderImg1} alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative overflow-hidden group hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] shadow-md flex flex-col justify-center gap-[24px] items-center bg-white rounded-[16px] py-[30px] px-[25px]">
            <div className="flex flex-col gap-[15px] justify-center items-center">
              <div className="w-fit rounded-[16px] bg-[#259DD7] p-[20px] flex items-center justify-center">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.6766 23.3658C6.36077 23.3668 6.05113 23.2783 5.78363 23.1104C5.51613 22.9425 5.30177 22.7021 5.16544 22.4172C5.02912 22.1323 4.97642 21.8146 5.01349 21.501C5.05055 21.1873 5.17584 20.8906 5.37481 20.6454L21.8974 3.62205C22.0214 3.47899 22.1903 3.38232 22.3764 3.3479C22.5625 3.31348 22.7548 3.34336 22.9217 3.43263C23.0886 3.52191 23.2202 3.66527 23.2949 3.8392C23.3696 4.01312 23.3829 4.20727 23.3327 4.38977L20.1284 14.4369C20.0339 14.6898 20.0021 14.9618 20.0359 15.2296C20.0696 15.4975 20.1678 15.7531 20.3221 15.9747C20.4764 16.1962 20.6821 16.3771 20.9216 16.5016C21.1611 16.6262 21.4272 16.6908 21.6972 16.69H33.3798C33.6957 16.6889 34.0053 16.7774 34.2728 16.9453C34.5403 17.1132 34.7547 17.3536 34.891 17.6385C35.0273 17.9234 35.08 18.2411 35.043 18.5547C35.0059 18.8684 34.8806 19.1651 34.6816 19.4103L18.159 36.4337C18.0351 36.5767 17.8662 36.6734 17.68 36.7078C17.4939 36.7422 17.3016 36.7124 17.1347 36.6231C16.9678 36.5338 16.8362 36.3904 16.7615 36.2165C16.6868 36.0426 16.6735 35.8485 16.7237 35.6659L19.9281 25.6189C20.0226 25.366 20.0543 25.0939 20.0206 24.8261C19.9868 24.5582 19.8886 24.3026 19.7343 24.081C19.5801 23.8595 19.3744 23.6787 19.1349 23.5541C18.8954 23.4295 18.6292 23.3649 18.3593 23.3658H6.6766Z"
                    stroke="white"
                    stroke-width="3.33791"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-poppins text-center group-hover:scale-110 transition-all duration-500 ease-in-out">
                <span className="text-[#259DD7] text-5xl font-bold leading-[48px]">
                  +250
                </span>
                <span className="text-[#259DD7] text-2xl font-medium leading-8">
                  MV
                </span>
              </div>
              <div className="text-[#14559C] text-center font-poppins text-lg font-semibold leading-6 self-stretch group-hover:scale-110 transition-all duration-500 ease-in-out">
                Potencia Instalada
              </div>
              <div className="text-[#4A5565] text-center font-poppins text-base font-normal leading-6 self-stretch">
                Siendo parte de proyectos estratégicos
              </div>
            </div>
            <div className="h-[1px] bg-[#E5E7EB] w-full mx-[-25px] my-[12px]"></div>
            <div className="flex justify-center items-center w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8006 10.0005C22.2573 12.2418 21.9318 14.5719 20.8785 16.6023C19.8251 18.6326 18.1075 20.2405 16.0121 21.1578C13.9167 22.0751 11.5702 22.2463 9.36391 21.6428C7.15758 21.0394 5.2248 19.6979 3.88789 17.8419C2.55097 15.9859 1.89073 13.7277 2.01728 11.4439C2.14382 9.16001 3.04949 6.98857 4.58326 5.29165C6.11703 3.59473 8.18619 2.47491 10.4457 2.11893C12.7052 1.76295 15.0184 2.19234 16.9996 3.33548"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11L12 14L22 4"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="absolute h-[15px] bottom-0 bg-transparent w-full rounded-b-[16px] group-hover:bg-[#259DD7] transition-all ease-in-out duration-500"></div>
          </div>
          {/* Card 2 */}
          <div className="relative overflow-hidden group hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] shadow-md flex flex-col justify-center gap-[24px] items-center bg-white rounded-[16px] py-[30px] px-[25px]">
            <div className="flex flex-col gap-[15px] justify-center items-center">
              <div className="w-fit rounded-[16px] bg-[#14559C] p-[20px] flex items-center justify-center">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.9434 10.4717V20.943L27.9242 24.4334"
                    stroke="white"
                    stroke-width="3.49042"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9424 38.3945C30.5809 38.3945 38.3945 30.5809 38.3945 20.9424C38.3945 11.3038 30.5809 3.49023 20.9424 3.49023C11.3038 3.49023 3.49023 11.3038 3.49023 20.9424C3.49023 30.5809 11.3038 38.3945 20.9424 38.3945Z"
                    stroke="white"
                    stroke-width="3.49042"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-poppins text-center group-hover:scale-110 transition-all duration-500 ease-in-out">
                <span className="text-[#14559C] text-5xl font-bold leading-[48px]">
                  {"<"}24
                </span>
                <span className="text-[#14559C] text-2xl font-medium leading-8">
                  hrs
                </span>
              </div>
              <div className="text-[#14559C] text-center font-poppins text-lg font-semibold leading-6 self-stretch group-hover:scale-110 transition-all duration-500 ease-in-out">
                Tiempo de Respuesta
              </div>
              <div className="text-[#4A5565] text-center font-poppins text-base font-normal leading-6 self-stretch">
                Soluciones rápidas y efectivas
              </div>
            </div>
            <div className="h-[1px] bg-[#E5E7EB] w-full mx-[-25px] my-[12px]"></div>
            <div className="flex justify-center items-center w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8006 10.0005C22.2573 12.2418 21.9318 14.5719 20.8785 16.6023C19.8251 18.6326 18.1075 20.2405 16.0121 21.1578C13.9167 22.0751 11.5702 22.2463 9.36391 21.6428C7.15758 21.0394 5.2248 19.6979 3.88789 17.8419C2.55097 15.9859 1.89073 13.7277 2.01728 11.4439C2.14382 9.16001 3.04949 6.98857 4.58326 5.29165C6.11703 3.59473 8.18619 2.47491 10.4457 2.11893C12.7052 1.76295 15.0184 2.19234 16.9996 3.33548"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11L12 14L22 4"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="absolute h-[15px] bottom-0 bg-transparent w-full rounded-b-[16px] group-hover:bg-[#14559C] transition-all ease-in-out duration-500"></div>
          </div>
          {/* Card 3 */}
          <div className="relative overflow-hidden group hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_0_15px_rgba(0,0,0,0.4)] shadow-md flex flex-col justify-center gap-[24px] items-center bg-white rounded-[16px]  py-[30px] px-[25px] transition-all ease-in-out duration-500">
            <div className="flex flex-col gap-[15px] justify-center items-center">
              <div className="w-fit rounded-[16px] bg-[#A11E1F] p-[20px] flex items-center justify-center">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.6766 23.3658C6.36077 23.3668 6.05113 23.2783 5.78363 23.1104C5.51613 22.9425 5.30177 22.7021 5.16544 22.4172C5.02912 22.1323 4.97642 21.8146 5.01349 21.501C5.05055 21.1873 5.17584 20.8906 5.37481 20.6454L21.8974 3.62205C22.0214 3.47899 22.1903 3.38232 22.3764 3.3479C22.5625 3.31348 22.7548 3.34336 22.9217 3.43263C23.0886 3.52191 23.2202 3.66527 23.2949 3.8392C23.3696 4.01312 23.3829 4.20727 23.3327 4.38977L20.1284 14.4369C20.0339 14.6898 20.0021 14.9618 20.0359 15.2296C20.0696 15.4975 20.1678 15.7531 20.3221 15.9747C20.4764 16.1962 20.6821 16.3771 20.9216 16.5016C21.1611 16.6262 21.4272 16.6908 21.6972 16.69H33.3798C33.6957 16.6889 34.0053 16.7774 34.2728 16.9453C34.5403 17.1132 34.7547 17.3536 34.891 17.6385C35.0273 17.9234 35.08 18.2411 35.043 18.5547C35.0059 18.8684 34.8806 19.1651 34.6816 19.4103L18.159 36.4337C18.0351 36.5767 17.8662 36.6734 17.68 36.7078C17.4939 36.7422 17.3016 36.7124 17.1347 36.6231C16.9678 36.5338 16.8362 36.3904 16.7615 36.2165C16.6868 36.0426 16.6735 35.8485 16.7237 35.6659L19.9281 25.6189C20.0226 25.366 20.0543 25.0939 20.0206 24.8261C19.9868 24.5582 19.8886 24.3026 19.7343 24.081C19.5801 23.8595 19.3744 23.6787 19.1349 23.5541C18.8954 23.4295 18.6292 23.3649 18.3593 23.3658H6.6766Z"
                    stroke="white"
                    stroke-width="3.33791"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-poppins text-center group-hover:scale-110 transition-all duration-500 ease-in-out">
                <span className="text-[#A11E1F] text-5xl font-bold leading-[48px]">
                  +100
                </span>
              </div>
              <div className="text-[#A11E1F] text-center font-poppins text-lg font-semibold leading-6 self-stretch group-hover:scale-110 transition-all duration-500 ease-in-out">
                Clientes
              </div>
              <div className="text-[#4A5565] text-center font-poppins text-base font-normal leading-6 self-stretch">
                Siendo parte de proyectos estratégicos
              </div>
            </div>
            <div className="h-[1px] bg-[#E5E7EB] w-full mx-[-25px] my-[12px]"></div>
            <div className="flex justify-center items-center w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8006 10.0005C22.2573 12.2418 21.9318 14.5719 20.8785 16.6023C19.8251 18.6326 18.1075 20.2405 16.0121 21.1578C13.9167 22.0751 11.5702 22.2463 9.36391 21.6428C7.15758 21.0394 5.2248 19.6979 3.88789 17.8419C2.55097 15.9859 1.89073 13.7277 2.01728 11.4439C2.14382 9.16001 3.04949 6.98857 4.58326 5.29165C6.11703 3.59473 8.18619 2.47491 10.4457 2.11893C12.7052 1.76295 15.0184 2.19234 16.9996 3.33548"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11L12 14L22 4"
                  stroke="#00C950"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="absolute h-[15px] bottom-0 bg-transparent w-full rounded-b-[16px] group-hover:bg-[#A11E1F] transition-all ease-in-out duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
