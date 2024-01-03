/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#1a73e9",
        secondary: "#00204a",
        accent: "#4c4c4c",
        "accent-light": "#3A3A3A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
