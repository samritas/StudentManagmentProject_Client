/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#007459",
        secondary: "#ffc300",
        hoverButton: "#E5980E",
        textColor: "#2b2b2b",
        backColor: "#E1E1E1",
        inputColor: "#4B5563",
        bodyColor: "#212428",
        bgBodyColor: "#F8F8F8",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        "text-dicoration": "#E91E63",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      borderRadius: {
        extraLarge: "12rem",
      },
      flex: {
        2: "0 0 100%",
        3: "0 0 33.33%",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(20rem,1fr))",
      },
    },
  },
  plugins: [],
};
