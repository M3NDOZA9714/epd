import { JSX } from "react";
import DynamicBackground from "../components/video";
import { HeroAboutUs } from "../components/aboutUs/heroAboutUs";
import bg from "../assets/aboutUs/Header - Background.png";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { MissionAboutUs } from "../components/aboutUs/mission";
import mission from "../assets/aboutUs/video mision - vision- valores.mp4";
import { CommitmentAboutUs } from "../components/aboutUs/commitment";
import { AchievmentsAboutUs } from "../components/aboutUs/achievements";

export const AboutUsPage = (): JSX.Element => {
  return (
    <>
      <DynamicBackground
        mediaSource={bg}
        mediaType="image"
        gradient="bg-gradient-to-tr from-[rgba(1,56,82,0.72)] via-[rgba(20,85,156,0.64)] to-[rgba(161,30,31,0.55)]">
        <Navbar />
        <HeroAboutUs />
      </DynamicBackground>

      <AboutUs />

      <DynamicBackground
        mediaSource={mission}
        mediaType="video"
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.85)_0%,rgba(20,85,156,0.75)_50%,rgba(161,30,31,0.65)_100%)]">
        <MissionAboutUs />
      </DynamicBackground>

      <CommitmentAboutUs />

      <AchievmentsAboutUs />

      <Footer />
    </>
  );
};
