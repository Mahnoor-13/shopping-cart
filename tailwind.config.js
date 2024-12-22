/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            fadeInRight: {
                '0%': { opacity: '0', transform: 'translateX(-20px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
            },
        },
        animation: {
            fadeInUp: 'fadeInUp 1s ease-out',
            fadeInRight: 'fadeInRight 1s ease-out',
        },
    },
},

  plugins: [],
}

