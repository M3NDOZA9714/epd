import React, { ReactNode } from 'react';

interface DynamicBackgroundProps {
  children: ReactNode;
  mediaType: 'video' | 'image';
  mediaSource: string;
  gradient: string
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children, mediaType, mediaSource, gradient }) => {
  
  const renderBackground = () => {
    if (mediaType === 'video') {
      return (
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={mediaSource} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      );
    } 
    
    return (
      <img className="absolute top-0 left-0 w-full h-full object-cover" src={mediaSource} alt="Fondo Dinámico" />
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {renderBackground()}

      <div className={`relative z-10 w-full h-full ${gradient}`}>
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;