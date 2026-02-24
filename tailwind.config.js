/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#050505", // Deep Black
          card: "#0A0A0A",  // Secondary Black
          gold: "#D4AF37",  // Classic Gold
          "gold-light": "#F4C430", // Hover Gold
          "gold-dark": "#8A7020",  // Border Gold
          gray: "#1c1c1c",
          "gray-light": "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ['"Eurostile"', '"Microgramma"', '"Arial Rounded MT Bold"', 'sans-serif'], // User requested fallbacks
        display: ['"Eurostile Extended"', '"Eurostile"', '"Microgramma"', '"Michroma"', 'sans-serif'], // Primary display font
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
