/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "red":["Red Hat Text"],
      "sans":["sans-serif"]
    },
    screens:{
      'sm': '541px',
      'md': '960px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}

