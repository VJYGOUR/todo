/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("./images/Oval.png")',
        done: 'url("./images/Ovaldone.png")',
      },
      backgroundImage: {
        deskDark: "url(./images/bg-desktop-dark.jpg)",
        deskLight: "url(./images/bg-desktop-light.jpg)",
        mobDark: "url(./images/bg-mobile-dark.jpg)",
        mobLight: "url(./images/bg-mobile-light.jpg)",
      },
    },
  },
  plugins: [],
};
