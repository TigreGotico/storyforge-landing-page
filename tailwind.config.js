/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0a0a0a',
        'terminal-green': '#00ff00',
        'terminal-green-dim': '#00cc00',
        'terminal-green-dark': '#008800',
      },
      fontFamily: {
        'terminal': ['VT323', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 3s infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
        },
      },
    },
  },
  plugins: [],
}
