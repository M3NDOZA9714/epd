import { JSX } from "react";
import { Navbar } from "../components/navbar";
import bgHero from "../assets/aboutUs/HeaderBackground.png";
import DynamicBackground from "../components/video";
import { HeroEpcs } from "../components/epcs/heroEpcs";
import { DiscoverUsEpcs } from "../components/epcs/discoverUsEpcs";
import { OurReachEpc } from "../components/epcs/ourReach";
import bgReach from "../assets/epcs/bgReach.png";
import { Footer } from "../components/footer";

export interface ProjectCard {
  id: string;
  image: string;
  imageText?: string;
}

export const EPCsPage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bgHero}
        mediaType="image"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]"
      >
        <Navbar />
        <HeroEpcs />
      </DynamicBackground>

      <DiscoverUsEpcs />

      <DynamicBackground
        mediaSource={bgReach}
        mediaType="image"
        gradient="bg-[linear-gradient(122deg,rgba(20,85,156,0.87)_0%,rgba(37,157,215,0.90)_84.35%)]"
      >
        <OurReachEpc />
      </DynamicBackground>

      <Footer />
    </>
  );
};
