/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    colors: {
      gray: {
        50: '#FCFCFD',
        100: '#FAFAFA',
        200: '#F7F7F8',
        300: '#F1F2F3',
        400: '#EFEFF1',
        500: '#EAEBED',
        600: '#B8BBC2',
        700: '#838995',
        800: '#575C66',
        900: '#2A2D31',
        950: '#151619',
      },
      purple: {
        50: '#F6F3F7',
        100: '#EAE4EC',
        200: '#D6C9D9',
        300: '#C1AEC6',
        400: '#AC93B3',
        500: '#9A7BA3',
        600: '#84638D',
        700: '#6B5072',
        800: '#513D57',
        900: '#382A3C',
        950: '#1C151E',
      },
      blue: {
        50: '#F2F5F8',
        100: '#E2E9EE',
        200: '#C8D6E0',
        300: '#AAC0CF',
        400: '#8DAABE',
        500: '#7396B0',
        600: '#58809C',
        700: '#496A81',
        800: '#304555',
        900: '#18232A',
        950: '#0D1317',
      },
    },
    extend: {},
  },
  plugins: [],
};
