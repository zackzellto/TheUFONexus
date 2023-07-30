module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      textShadow: {
        shadow: "2px 2px #008000",
      },
    },
  },
  variants: {
    extend: {
      textShadow: ["hover"],
      transform: ["responsive", "group-hover", "hover", "focus"],
      transition: ["responsive", "group-hover", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
