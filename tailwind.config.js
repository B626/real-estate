/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "240px",
      sm2: "360px",
      sm3: "480px",
      md: "576px",
      md2: "768px",
      l: "992px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1500px",
    },
  },
  plugins: [],
};

