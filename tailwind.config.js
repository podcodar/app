/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pod-cyan": "rgb(23,169,188)",
        "pod-orange": "rgb(249, 146,35)",
        "pod-pink": "rgb(255, 76, 255)",
        "pod-purple-light": "rgb(181, 165, 199)",
        "pod-purple": "rgb(93 65 122)",
        "pod-purple-dark": "rgb(54, 38, 71)",
      },
    },
  },
  plugins: [],
};
