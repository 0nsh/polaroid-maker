/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sharpie: ['Permanent Marker', 'cursive'],
      },
      colors: {
        dark: {
          50: '#1a1a1a',
          100: '#2d2d2d',
          200: '#3d3d3d',
          300: '#4d4d4d',
        },
      },
    },
  },
  plugins: [],
};