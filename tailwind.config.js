/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      animation: {
        'typing-dots': 'typingDots 1.4s infinite both',
      },
      keyframes: {
        typingDots: {
          '0%, 20%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}; 