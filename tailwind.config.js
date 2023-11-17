/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#2a2a2a",
      },
      width: {
        960: "960px",
      },
      minWidth: {
        960: "960px",
      },
      maxWidth: {
        960: "960px",
      },
      height: {
        80: "80vh",
      },
    },
  },
  plugins: [],
};
