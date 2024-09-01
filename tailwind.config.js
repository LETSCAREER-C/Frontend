/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neut-35': '#5C5F66',
        'neut-40': '#7A7D84',
        'neut-45': '#989BA2',
        'neut-75': '#D8D8D8',
        'neut-80': '#E7E7E7',
        'neut-85': '#EFEFEF',
        'neut-95': '#F9F9F8',
        'pr-10': '#EDEEFE',
        'pr-50': '#A6AAFA',
        'pr-100': '#4D55F5',

      },
      screens: {
        'sm': 'px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  plugins: [],
};
