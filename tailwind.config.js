/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'poppins' será el nombre de la clase de utilidad
        poppins: ["Poppins", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
      },
      boxShadow: {
        "custom-blue": "0 0 4px 0 #14559C",
        "inner-white": "inset 0 0 6px 3px rgba(255, 255, 255, 0.25)",
        "outline-blue": "0 0 4px 0 #0094D9",
        "inner-white-custom": "inset 0 0 6px 3px rgba(255, 255, 255, 0.25)",
      },
      translate: {
        "full-minus-arrow": "calc(100% - 30px)",
      },
      textShadow: {
        // Esto crea la clase: text-shadow-dark
        dark: "2px 2px 4px rgba(0, 0, 0, 0.40)",
        subtle: "1px 1px 5px rgba(0, 0, 0, 0.50)",
      },
    },
  },
  plugins: [],
};
