/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Urbanist', 'sans-serif'], 
        forum: ['Forum', 'cursive'],
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      }
    },
  },
  plugins: [],
}
