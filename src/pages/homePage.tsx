import { JSX } from "react";
import { Navbar } from "../components/navbar";
import { HeroHome } from "../components/home/heroHome";
import DynamicBackground from "../components/video";
import ServicesCarousel, { ServiceCard } from "../components/home/carousel";
import AboutUsSection from "../components/home/aboutUs";
import miVideo from "../assets/home/videoHome.mp4";
import imgSobreNosotros from "../assets/home/SobreNosotros.jpg";
import epcImage from "../assets/home/EPC.jpg";
import udeImage from "../assets/home/UDE.jpg";
import useImage from "../assets/home/USE.jpg";
import uatImage from "../assets/home/AutomatizacionSCADA.png";
import solarImage from "../assets/home/EnergiaSolar.jpg";
import pcymImage from "../assets/home/PCyM.png";
import suministrosImage from "../assets/home/Suministros.png";
import { OurProjects, ProjectCard } from "../components/home/ourProjects";
import csbImage from "../assets/home/SanBuenaventura.jpg";
import vgdImage from "../assets/home/VillanuevaGeneracionDiesel.png";
import leImage from "../assets/home/LaEnsenada.jpg";
import efImage from "../assets/home/ElFaro.png";
import snnImage from "../assets/home/SENuevaNacaome.jpg";
import { WhyChooseUs } from "../components/home/whyChooseUs";
import { Footer } from "../components/footer";

export const HomePage = (): JSX.Element => {
  // Features for About Us Section
  const aboutUsFeatures = [
    {
      id: "innovation",
      title: "Tecnología de Vanguardia",
      description:
        "Aplicamos innovación real mediante el uso de tecnología de última generación garantizando mayor confiabilidad y eficiencia en cada proyecto",
      icon: (
        <svg
          className="text-white"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <path
            d="M5.33335 18.6667C5.08104 18.6675 4.83366 18.5968 4.61995 18.4627C4.40625 18.3285 4.23499 18.1365 4.12608 17.9089C4.01717 17.6813 3.97507 17.4275 4.00468 17.1769C4.03429 16.9263 4.13439 16.6893 4.29335 16.4933L17.4933 2.89335C17.5924 2.77906 17.7273 2.70182 17.876 2.67432C18.0247 2.64683 18.1783 2.6707 18.3117 2.74202C18.445 2.81334 18.5501 2.92788 18.6098 3.06682C18.6695 3.20577 18.6801 3.36088 18.64 3.50668L16.08 11.5333C16.0045 11.7354 15.9792 11.9527 16.0061 12.1667C16.0331 12.3807 16.1116 12.5849 16.2348 12.7619C16.358 12.9389 16.5224 13.0834 16.7137 13.1829C16.9051 13.2824 17.1177 13.334 17.3333 13.3333H26.6667C26.919 13.3325 27.1664 13.4032 27.3801 13.5374C27.5938 13.6715 27.765 13.8635 27.874 14.0911C27.9829 14.3187 28.025 14.5726 27.9953 14.8231C27.9657 15.0737 27.8656 15.3107 27.7067 15.5067L14.5067 29.1067C14.4077 29.221 14.2727 29.2982 14.124 29.3257C13.9753 29.3532 13.8217 29.3293 13.6884 29.258C13.555 29.1867 13.4499 29.0722 13.3902 28.9332C13.3306 28.7943 13.3199 28.6392 13.36 28.4933L15.92 20.4667C15.9955 20.2646 16.0209 20.0473 15.9939 19.8333C15.9669 19.6194 15.8885 19.4151 15.7652 19.2381C15.642 19.0611 15.4777 18.9167 15.2863 18.8171C15.095 18.7176 14.8824 18.666 14.6667 18.6667H5.33335Z"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#259DD7]",
      borderColor: "text-[#259DD7]",
    },
    {
      id: "standards",
      title: "Estándares Internacionales",
      description:
        "Trabajamos bajo los estándares internacionales más altos del sector eléctrico.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M20.636 17.1866L22.656 28.5546C22.6786 28.6885 22.6598 28.8261 22.6021 28.949C22.5445 29.0719 22.4506 29.1742 22.3332 29.2424C22.2158 29.3105 22.0804 29.3412 21.945 29.3303C21.8097 29.3193 21.681 29.2674 21.576 29.1813L16.8026 25.5986C16.5722 25.4265 16.2923 25.3335 16.0046 25.3335C15.717 25.3335 15.4371 25.4265 15.2066 25.5986L10.4253 29.18C10.3204 29.2659 10.1918 29.3178 10.0566 29.3287C9.92148 29.3396 9.7862 29.3091 9.66886 29.2411C9.55151 29.1732 9.45767 29.0711 9.39987 28.9484C9.34206 28.8258 9.32302 28.6884 9.34531 28.5546L11.364 17.1866"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 18.6666C20.4183 18.6666 24 15.0849 24 10.6666C24 6.24835 20.4183 2.66663 16 2.66663C11.5817 2.66663 8 6.24835 8 10.6666C8 15.0849 11.5817 18.6666 16 18.6666Z"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#14559C]",
      borderColor: "text-[#259DD7]",
    },
    {
      id: "expertise",
      title: "Profesionales Expertos",
      description:
        "Profesionales altamente capacitados con amplia experiencia en el sector.",
      icon: (
        <svg
          className="text-white"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <path
            d="M5.33335 18.6667C5.08104 18.6675 4.83366 18.5968 4.61995 18.4627C4.40625 18.3285 4.23499 18.1365 4.12608 17.9089C4.01717 17.6813 3.97507 17.4275 4.00468 17.1769C4.03429 16.9263 4.13439 16.6893 4.29335 16.4933L17.4933 2.89335C17.5924 2.77906 17.7273 2.70182 17.876 2.67432C18.0247 2.64683 18.1783 2.6707 18.3117 2.74202C18.445 2.81334 18.5501 2.92788 18.6098 3.06682C18.6695 3.20577 18.6801 3.36088 18.64 3.50668L16.08 11.5333C16.0045 11.7354 15.9792 11.9527 16.0061 12.1667C16.0331 12.3807 16.1116 12.5849 16.2348 12.7619C16.358 12.9389 16.5224 13.0834 16.7137 13.1829C16.9051 13.2824 17.1177 13.334 17.3333 13.3333H26.6667C26.919 13.3325 27.1664 13.4032 27.3801 13.5374C27.5938 13.6715 27.765 13.8635 27.874 14.0911C27.9829 14.3187 28.025 14.5726 27.9953 14.8231C27.9657 15.0737 27.8656 15.3107 27.7067 15.5067L14.5067 29.1067C14.4077 29.221 14.2727 29.2982 14.124 29.3257C13.9753 29.3532 13.8217 29.3293 13.6884 29.258C13.555 29.1867 13.4499 29.0722 13.3902 28.9332C13.3306 28.7943 13.3199 28.6392 13.36 28.4933L15.92 20.4667C15.9955 20.2646 16.0209 20.0473 15.9939 19.8333C15.9669 19.6194 15.8885 19.4151 15.7652 19.2381C15.642 19.0611 15.4777 18.9167 15.2863 18.8171C15.095 18.7176 14.8824 18.666 14.6667 18.6667H5.33335Z"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#A11E1F]",
      borderColor: "text-[#A11E1F]",
    },
  ];

  // Services for Carousel
  const services: ServiceCard[] = [
    {
      id: "1",
      title: "EPCs",
      category: "Servicios",
      image: epcImage,
      description:
        "Proyectos EPC que integran ingeniería, suministro, construcción y puesta en marcha para plantas de generación, líneas de transmisión y subestaciones eléctricas, abarcando obras civiles, eléctricas y mecánicas.",
      imageText: "EPCs",
    },
    {
      id: "2",
      title: "UDE (Unidad de Diagnóstico Eléctrico)",
      category: "Servicios",
      image: udeImage,
      description:
        "Especializados en el diagnóstico de equipos de potencia mediante pruebas eléctricas y análisis de aceite que garantizan confiabilidad, seguridad y continuidad operativa",
      imageText: "UDE",
    },
    {
      id: "3",
      title: "USE",
      category: "Servicios",
      image: useImage,
      description:
        "Brindamos servicios de mantenimiento preventivo, correctivo y atención de fallas de emergencia con tiempos de respuesta rápidos y personal especializado.",
      imageText: "USE",
    },
    {
      id: "4",
      title: "Automatización y SCADA",
      category: "Servicios",
      image: uatImage,
      description:
        "Diseñamos, integramos y automatizamos sistemas de control para plantas, subestaciones y procesos industriales, garantizando soluciones eficientes, fiables y adaptadas a los requerimientos específicos de cada cliente.",
      imageText: "Automatización y SCADA",
    },
    {
      id: "5",
      title: "Energía Solar",
      category: "Servicios",
      image: solarImage,
      description:
        "Diseñamos y construimos soluciones fotovoltaicas eficientes y confiables que optimizan la operación, reducen costos energéticos y aseguran un retorno de inversión sostenible.",
      imageText: "Energía Solar",
    },
    {
      id: "6",
      title: "PCyM",
      category: "Servicios",
      image: pcymImage,
      description:
        "En nuestro taller de PCyM diseñamos e integramos tableros de protección, control, medición y comunicaciones para subestaciones y plantas de genreación.",
      imageText: "PCym",
    },
    {
      id: "7",
      title: "Suministros",
      category: "Servicios",
      image: suministrosImage,
      description:
        "Suministros de equipos y materiales eléctricos de alta calidad.",
      imageText: "Suministros",
    },
  ];

  const projects: ProjectCard[] = [
    {
      id: "1",
      image: csbImage,
      imageText: "CA-5 SAN BUENAVENTURA",
    },
    {
      id: "2",
      image: vgdImage,
      imageText: "VILLANUEVA GENERACIÓN DIESEL",
    },
    {
      id: "3",
      image: leImage,
      imageText: "LA ENSENADA",
    },
    {
      id: "4",
      image: efImage,
      imageText: "EL FARO",
    },
    {
      id: "5",
      image: snnImage,
      imageText: "SUBESTACIÓN NUEVA NACAOME",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <DynamicBackground
        mediaType="video"
        mediaSource={miVideo}
        gradient="bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        <Navbar />
        <HeroHome />
      </DynamicBackground>

      {/* About Us Section */}
      <AboutUsSection image={imgSobreNosotros} features={aboutUsFeatures} />

      {/* Services Section with Carousel */}
      <ServicesCarousel services={services} />

      <OurProjects projects={projects} />

      <WhyChooseUs />

      <Footer />
    </>
  );
};
