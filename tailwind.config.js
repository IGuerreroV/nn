/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Lora: ['Lora', 'serif']
      },
      boxShadow: {
        socialLight: '0 0 2px 0 rgba(0, 0, 0, 0.6), 0 0 10px 0 rgba(255, 255, 255, 0.2)',
        socialDark: '0 0 2px 0 rgba(250, 250, 250, 0.6), 0 0 10px 0 rgba(250, 250, 250, 0.6)'
      }
    }
  },
  plugins: []
}
