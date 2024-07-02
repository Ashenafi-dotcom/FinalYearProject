/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        ashu:'#d946ef',
        rose:{
            100:'#ffe4e6',
            200:'#fecdd3',
            300:'#fda4af',
            400:'#fb7185',
            500:'#f43f5e',
            600:'#e11d48',
            700:'#be123c',
            800:'#9f1239',
            900:'#881337',
            950:'#4c0519'
        },
        pink:{

          50:
'#fdf2f8',
100:'#fce7f3',
200:'#fbcfe8',
300:'#f9a8d4',
400:'#f472b6',
500:'#ec4899',
600:'#db2777',
700:'#be185d',
800:'#9d174d',
900:'#831843',
950:'#500724'
        },

        lome:{
          50:
         ' #f7fee7',
          100:
          '#ecfccb',
          200:
          '#d9f99d',
          300:
          '#bef264',
          400:
          '#a3e635',
          500:
          '#84cc16',
          600:
          '#65a30d',
          700:
          '#4d7c0f',
          800:
          '#3f6212',
          900:
          '#365314',
          950:
          '#1a2e05'

        },

        green:{
          50:
          '#f0fdf4',
          100:
          '#dcfce7',
          200:
          '#bbf7d0',
          300:
          '#86efac',
          400:
          '#4ade80',
          500:
          '#22c55e',
          600:
          '#16a34a',
          700:
          '#15803d',
          800:
          '#166534',
          900:
          '#14532d',
          950:
          '#052e16'


        },
        Emerald:{
          50:
          '#ecfdf5',
          100:
          '#d1fae5',
          200:
          '#a7f3d0',
          300:
          '#6ee7b7',
          400:
          '#34d399',
          500:
          '#10b981',
          600:
          '#059669',
          700:
          '#047857',
          800:
          '#065f46',
          900:
          '#064e3b',
          950:
          '#022c22',
          
        }
      },
    },
  },
  plugins: [],
}
