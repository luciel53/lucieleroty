/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwindcss-animated/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgreen: "#317A42",
        lightgreen: "#7CC78D",
        lightgray: "#EAE4E4",
        verylightgray: "#F7F4F4",
      },
      dropShadow: {
        'left': '-10px 5px 8px rgba(0, 0, 0, 0.23)',
      },
      fontFamily: {
        specialelite: ['var(--font-specialelite)', 'sans-serif'],
        glitch: ['var(--font-glitch)', 'sans-serif'],
      },
      textAlign: {
        justify: 'justify',
      },
      backgroundImage: {
        wallpaper: "url('/images/Photos/lighttransparentwallpaper.jpg')",
        tea: "url('/images/Photos/tea.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
