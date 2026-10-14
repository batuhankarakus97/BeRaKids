/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brandBg: '#EBF3FE',
        brandPrimary: '#5A52EA',
        brandDark: '#0B0E28',
        cardYellow: '#FFF5C3',
        cardPink: '#FDE2F3',
        cardBlue: '#D8EEFF',
      },
    },
  },
  plugins: [],
};
