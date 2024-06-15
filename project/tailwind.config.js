/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], //set default font family
      },
      gridTemplateColumns: {
        "70/30": "70% 28%", // set default value
      },
    },
  },
  plugins: [],
};
