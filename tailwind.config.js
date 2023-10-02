/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      "sm": '576px',
      "md": '768px',
      "lg": '1024px',
      "xl": '1280px',
      "2xl": '1536px',
      "3xl": '1920px',
    },
    extend: {
      screens: {
        'xs': {'min': '0px', 'max':'575px'}
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

  
  theme: {
    extend: {},
  },
  plugins: [],

}