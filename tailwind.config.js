const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.purple,
        accent: colors.rose,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        gray: colors.blueGray,
        white: {
          DEFAULT: '#FFF',
          10: 'rgba(255, 255, 255, .1)',
          20: 'rgba(255, 255, 255, .2)',
          30: 'rgba(255, 255, 255, .3)',
          40: 'rgba(255, 255, 255, .4)',
          50: 'rgba(255, 255, 255, .5)',
          60: 'rgba(255, 255, 255, .6)',
          70: 'rgba(255, 255, 255, .7)',
          80: 'rgba(255, 255, 255, .8)',
          90: 'rgba(255, 255, 255, .9)',
        }
      },
      zIndex: {
        '-10': '-10',
      },
      animation: {
        'slide-down': 'slideDown .3s forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      borderColor: ['active', 'disabled'],
      textColor: ['disabled'],
      borderWidth: ['first', 'last'],
      borderRadius: ['first', 'last'],
    },
  },
  corePlugins: {
    float: false,
  },
  plugins: [require('tailwindcss-pixel-dimensions')],
  purge: {
    content: ['./public/**/*.html', './src/**/*.html', './src/**/*.ts', './src/**/*.vue'],
  },
};
