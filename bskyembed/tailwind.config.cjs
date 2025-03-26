/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['variant', [
    '&:is(.dark *):not(:is(.dark .light *))',
  ]],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(254,82,225)',
        brandLighten: 'rgb(254,158,237)',
        textLight: 'rgb(66,66,66)',
        textDimmed: 'rgb(174,174,174)',
        dimmedBgLighten: 'rgb(34,34,51)',
        dimmedBg: 'rgb(25,25,51)',
        dimmedBgDarken: 'rgb(17,17,34)',
      },
    },
  },
  plugins: [],
}
