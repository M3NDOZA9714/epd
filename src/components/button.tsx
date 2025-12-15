import { ReactNode } from "react";
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
  const baseStyles =
    "h-[42px] relative inline-flex items-center font-poppins font-semibold rounded-full transition-all duration-300 overflow-hidden";

  const variantStyles = {
    primary: "border border-white text-white hover:text-white",
    secondary:
      "border border-white text-white hover:text-white",
    outline:
      "border border-[#0094D9] text-[#0094D9] hover:text-white",
  };

  const gradientColor = {
    primary: "from-[#00539F] to-[#0094D9] shadow-[0_0_4px_0_#14559C]",
    secondary: "from-[#A11E1F] to-[#E83A3B] shadow-[0_0_4px_0_#14559C]",
    outline: "from-[#00539F] to-[#0094D9] border border-[#8AABE5] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}>
      {/* Fondo deslizante con gradiente */}
      <div
        className={`absolute w-[42px] h-[42px] left-0 p-[7px] border rounded-full bg-gradient-to-r ${gradientColor[variant]} group-hover:w-full transition-all duration-500 ease-in-out z-0`}>
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