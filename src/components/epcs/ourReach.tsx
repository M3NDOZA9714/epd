import { JSX } from "react";
import engineering from "../../assets/epcs/engineering.png";

export const OurReachEpc = (): JSX.Element => {
  return (
    <section className="w-full h-full flex flex-col flex-1 justify-center items-center px-4 sm:px-8 md:px-12 lg:ps-16 xl:ps-[64px] space-y-4 sm:space-y-5 md:space-y-6 py-12 sm:py-16 md:py-0">
      <div className="px-[16px] py-[6px] w-fit rounded-[100px] border border-white/15 bg-[#A11E1F] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] text-white font-poppins text-base font-semibold leading-[26px] tracking-tight self">
        Nuestro Alcance
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="relative rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute text-white h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            INGENIERIA
          </div>
          <img src={engineering} alt="" />
        </div>
        <div className="relative rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute text-white h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            INGENIERIA
          </div>
          <img src={engineering} alt="" />
        </div>
        <div className="relative rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute text-white h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            INGENIERIA
          </div>
          <img src={engineering} alt="" />
        </div>
        <div className="relative rounded-2xl border-2 border-gray-50 bg-gradient-to-b from-blue-400/35 to-blue-900/35 overflow-hidden">
          <div className="absolute text-white h-full w-full flex justify-center items-center text-white text-center font-poppins text-2xl font-bold leading-normal bg-[linear-gradient(180deg,rgba(0,148,217,0.35)_-72.56%,rgba(0,83,159,0.35)_-39.71%)]">
            INGENIERIA
          </div>
          <img src={engineering} alt="" />
        </div>
      </div>
    </section>
  );
};
