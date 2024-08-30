/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neut-45': '#989BA2',
        'neut-75': '#D8D8D8',
        'neut-95': '#F9F9F8',
        'pr-100': '#4D55F5',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  plugins: [],
};
