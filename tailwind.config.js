/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      conatiner: {
        center: true,
        padding: "15px" 
      },
      colors: {
        accent: "#08E95E"
      },
    },
  },
  plugins: [],
}
