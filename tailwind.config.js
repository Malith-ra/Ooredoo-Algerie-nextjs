/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',

        cherry: {
          100: '#ED1C24',
          200: '#D6001C',
        },
        source: {
          fb: '#1877F2',
          google: '#898989',
        },
        // ...
      },
      fontFamily: {
        rubik: 'Rubik',
        NotoSans: 'Noto Sans',
      },
      borderRadius: {
        '4xl': '3rem',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        242: '242px;',
      },
    },
  },
  plugins: [],
};
