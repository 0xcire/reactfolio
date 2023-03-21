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
        '2k': '1600px',
      },
      height: {
        header: '100px',
        footer: '75px',
      },
      // light?: #cfdbd5, #e8eddf, #E7BB41, #242423, #333533
      // TODO: update theme so that:
      // #14213d = primary-dark
      // #241500 secondary-dark; something around here just not #000
      // #fca311 accent unless can curate a better burnt orange to represent 'sun'
      // #e5e5e5 eh
      // #f4f4f4
      // #f0ebd8
      colors: {
        primary: {
          light: '#e8eddf',
          dark: '#14213d',
        },
        secondary: {
          light: '#333533',
          dark: '#6d3a9c',
        },
        text: {
          light: '#242423',
          dark: '#f0ebd8',
        },
        accent: {
          light: '#E7BB41',
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
