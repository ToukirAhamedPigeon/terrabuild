import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Add custom screens/breakpoints
    screens: {
      'xs': '280px',    // Small mobile devices (iPhone SE, etc.)
      'sm': '640px',    // Mobile landscape / small tablets
      'md': '768px',    // Tablets
      'lg': '1024px',   // Laptops
      'xl': '1280px',   // Desktops
      '2xl': '1536px',  // Large desktops
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a472a",
          light: "#2d6a4f",
          dark: "#0a3d0f",
        },
        secondary: {
          DEFAULT: "#c6a43f",
          light: "#d4af37",
          dark: "#b8962d",
        },
        dark: {
          1: "#0a0a0a",
          2: "#141414",
          3: "#1a1a1a",
          4: "#2a2a2a",
          5: "#3a3a3a",
          6: "#4a4a4a",
          7: "#5a5a5a",
          8: "#6a6a6a",
          9: "#7a7a7a",
        },
        light: {
          1: "#ffffff",
          2: "#f8f8f8",
          3: "#f0f0f0",
          4: "#e0e0e0",
          5: "#d0d0d0",
          6: "#c0c0c0",
          7: "#b0b0b0",
          8: "#a0a0a0",
          9: "#909090",
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-up": "scaleUp 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #c6a43f 0%, #d4af37 50%, #f5e6a3 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a472a 0%, #0a3d0f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;