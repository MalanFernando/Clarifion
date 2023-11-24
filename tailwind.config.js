/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: '#4D5254',
      grayOpacity: '#CFCFCF',
      darkBlue: '#252F3D',
      lightBlue: '#2C7EF8',
      green: '#59AE43',
      lightGreen: '#85BF55',
      mint: '#5BB59A',
      red: '#F82C2C',
      yellow: '#FFC000',
      opacityBlue: '#EDF3FD'
    },
    extend: {}
  },
  plugins: []
};










