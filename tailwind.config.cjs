/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2k': '1400px',
      },
      height: {
        header: '100px',
        footer: '75px',
      },
      // light?: #cfdbd5, #e8eddf, #E7BB41, #242423, #333533
      colors: {
        primary: {
          light: '',
          dark: '#14213d',
        },
        secondary: {
          light: '',
          dark: '#203258',
        },
        text: {
          light: '#242423',
          dark: '#f0ebd8',
        },
        accent: {
          light: '',
          dark: '#fca311',
        },
        neutral: {
          light: '#cfdbd5',
          dark: '#748cab',
        },
        info: {
          light: '',
          dark: '#2563eb',
        },
        success: {
          light: '',
          dark: '#16a34a',
        },
        warning: {
          light: '',
          dark: '#d97706',
        },
        error: {
          light: '',
          dark: '#aa7d47',
        },
      },
    },
  },
};
