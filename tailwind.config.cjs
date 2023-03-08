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
      // change light theme so i can still have 'white' stars/shooting stars
      // dark?: #0d1321, #1d2d44, #3e5c76, #748cab, #f0ebd8
      // light?: #cfdbd5, #e8eddf, #E7BB41, #242423, #333533
      colors: {
        primary: {
          light: '#e8eddf',
          dark: '#1d2d44',
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
          dark: '#dc2626',
        },
      },
    },
  },
};
