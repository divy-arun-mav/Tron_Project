/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#f3fbff",
          "200": "#e3f5ff",
        },
        "colors-heading": "#1e0e62",
        lavender: "#dce3ff",
        royalblue: "#516eec",
        deepskyblue: {
          "100": "#57b9f1",
          "200": "#55baf1",
          "300": "#59b7f0",
          "400": "#01b1e9",
        },
        steelblue: "#027ba1",
        gray: "#1f2346",
        black: "#000",
        white: "#fff",
        lightskyblue: "#92c2ff",
        "blue-gray-900": "#151d20",
        "blue-gray-50": "#fbfbfb",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        roboto: "Roboto",
        "text-label": "'DM Sans'",
        "font-awesome": "FontAwesome",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
        "81xl": "100px",
        "lg-7": "18.7px",
        "41xl": "60px",
        "281xl": "300px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "16xl": "35px",
      xl: "20px",
      "11xl": "30px",
      "5xl": "24px",
      "18xl": "37px",
      "42xl": "61px",
      "7xl-9": "26.9px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
