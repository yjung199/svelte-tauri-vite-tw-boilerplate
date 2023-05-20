/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte, js, ts}"],
  theme: {
    extend: {},
  },
  // remove require("daisyui") if you don't want to use daisyUI
  plugins: [require("daisyui")],
};
