/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces Variable', 'serif']
      },
      keyframes: {
        underline: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.1)' },
        },
      },
      animation: {
        'underline-grow': 'underline 0.3s ease-in-out',
      },
      colors: {
        'ss_soft-red': 'hsl(7, 99%, 70%)',
        'ss_yellow': 'hsl(51, 100%, 49%)',
        'ss_dark-des-cyan': 'hsl(167, 40%, 24%)', //Graphic design text
        'ss_dark-blue': 'hsl(198, 62%, 26%)', //photography text
        'ss_dark-mod-cyan': 'hsl(168, 34%, 41%)', //footer
        'ss_v-dark-des-blue': 'hsl(212, 27%, 19%)',
        'ss_v-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'ss_dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'ss_grayish-blue': 'hsl(210, 4%, 67%)',
        'ss_white': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}