/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        "2lg": "1280px",
        "3lg": "1440px",
        "2xl": "1536px",
        "4xl": "2048px",
        "half-tall": { raw: "(min-height: 660px)" },
        tall: { raw: "(min-height: 800px)" },
        taller: { raw: "(min-height: 1080px)" },
      },
      fontSize: {
        "body-sm": "14px",
        "body-md": "16px",
        "body-lg": "18px",
      },
      colors: {
        "primary-dark": "#273746",
        "secondary-dark": "#22303D",
        backGround: "#BFDEEA",
        "backGround-dark": "#778B92",
        "primary-blue": "#007aaa",
        "secondary-blue": "#006B95",
        "primary-red": "#EF4444",
        "secondary-red": "#D13C3C",
        "primary-green": "#22C55E",
        "secondary-green": "#1EAC52",
        "primary-yellow": "#EAB308",
        "secondary-yellow": "#CD9D07",
        "primary-orange": "#D35400",
        "secondary-orange": "#B94E08",
        "primary-enrich": "#34CF96",
        "secondary-enrich": "#2CBF86",
        "primary-purple": "#b0397f",
        "secondary-purple": "#9B3369",
        "primary-enrich-email": "#CA1B22",
        "primary-enrich-tel": "#0EB62F",
        "primary-enrich-end": "#10318A",
        "primary-enrich-completo": "#AA427F",
        "primary-enrich-nomeuf": "#007aaa",
        "primary-enrich-telplus": "#0EB66A",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [
    {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
    require("tailwindcss-animated"),
  ],
};
