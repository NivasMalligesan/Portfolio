import { smootherstep } from 'three/src/math/MathUtils.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        sandle: "#EFE8DC",
        zinc: "#101010",
        light_green:"#04301c"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screen:{
      sm : '480px',
      md:'768px',
      lg:'1024px',
    }
  },
  plugins: [],
}

