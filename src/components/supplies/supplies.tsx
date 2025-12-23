import { JSX } from "react";
import transformador from "../../assets/supplies/transformadores/icon_transfirmador_negro.svg";
import t1 from "../../assets/supplies/transformadores/transformadorTipoPoste.png";
import t2 from "../../assets/supplies/transformadores/transformadorPadMounted.png";
import t3 from "../../assets/supplies/transformadores/transformadorPotencia.png";
import mediaTension from "../../assets/supplies/mediaTension/icon-mediatesion-negro.png";
import md1 from "../../assets/supplies/mediaTension/img_switchgear.png";
import md2 from "../../assets/supplies/mediaTension/reclosers.png";
import md3 from "../../assets/supplies/mediaTension/reguladorVoltaje.png";

export const Supplies = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 md:space-y-12">
      <div className="flex gap-4">
        {[
          {
            id: "1",
            icon: transformador,
            title: "TRANSFORMADORES",
            images: [t1, t2, t3],
          },
          {
            id: "2",
            icon: mediaTension,
            title: "MEDIA TENSIÓN",
            images: [md1, md2, md3],
          },
        ].map((supply) => (
          <div
            className="w-[200px] rounded-2xl border-b-4 border-[#0094D9] bg-[#FAFAFA] shadow-[0_5px_10px_0_rgba(0,0,0,0.14)] py-[10px] px-[12px] flex flex-col gap-2 items-center"
            key={supply.id}>
            <img className="w-[59px] h-[59px]" src={supply.icon} alt="" />
            <div className="text-black text-center font-poppins text-sm font-bold leading-6 self-stretch">
              {supply.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
