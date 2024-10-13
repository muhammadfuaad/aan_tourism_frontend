/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "medium-blue": "#18546E",
        "dark-blue": "#1A2B49",
        gray: "#63687A",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        22: "22px",
      },
    },
  },
  plugins: [],
};
