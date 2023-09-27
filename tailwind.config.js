/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
      palanquin: ["Palanquin"],
    },
    backgroundImage: {
      hero: "url('/src/assets/hero.svg')",
      card: "url('/src/assets/thumbnail-background.svg')",
    },

    extend: {},
  },
  plugins: [],
};
