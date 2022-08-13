/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"'],
      },
      colors: {
        "purple-one": "#5E17EB",
        "purple-two": "#361B74",
        "purple-three": "#D7CBFF",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: false,
  },
};
