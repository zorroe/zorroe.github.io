/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/.vitepress/**/*.{js,ts,vue,md,scss,css}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}
