import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#07111f",
        sage: "#f5c542",
        mist: "#c9ced6",
        paper: "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif"]
      },
      boxShadow: {
        glass: "0 30px 110px rgba(0,0,0,.35)"
      },
      borderRadius: {
        xxl: "2rem"
      }
    }
  },
  plugins: []
};

export default config;
