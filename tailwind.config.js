/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00BFFF',
        'neon-purple': '#8A2BE2',
        'neon-cyan': '#00FFFF',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 191, 255, 0.5), 0 0 10px rgba(0, 191, 255, 0.5), 0 0 15px rgba(0, 191, 255, 0.5)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.8), 0 0 30px rgba(0, 191, 255, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
};