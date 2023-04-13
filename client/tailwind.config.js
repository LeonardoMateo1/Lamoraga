/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '0.75rem', // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5.625rem', // 90px
    },
    fontFamily: {
      sans: ['Open Sans', 'serif'],
      serif: ['Cormorant Upright','serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        'primary':'#AC1F2D',
        'secondary' : '#0C0C0C',
        'secondary-variant': '#545454',
        'spirit': '#DCCA87',
        'menu': '#0C0B08',
        'border': 'rgba(220, 202, 135, 0.2)',
        "wheat" : '#f5deb3',
        'categories': '#242424',
        "cat-text": '#AAAAAA',
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif']
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}