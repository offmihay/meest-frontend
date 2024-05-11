/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1210px",
      lg: "1024px",
      md: "768px",
      sm: "425px",
      xs: "375px",
    },
    extend: {
      colors: {
        mainblue: "#0054A4",
        textblack: "#303A45",
        green: "#28D3A1",
        lightgrey: "#F3F8FE",
      },
    },
    fontSize: {
      "sm-p": "13px",
      "sm-h": "20px",

      "md-p": "14px",
      "md-h": "25px",

      "lg-p": "16px",
      "lg-h": "38px",
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          padding: "0 1rem",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "@screen xl": {
            maxWidth: "1210px",
          },
          "@screen md": {
            padding: "0 2rem",
          },
        },
      });
    },
  ],
};
