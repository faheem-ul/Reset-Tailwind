/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: { max: "768px" },
      tab: { max: "991px" },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },

      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        accent: "#ff7565",
      },
    },
  },
  plugins: [],
};
