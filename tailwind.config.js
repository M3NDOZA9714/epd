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
      },
    },
  },
  plugins: [],
};
