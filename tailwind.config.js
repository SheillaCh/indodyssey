/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "indodyssey-text": {
          primary: "var(--indodyssey-textPrimary)",
          secondary: "var(--indodyssey-textSecondary)",
        },
        indodysseyBrown: "var(--indodyssey-brown)",
      },
    },
  },
  plugins: [],
};
