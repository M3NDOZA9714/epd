import { hover } from "@testing-library/user-event/dist/hover";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";

// ============================================================================
// BUTTON ARROW - Botón con efecto de flecha deslizante
// ============================================================================

interface ButtonArrowProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ButtonArrow = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonArrowProps) => {
  const CALC_TRANSLATE_CLASS = "translate-x-[calc(100%-42px)]";
  const baseStyles =
    "h-[42px] relative inline-flex items-center font-poppins font-semibold rounded-full transition-all duration-300 overflow-hidden";

  const variantStyles = {
    primary: "border border-[#0094D9] text-[#0094D9] hover:text-white",
    secondary:
      "bg-white/10 border border-[#A11E1F] text-[#A11E1F] hover:text-white",
    outline:
      "bg-transparent border border-[#0094D9] text-[#0094D9] hover:text-white",
  };

  const gradientColor = {
    primary: "from-[#00539F] to-[#0094D9] shadow-[0_0_4px_0_#14559C]",
    secondary: "from-[#A11E1F] to-[#E83A3B] shadow-[0_0_4px_0_#14559C]",
    outline: "from-[#0094D9] to-[#00539F]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}>
      {/* Fondo deslizante con gradiente */}
      <div
        className={`absolute w-[42px] h-[42px] left-0 p-[10px] border border-[#8AABE5] rounded-full bg-gradient-to-l ${gradientColor[variant]} group-hover:w-full transition-all duration-500 ease-out z-0`}>
        <div className="transition-all ease-in-out duration-500 group-hover:translate-x-full-minus-arrow">
          <ArrowRight />
        </div>
      </div>

      {/* Contenido (texto e icono) */}
      <div className="relative z-10 flex items-center ml-[42px] transition-all group-hover:-translate-x-[42px] ease-in-out duration-500">
        <span className="p-[10px]">{children}</span>
      </div>
    </button>
  );
};

// ============================================================================
// BUTTON SIMPLE - Botón simple sin efectos complejos
// ============================================================================

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center gap-2 font-poppins font-semibold rounded-full transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-l from-[#0094D9] to-[#00539F] text-white border border-[#8AABE5]",
    secondary: "bg-[#A11E1F] text-white border border-[#A11E1F]",
    outline: "border border-[#0094D9] text-[#0094D9] bg-transparent",
    ghost: "text-white hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-xs sm:text-sm",
    md: "px-4 sm:px-6 py-3 text-sm sm:text-base",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </button>
  );
};

// ============================================================================
// BADGE COMPONENT - Para etiquetas y categorías
// ============================================================================

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center font-poppins font-medium rounded-full";

  const variantStyles = {
    primary: "bg-[#0094D9] text-white border border-[#0094D9]",
    secondary: "bg-[#A11E1F] text-white border border-[#A11E1F]",
    accent: "bg-[#14559C] text-white border border-[#14559C]",
    light: "bg-white/10 text-white border border-white/20 backdrop-blur-sm",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-6 py-2 text-base",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};

// ============================================================================
// SECTION WRAPPER - Contenedor responsive reutilizable
// ============================================================================

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: "white" | "light" | "dark" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

export const Section = ({
  children,
  className = "",
  bgColor = "white",
  padding = "lg",
}: SectionProps) => {
  const bgStyles = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-r from-[#1E5E99] via-[#14559C] to-[#A11E1F]",
  };

  const paddingStyles = {
    sm: "py-6 sm:py-8 px-4 sm:px-6",
    md: "py-12 sm:py-16 px-4 sm:px-6 md:px-8",
    lg: "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    xl: "py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20",
  };

  return (
    <section
      className={`w-full ${bgStyles[bgColor]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </section>
  );
};

// ============================================================================
// HEADING - Encabezados responsive reutilizables
// ============================================================================

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  color?: "primary" | "white" | "dark";
  className?: string;
}

export const Heading = ({
  level,
  children,
  color = "primary",
  className = "",
}: HeadingProps) => {
  const colorStyles = {
    primary: "text-[#14559C]",
    white: "text-white",
    dark: "text-gray-900",
  };

  const sizeMap = {
    h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold",
    h3: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold",
    h4: "text-base sm:text-lg md:text-xl font-bold",
  };

  const Component = level;

  return (
    <Component
      className={`font-poppins ${sizeMap[level]} ${colorStyles[color]} leading-tight ${className}`}>
      {children}
    </Component>
  );
};

// ============================================================================
// PARAGRAPH - Párrafo responsive reutilizable
// ============================================================================

interface ParagraphProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "dark" | "light" | "white";
  className?: string;
}

export const Paragraph = ({
  children,
  size = "md",
  color = "dark",
  className = "",
}: ParagraphProps) => {
  const sizeStyles = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
  };

  const colorStyles = {
    dark: "text-[#364153]",
    light: "text-gray-700",
    white: "text-white",
  };

  return (
    <p
      className={`font-poppins ${sizeStyles[size]} ${colorStyles[color]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

// ============================================================================
// EJEMPLO DE USO
// ============================================================================

/*
BUTTON ARROW (con efecto deslizante):
<ButtonArrow variant="primary" size="lg">Ver Más</ButtonArrow>
<ButtonArrow variant="outline" size="md">Contáctanos</ButtonArrow>

BUTTON SIMPLE:
<Button variant="primary" size="lg">Guardar</Button>
<Button variant="secondary">Eliminar</Button>

BADGE:
<Badge variant="secondary">Servicios</Badge>
<Badge variant="light" size="lg">Nuevo</Badge>

SECTION:
<Section bgColor="gradient" padding="xl">
  Contenido aquí
</Section>

HEADING:
<Heading level="h1" color="primary">Título Principal</Heading>

PARAGRAPH:
<Paragraph size="lg" color="white">Contenido...</Paragraph>
*/
