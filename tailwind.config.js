/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      magenta: '#EE00EE',
      black: '#000000',
      white: '#ffffff',
      cyan: '#03FFFF',
      yellow: '#FFA500',
      none: '#101112',
    },
    extend: {},
  },
  plugins: [],
}
