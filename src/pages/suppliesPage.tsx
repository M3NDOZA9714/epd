import { JSX } from "react";
import { Navbar } from "../components/navbar";
import { HeroSupply } from "../components/supplies/heroSupply";
import { ContactUs } from "../components/supplies/contactUs";
import DynamicBackground from "../components/video";
import bgHero from "../assets/supplies/bgHero.png";
import { Footer } from "../components/footer";
import { Supplies } from "../components/supplies/supplies";

export const SuppliesPage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        <Navbar />
        <HeroSupply />
      </DynamicBackground>

      <Supplies />

      <ContactUs />

      <Footer></Footer>
    </>
  );
};
