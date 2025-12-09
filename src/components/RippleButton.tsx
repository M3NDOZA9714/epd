import React, { useState, ReactNode } from 'react';
// Asegúrate de que el archivo CSS del paso 1 esté importado en tu proyecto
// import './RippleButton.css'; 

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
}

// 💡 Lógica de React para calcular la posición del ripple
const useRipple = () => {
  const [ripples, setRipples] = useState<{ key: number, style: React.CSSProperties }[]>([]);

  const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const size = Math.max(button.clientWidth, button.clientHeight);
    
    // Calcula la posición relativa del clic
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      key: Date.now(),
      style: {
        width: size,
        height: size,
        top: y - size / 2, // Centra el ripple
        left: x - size / 2,
      },
    };

    setRipples(prevRipples => [...prevRipples, newRipple]);

    // Elimina el elemento de onda después de la animación (600ms)
    setTimeout(() => {
      setRipples(prevRipples => 
        prevRipples.filter(r => r.key !== newRipple.key)
      );
    }, 600); 
  };

  return { ripples, onMouseDown };
};

export const RippleButton: React.FC<RippleButtonProps> = ({ children, className = '' }) => {
  const { ripples, onMouseDown } = useRipple();
  
  // Clases Tailwind esenciales: 'relative' para posicionar el ripple y 'overflow-hidden' para contenerlo
  const baseClasses = "relative overflow-hidden transition-all duration-300"; 
  
  return (
    <button 
      className={`${baseClasses} ${className}`}
      onMouseDown={onMouseDown} 
    >
      {children}
      
      {/* Mapea las ondas expansivas */}
      {ripples.map(ripple => (
        <span 
          key={ripple.key}
          className="ripple-effect-custom" // Clase CSS del paso 1
          style={ripple.style}
        />
      ))}
    </button>
  );
};