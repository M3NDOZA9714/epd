import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AboutUsPage } from "./pages/aboutUsPage";
import { EPCsPage } from "./pages/epcs";
import { UdePage } from "./pages/udePage";
import { UsePage } from "./pages/usePage";
import { UpmPage } from "./pages/upmPage";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/epcs" element={<EPCsPage />} />
        <Route path="/ude" element={<UdePage />} />
        <Route path="/use" element={<UsePage />} />
        <Route path="/upm" element={<UpmPage />} />
      </Routes>
    </BrowserRouter>
  );
};
