/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        960: "960px",
      },
      minWidth: {
        960: "960px",
      },
      maxWidth: {
        960: "960px",
      },
    },
  },
  plugins: [],
};
