// tailwind.config.js
module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    fontFamily: {
      custom: ['Roboto', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}
