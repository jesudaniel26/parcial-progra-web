/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src//*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        containerLogin:"#1aebb6"
      },
      boxShadow: {
        max: '0px 2px 25px 0px #737F71',
      },
    },
  },
 plugins: [],
}