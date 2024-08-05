/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        germania: ["Germania One", "sans-serif"],
      },
      fontSize: {
        40: "2.5rem",
      },
      borderRadius: {
        10: "10px",
      },
      colors: {
        pink: "#FF0072",
        peach: "#EABC50",
        error: "#EE584D",
        mustard: "#EABC50",
        purp: "#7200FF",
      },
      screens: {
        desktop: "1280px",
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
