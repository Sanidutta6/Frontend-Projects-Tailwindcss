/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('assets/bg.jpg')"
      },
    },
  },
  plugins: [],
};
