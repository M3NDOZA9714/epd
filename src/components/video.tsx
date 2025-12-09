import React, { ReactNode } from 'react';

interface DynamicBackgroundProps {
  children: ReactNode;
  mediaType: 'video' | 'image'; // Define explícitamente los tipos permitidos
  mediaSource: string; 
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children, mediaType, mediaSource }) => {
  
  const renderBackground = () => {
    if (mediaType === 'video') {
      return (
        <video className="absolute top-0 left-0 -z-1 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={mediaSource} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      );
    } 
    
    return (
      <img className="absolute top-0 left-0 -z-1 w-full h-full object-cover" src={mediaSource} alt="Fondo Dinámico" />
    );
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {renderBackground()}

      <div className="relative z-1 w-full h-full bg-[linear-gradient(135deg,rgba(1,56,82,0.60)_0%,rgba(20,85,156,0.52)_50%,rgba(161,30,31,0.45)_100%)]">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;