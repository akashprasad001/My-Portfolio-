/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#080a12',
        panel: '#101421',
        line: 'rgba(255,255,255,0.10)',
        violet: '#a78bfa',
        cyan: '#67e8f9',
      },
      boxShadow: {
        glow: '0 0 70px rgba(139,92,246,.20)',
      },
    },
  },
  plugins: [],
}