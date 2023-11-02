import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-style": "linear-gradient(to top right, #60a5fa, #1d4ed8)",
      },
      keyframes: {
        loadingIcons: {
          "0%": { transform: "translateX(300%)" },
          "25%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(-300%)",
          },
        },
      },
      animation: {
        loadingIcons: "loadingIcons 6s ease infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#eee",
            foreground: "#666",
            primary: {
              DEFAULT: "#222",
              foreground: "#a00",
            },
            secondary: {
              DEFAULT: "#666",
              foreground: "#a00",
            },
            details: {
              low: "#60a5fa",
              medium: "#3b82f6",
              strong: "#1d4ed8",
            },
            error: {
              inputText: "rgba(339% 90% 51%)",
              low: "rgba(339% 92% 95%)",
              medium: "#f44336",
              strong: "#ff0000",
            },
            success: {
              light: "#5cb85c",
              medium: "#18C9C4",
            },
            hover: "#00A55A",
          },
        },
        dark: {
          colors: {
            background: "#000",
            foreground: "#000",
            primary: {
              DEFAULT: "#03a",
              foreground: "#3a0",
            },
            focus: "#30a",
            hover: "#035",
          },
        },
      },
    }),
  ],
};
export default config;
