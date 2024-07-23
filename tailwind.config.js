/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "var(--textPrimary)",
        textBrown: "var(--textBrown)",
      },
    },
  },
  plugins: [],
};
