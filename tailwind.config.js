/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': 'F5F5F5',
        'custom-blue': '#091057',
      },

      boxShadow: {
        'custom-lg': '0px 4px 4px rgba(0, 0, 0, 20)',  // Box shadow lebih tebal
        'custom-xl': '0px 15px 40px rgba(0, 0, 0, 0.2)',   // Box shadow lebih besar dan tebal
        'custom-lg-biru': '0px 5px 3px rgba(0, 0, 700, 90)', // Shadow biru tua semi-transparan
        'custom-xl-biru': '0px 11 px 30px rgba(0, 0, 139, 1)', // Shadow biru tua lebih terang
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}