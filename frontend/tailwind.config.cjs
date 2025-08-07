/***** Tailwind Config *****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5b8cff',
          50: '#eef3ff',
          100: '#dbe6ff',
          200: '#b9ccff',
          300: '#90adff',
          400: '#6a90ff',
          500: '#5b8cff',
          600: '#3d6ef2',
          700: '#2c55cc',
          800: '#2345a3',
          900: '#1f3a81'
        },
        glass: 'rgba(255,255,255,0.08)'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }
    }
  },
  plugins: []
};