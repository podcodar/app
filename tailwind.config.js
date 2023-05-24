/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        podCyan: "rgb(var(--pod-cyan) / <alpha-value>)",
        podOrange: "rgb(var(--pod-orange) / <alpha-value>)",
        podPink: "rgb(var(--pod-pink) / <alpha-value>)",
        podPurple: "rgb(var(--pod-purple) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
