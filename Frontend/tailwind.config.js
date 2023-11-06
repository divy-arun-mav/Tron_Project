/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#fcfcfc",
        "blue-gray-900": "#151d20",
        "blue-gray-50": "#fbfbfb",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        "34xl-3": "53.3px",
        "13xl": "32px",
      },
    },
    fontSize: {
      "4xl-3": "23.3px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
