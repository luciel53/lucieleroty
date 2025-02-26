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
        darkgreen: "#1DA23C",
        lightgreen: "#82E398",
        lightgray: "#EAE4E4",
        verylightgray: "#FCFBFB",
      },
      dropShadow: {
        'left': '-10px 5px 8px rgba(0, 0, 0, 0.23)',
      },
      fontFamily: {
        specialelite: ['var(--font-specialelite)', 'sans-serif'],
        glitch: ['var(--font-glitch)', 'sans-serif'],
        // geist: ['var(--font-geist)', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        Cartoonist: ['var(--font-Cartoonist)', 'sans-serif'],
        caramella: ['var(--font-caramella)', 'sans-serif'],
        primer: ['var(--font-primer)', 'sans-serif'],

      },
      textAlign: {
        justify: 'justify',
      },
      backgroundImage: {
        wallpaper: "url('/images/Photos/lighttransparentwallpaper.webp')",
        tea: "url('/images/Photos/tea.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
