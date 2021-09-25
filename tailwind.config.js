// tailwind.config.js
module.exports = {
  mode: 'jit',
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
      custom: ['Mullish', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}
