import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

// Datos de las estadísticas
const statsData = [
  {
    title: 'Transformadores de Potencia Instalados',
    value: 40,
    prefix: '+',
  },
  {
    title: 'Subestaciones Recepcionadas',
    value: 38,
    prefix: '+',
  },
  {
    title: 'En respuestas y Soluciones',
    value: 21,
    suffix: 'h',
    prefix: '-',
  },
  {
    title: 'MVA Instaladas Actualmente',
    value: 261,
    prefix: '+',
  },
  {
    title: 'Clientes a Nivel Nacional',
    value: 100,
    prefix: '+',
  },
];

// Hook personalizado para animar el conteo de números
const useCountAnimation = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Componente de tarjeta individual
const StatCard = ({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  index,
  animationKey
}: { 
  title: string; 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  index: number;
  animationKey: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedValue = useCountAnimation(value, 2000, isVisible);
  const circleControls = useAnimation();

  // Calcula la circunferencia del círculo
  const radius = 66; // Radio del círculo (140px de diámetro / 2 - 4px de borde)
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isVisible) {
      // Animar el círculo
      circleControls.start({
        strokeDashoffset: 0,
        transition: {
          duration: 2,
          ease: "easeInOut",
          delay: 0
        }
      });
    } else {
      // Resetear el círculo
      circleControls.set({ strokeDashoffset: circumference });
    }
  }, [isVisible, circumference, circleControls, index]);

  useEffect(() => {
    // Iniciar animación al montar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [animationKey]);

  return (
    <motion.div
      key={`card-${index}-${animationKey}`}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <h3 className="stat-title">{title}</h3>
      <div className="stat-circle">
        <svg className="circle-svg" viewBox="0 0 140 140">
          {/* Círculo de fondo */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="white"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          {/* Círculo animado rojo */}
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#8b4544"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={circleControls}
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
        </svg>
        <span className="stat-number">
          {prefix}{isVisible ? animatedValue : 0}{suffix}
        </span>
      </div>
    </motion.div>
  );
};

// Componente de ondas animadas en el fondo
const AnimatedWaves = () => {
  return (
    <div className="waves-container">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="wave"
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ 
            scale: [0, 2, 3],
            opacity: [0.6, 0.3, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

// Componente principal
export const StatsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const badgeControls = useAnimation();
  const headingControls = useAnimation();

  useEffect(() => {
    const runAnimationCycle = async () => {
      // Animar badge y heading
      await badgeControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });

      await headingControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2 }
      });

      // Esperar a que termine la animación completa (tarjetas + contadores)
      // Tarjetas: 0.6s + (4 * 0.15s delay) = 1.2s
      // Contador: 2s
      // Total: ~3.2s
      await new Promise(resolve => setTimeout(resolve, 3500));

      // Resetear todo
      badgeControls.set({ opacity: 0, y: -20 });
      headingControls.set({ opacity: 0, y: 20 });

      // Esperar 3 segundos antes de reiniciar
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Reiniciar incrementando la key
      setAnimationKey(prev => prev + 1);
    };

    runAnimationCycle();
  }, [animationKey, badgeControls, headingControls]);


  return (

    
    <section className="stats-section">
      
      <div className="stats-content">
        <motion.div
          className="stats-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={badgeControls}
        >
          Logros Que Nos Impulsan
        </motion.div>

        <motion.h2
          className="stats-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={headingControls}
        >
          Números que reflejan nuestro compromiso y experiencia.
        </motion.h2>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard
              key={`${index}-${animationKey}`}
              title={stat.title}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              index={index}
              animationKey={animationKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};