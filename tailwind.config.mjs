/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
        md: '0 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.4)',
        light: '0 1px 6px rgba(255, 255, 255, 0.3)',
      },
      borderRadius: {
        'blob-1': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'blob-2': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-3': '40% 60% 70% 30% / 40% 40% 60% 50%',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'terracotta': '#C75F4B', // Terrakotta/Rostrot aus dem Bild
        'olive': '#707356',      // Olivgrün aus dem Bild
        primary: {
          50: '#fdf5f5',
          100: '#fceeee',
          200: '#f6d6d6',
          300: '#f1b5b5',
          400: '#ec9696',  // Das gewünschte Altrosa
          500: '#D27277',  // rgb(210, 114, 119) - Optimiert für Textkontrast
          600: '#c26367',
          700: '#a24c50',
          800: '#864043',
          900: '#703a3c',
          950: '#411d1f',
        },
        secondary: {
          50: '#f7f8f4',
          100: '#eef0e7',
          200: '#dce0d0',
          300: '#c1cbb0',
          400: '#a5b08b',  
          500: '#707356',  // Olivgrün/Salbei aus dem Bild
          600: '#5b6045',
          700: '#474c38',
          800: '#3b3f30',
          900: '#33372c',
          950: '#191c14',
        },
        accent: {
          50: '#f9f6f5',
          100: '#f3ecea',
          200: '#e6d8d4',
          300: '#d9c0b8',
          400: '#c4a194',
          500: '#813328',  // Burgunderrot aus dem Bild
          600: '#6f2d24',
          700: '#5c271f',
          800: '#4e221d',
          900: '#42201c',
          950: '#27110e',
        },
        tertiary: {
          50: '#fcf9f0',
          100: '#f8f2e0',
          200: '#f1e5c3',
          300: '#e8d39e',
          400: '#dbc071',
          500: '#d1a754', // Goldtöne aus dem Bild
          600: '#bc8937',
          700: '#9c682d',
          800: '#80532a',
          900: '#6b4428',
          950: '#3b2313',
        },
        cream: '#F9F3E9', // Heller Beige-Hintergrund aus dem Bild
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: theme('textShadow.sm'),
        },
        '.text-shadow-md': {
          textShadow: theme('textShadow.md'),
        },
        '.text-shadow-lg': {
          textShadow: theme('textShadow.lg'),
        },
        '.text-shadow-light': {
          textShadow: theme('textShadow.light'),
        },
        '.animation-delay-2000': {
          animationDelay: '2s',
        },
        '.animation-delay-4000': {
          animationDelay: '4s',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
