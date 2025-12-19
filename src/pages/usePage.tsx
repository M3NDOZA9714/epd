import { JSX } from "react";
import DynamicBackground from "../components/video";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import bgHero from "../assets/ude/hero.png";
import { ProjectsUde } from "../components/ude/projectsUde";
import bgContact from "../assets/ude/bgContact.jpg";
import { ServiceUse } from "../components/use/ServiceUse";
import { Use } from "../components/use/use";
import { ContactusUse } from "../components/use/contacUsUse";
import { HeroUse } from "../components/use/heroUse";

export const UsePage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        <Navbar />
        <HeroUse />
      </DynamicBackground>

      <Use />

      <ServiceUse />

      <ProjectsUde />

      <DynamicBackground
        mediaSource={bgContact}
        mediaType="image"
        gradient="bg-gradient-to-b from-[#013852] to-[#013852]/30"
        maxHeight="max-h-[600px]">
        <ContactusUse />
      </DynamicBackground>

      <Footer />
    </>
  );
};
