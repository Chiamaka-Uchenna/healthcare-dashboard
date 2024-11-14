import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#705AAA",
        secondary: "#CBC8D4",
        teal: "#01F0D0",
        activeStateBg2: "#D8FCF7",
        green: "#0BD984",
        darkNavy: "#072635",
        darkTeal: "#0C3D5D",
        lightBlue: "#084C77",
        blue: "#006AAC",
        brightBlue: "#007BC7",
        grey: "#707070",
        lightGrey: "#F6F7F8",
        midGrey: "#EDEDED",
        black: "#000000",
        darkGrey: "#878787",
        white: "#FFFFFF",
        accent: "#FF6200",
        lightPink: "#C26EB4",
        lightPurple: "#7E6CAB",
        skyBlue: "#E0F3FA",
        lightPeach: "#FFE6E9",
        customPink: "#FFE6F1",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // Custom font family
      },
      fontSize: {
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "30": "30px",
      },
      fontWeight: {
        normal: "normal",
        bold: "bold",
        "800": "800",
      },
      lineHeight: {
        "17": "17px",
        "18": "18px",
        "19": "19px",
        "22": "22px",
        "24": "24px",
        "30": "30px",
        "33": "33px",
        "41": "41px",
      },
      letterSpacing: {
        tighter: "-0.05em", // Custom value for tighter spacing
        normal: "0em", // Default spacing
        wide: "0.05em", // Slightly wide
        wider: "0.1em", // More space
        widest: "0.25em",
        "0": "0px", //no character spacing
      },
      textTransform: {
        titlecase: "titlecase",
      },
    },
  },
  plugins: [],
};
export default config;
