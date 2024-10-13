/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       'arial': ['Arial', 'sans-serif'],
      },
      colors: {
        "medium-blue": "#18546E",
        "dark-blue": "#1A2B49",
        gray: "#63687A",
        "2e": "#2E2E2E",
        "green": "#239506",
        "0": "#000000",
        "54": "#545353"
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",

        22: "22px",
      },
    },
  },
  plugins: [],
};
