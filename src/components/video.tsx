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
  minHeight = "min-h-screen",
}) => {
  const renderBackground = () => {
    if (mediaType === "video") {
      return (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline>
          <source src={mediaSource} type="video/mp4" />
        </video>
      );
    }

    return (
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${mediaSource})` }}
      />
    );
  };

  return (
    <div className={`relative w-full ${minHeight} flex flex-col`}>
      {/* Capa 1: Fondo (video/imagen) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {renderBackground()}
      </div>

      {/* Capa 2: Overlay con gradiente */}
      <div className={`absolute inset-0 w-full h-full ${gradient}`} />

      {/* Capa 3: Contenido */}
      <div className="relative w-full flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default DynamicBackground;
