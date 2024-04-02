import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#1B1B1B",
      gray: "#848484",
      astronaut: "#2B2A7E",
      blueViolet: "#4F4DB4",
      jacksonPurple: "#1F2988",
      ebony: "#070913",
      borderLine: "#DEE2E9",
      errorBg: "#ffebee",
      error: "#e57373",
      green: "#30D440"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "clash-bold": ["ClashGrotesk-Bold", "sans-serif"],
        "clash-light": ["ClashGrotesk-Light", "sans-serif"],
        "clash-med": ["ClashGrotesk-Medium", "sans-serif"],
        "clash-reg": ["ClashGrotesk-Regular", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3.4rem",
        "7xl": "4rem",
      },
    },

    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
