/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/bg.svg')",
      }
    },
  },
  plugins: [],
}
