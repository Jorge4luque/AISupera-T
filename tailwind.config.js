/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfc9',
          300: '#dccca8',
          400: '#c9b387',
          500: '#b69a66',
          600: '#a38552',
          700: '#8a6f44',
          800: '#6f5a37',
          900: '#5a4929',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#b8860b',
        },
      },
    },
  },
  plugins: [],
};
