import { JSX } from "react";
import DynamicBackground from "../components/video";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import bgHero from "../assets/upm/bgHero.jpg";
import { ProjectsUpm } from "../components/upm/projectsUpm";
import contactUsUpm from "../assets/upm/contactUsUpm.png";
import { ServiceUpm } from "../components/upm/ServiceUpm";
import { HeroUpm } from "../components/upm/heroUpm";
import { ContactusUpm } from "../components/upm/contacUsUpm";
import { Upm } from "../components/upm/upm";

export const UpmPage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        <Navbar />
        <HeroUpm />
      </DynamicBackground>

      <Upm />

      <ServiceUpm />

      <ProjectsUpm />

      <DynamicBackground
        mediaSource={contactUsUpm}
        mediaType="image"
        gradient="bg-gradient-to-b from-[#013852] to-[#013852]/30"
        maxHeight="max-h-[600px]">
        <ContactusUpm />
      </DynamicBackground>

      <Footer />
    </>
  );
};
