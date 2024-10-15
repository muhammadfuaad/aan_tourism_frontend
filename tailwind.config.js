/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        inter: ["Inter"],
        poppins: ["Poppins"]
      },
      colors: {
        "medium-blue": "#18546E",
        "dark-blue": "#1A2B49",
        "gray": "#63687A",
        "2e": "#2E2E2E",
        "green": "#239506",
        "00": "#000000",
        "54": "#545353",
        "e6": "#E6E6E6"
      },
      fontSize: {
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
      },
    },
  },
  plugins: [],
};
