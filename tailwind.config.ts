import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        indigo: {
          950: "#1a1a2e",
          900: "#2d2d4a",
        },
        violet: {
          950: "#2d1b4e",
          900: "#4a3870",
        },
        purple: {
          950: "#3d1e6d",
          900: "#5a3a8a",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
          "bg-strong": "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(255, 255, 255, 0.15)",
        },
      },
      backgroundImage: {
        "vibelabs-gradient": "linear-gradient(to bottom right, #1a1a2e 0%, #2d1b4e 50%, #3d1e6d 100%)",
      },
      backdropBlur: {
        "glass": "24px",
        "glass-strong": "32px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-down": "fadeInDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-left": "fadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-right": "fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;