/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indodysseytextPrimary: "var(--indodyssey-textPrimary)",
        indodysseyBrown: "var(--indodyssey-Brown)",
      },
    },
  },
  plugins: [],
};
