/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        'light-gray': '#f5f5f5',
        'orange': '#ff6b35',
      },
      width: {
        '15': '3.75rem',
        '28': '7rem',
        '75vw' : '75vw',
      },
    },
  },
  plugins: [],
}
