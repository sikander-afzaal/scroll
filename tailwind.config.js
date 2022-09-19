/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern2": "url('./assets/background_svg.svg')",
        "section-pattern": "url('./assets/background_2ndsection.png')",
        "floor-pattern": "url('./assets/floor.svg')",
      },
    },
  },
  plugins: [],
};
