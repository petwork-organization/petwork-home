const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.purple,
        accent: colors.rose,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        gray: colors.blueGray,
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [require('tailwindcss-pixel-dimensions')],
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
};
