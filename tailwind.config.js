const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06080d",
          900: "#0a0d14",
          800: "#10141e",
          700: "#171c28",
          600: "#222937",
        },
        accent: {
          200: "#b8f0fb",
          300: "#86e3f7",
          400: "#4fd2f0",
          500: "#1fb8db",
          600: "#1593b3",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', "Inter", ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
