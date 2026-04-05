import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF8A65",
          600: "#FF7043",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
        },
        baby: {
          50: "#FCE4EC",
          100: "#F8BBD0",
          200: "#F48FB1",
          300: "#FF80AB",
          400: "#F06292",
          500: "#E91E63",
        },
        toilet: {
          400: "#9575CD",
          500: "#7E57C2",
          600: "#5E35B1",
        },
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', '"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
