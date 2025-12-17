import { JSX } from "react";
import DynamicBackground from "../components/video";
import { HeroUde } from "../components/ude/heroUde";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import bgHero from "../assets/ude/hero.png";
import { Ude } from "../components/ude/ude";
import { DiagnosticUde } from "../components/ude/diagnosticUde";
import { ProjectsUde } from "../components/ude/projectsUde";
import { ContactusUd } from "../components/ude/contacUsUde";
import bgContact from "../assets/ude/bgContact.jpg";

export const UdePage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]"
      >
        <Navbar />
        <HeroUde />
      </DynamicBackground>

      <Ude />

      <DiagnosticUde />

      <ProjectsUde />

      <DynamicBackground
        mediaSource={bgContact}
        mediaType="image"
        gradient="bg-gradient-to-b from-[#013852] to-[#013852]/30"
        maxHeight="max-h-[600px]"
      >
        <ContactusUd />
      </DynamicBackground>

      <Footer />
    </>
  );
};
