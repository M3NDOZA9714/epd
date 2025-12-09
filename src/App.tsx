import { JSX } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import miVideo from "./assets/videoHome.mp4";
import DynamicBackground from "./components/video";

export const App = (): JSX.Element => {
  return (
    <DynamicBackground mediaType="video" mediaSource={miVideo}>
      <Navbar />
      <Home />
    </DynamicBackground>
  );
};
