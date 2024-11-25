/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#27374D",
        "secondary-1": "#526D82",
        "secondary-2": "#9DB2BF",
        "secondary-3": "#DDE6ED",
      },
      backgroundImage: {
        'about-banner': 'url("/about-banner-back.png")',
        'service-banner': 'url("/service-banner-back.png")',
        'gallery-banner': 'url("/gallery-banner-back.png")',
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}