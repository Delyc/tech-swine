/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-green" : "#66CC99",
        "dark-blue" : "#080D1C"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      

    },
  },
  plugins: [],
}
