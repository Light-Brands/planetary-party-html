import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Planet Party brand colors - organic earth tones with bioluminescent accents
        earth: {
          50: "#f7f6f4",
          100: "#edebe5",
          200: "#dcd7cc",
          300: "#c5bda8",
          400: "#ac9f84",
          500: "#9a8a6b",
          600: "#8d7a5f",
          700: "#75644f",
          800: "#615344",
          900: "#52463b",
          950: "#2c241e",
        },
        forest: {
          50: "#f2f8f4",
          100: "#e0efe3",
          200: "#c3dfc9",
          300: "#97c7a3",
          400: "#66a878",
          500: "#448c5a",
          600: "#327146",
          700: "#2a5a3a",
          800: "#244930",
          900: "#1f3c29",
          950: "#0f2116",
        },
        bioluminescent: {
          teal: "#14b8a6",
          gold: "#f59e0b",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
        // Semantic colors
        primary: {
          DEFAULT: "#327146",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#14b8a6",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f59e0b",
          foreground: "#1f3c29",
        },
        background: {
          DEFAULT: "#f7f6f4",
          dark: "#0f2116",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#1f3c29",
        },
        muted: {
          DEFAULT: "#edebe5",
          foreground: "#75644f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-organic":
          "radial-gradient(ellipse at 30% 20%, var(--tw-gradient-from) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, var(--tw-gradient-to) 0%, transparent 50%)",
        "gradient-mycelial":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23327146' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px var(--glow-color, #14b8a6)" },
          "100%": { boxShadow: "0 0 20px var(--glow-color, #14b8a6)" },
        },
      },
      borderRadius: {
        organic: "30% 70% 70% 30% / 30% 30% 70% 70%",
      },
    },
  },
  plugins: [],
};

export default config;

