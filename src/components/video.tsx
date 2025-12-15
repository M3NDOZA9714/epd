import React, { ReactNode } from "react";

interface DynamicBackgroundProps {
  children: ReactNode;
  mediaType: "video" | "image";
  mediaSource: string;
  gradient: string;
  minHeight?: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  children,
  mediaType,
  mediaSource,
  gradient,
}) => {
  const renderBackground = () => {
    if (mediaType === "video") {
      return (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline>
          <source src={mediaSource} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      );
    }

    return (
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={mediaSource}
        alt="Fondo Dinámico"
      />
    );
  };

  return (
    <div className={`relative w-screen h-full min-h-screen`}>
      {renderBackground()}

      <div className={`z-10 absolute inset-0 h-full ${gradient}`}></div>
      <div className="relative z-20 w-full h-full min-h-screen">{children}</div>
    </div>
  );
};

export default DynamicBackground;
