module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    extend: {
      colors: {
        lightGrey: "#2f3136",
        myGreen: "#00d1b2",
        myYellow: "#FFA101",
        myTealGreen: "#31525B",
        mycustom: {
          100: "#5436",
          567: "#756",
        },
      },
    },
  },
  plugins: [],
};
