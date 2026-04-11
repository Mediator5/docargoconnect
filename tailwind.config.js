/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          deep: '#1E0A4F',
          mid: '#2D0F6B',
          light: '#3D1A8A',
          lighter: '#5A2DB5',
        },
        gold: {
          DEFAULT: '#F5C518',
          dark: '#D4A800',
          light: '#FFD94D',
        },
        green: {
          cargo: '#1A8A3C',
          dark: '#146B2E',
          light: '#22A84A',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E0A4F 0%, #2D0F6B 50%, #1A3A1A 100%)',
        'purple-gradient': 'linear-gradient(135deg, #1E0A4F, #2D0F6B)',
        'gold-gradient': 'linear-gradient(135deg, #F5C518, #FFD94D)',
        'green-gradient': 'linear-gradient(135deg, #1A8A3C, #22A84A)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-gold': 'pulse-gold 2.5s infinite',
      },
    },
  },
  plugins: [],
}
