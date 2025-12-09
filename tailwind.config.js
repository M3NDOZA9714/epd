/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'poppins' será el nombre de la clase de utilidad
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "custom-blue": "0 0 4px 0 #14559C",
        "inner-white": "inset 0 0 6px 3px rgba(255, 255, 255, 0.25)",
        'outline-blue': '0 0 4px 0 #0094D9',
      },
    },
  },
  plugins: [],
};
