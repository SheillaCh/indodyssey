/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indodysseyTextPrimary: "var(--indodyssey-textPrimary)",
        indodysseyBrown: "var(--indodyssey-brown)",
      },
    },
  },
  plugins: [],
};
