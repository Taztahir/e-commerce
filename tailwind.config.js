/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // ROBOTO FLEX
    fontFamily: {
      'roboto': ["Roboto Flex", 'sans-serif'],
      'poppins': ["Poppins", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-banner-one': "url('./images/banner_one.jpg')",
        'hero-banner-two': "url('./images/banner_2.jpg')",
      },
    },
  },
  plugins: [],
}

