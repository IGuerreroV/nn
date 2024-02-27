/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Lora: ['Lora', 'serif']
      },
      boxShadow: {
        social: '0 0 2px 0 rgba(0, 0, 0, 0.6), 0 0 10px 0 rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
}
