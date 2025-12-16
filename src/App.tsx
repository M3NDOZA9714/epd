import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AboutUsPage } from "./pages/aboutUsPage";
import { ProjectsPage } from "./pages/projectsPage";
import { StatsSection } from "./pages/animations";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="proyectos" element={<ProjectsPage />} />
        <Route path="animaciones" element={<StatsSection />} />
      </Routes>
    </BrowserRouter>
  );
};
