import { JSX } from "react";
import DynamicBackground from "../components/video";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import bgHero from "../assets/uat/bgHero.jpg";
import { ProjectsUat } from "../components/uat/projectsUat";
import bgContact from "../assets/uat/bgContact.jpg";
import { ServiceUat } from "../components/uat/ServiceUat";
import { Uat } from "../components/uat/uat";
import { HeroUat } from "../components/uat/heroUat";
import { ContactusUat } from "../components/uat/contacUsUat";

export const UatPage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        <Navbar />
        <HeroUat />
      </DynamicBackground>

      <Uat />

      <ServiceUat />

      <ProjectsUat />

      <DynamicBackground
        mediaSource={bgContact}
        mediaType="image"
        gradient="bg-gradient-to-b from-[#013852] to-[#013852]/30"
        maxHeight="max-h-[600px]">
        <ContactusUat />
      </DynamicBackground>

      <Footer />
    </>
  );
};
