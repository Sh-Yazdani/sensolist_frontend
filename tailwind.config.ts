import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      error: "#DF2040",
      "primary-Shade-1": "#000911",
      "primary-tint-2": "#334759",
      "natural-8": "#343434",
      white: "#ffffff",
      "white-opacity-900": "rgba(255, 255, 255, 0.90)",
      "white-opacity-800": "rgba(255, 255, 255, 0.80)",
      "white-opacity-700": "rgba(255, 255, 255, 0.70)",
      orange: "#E67F3A",
      "bg-success": "#dcf5cf",
      success: "#50CB0E",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
