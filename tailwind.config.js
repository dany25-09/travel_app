/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'dark': '#2ff2e0',
      },
      backgroundImage:{
        'sanFrancisco': "url('./public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('/public/img/yosemite,jpg')",
			  'LA': "url('/public/img/LA.jpg')",
			  'seattle': "url('/public/img/seattle.jpg')",
			  'new_york': "url('/public/img/new_york.jpg')",
			  'norway': "url('/public/img/norway.jpg')",
			  'sydney': "url('/public/img/sydney.jpg')",
			  'miami': "url('/public/img/miami.jpg')",
			  'switzerland': "url('/public/img/switzerland.jpg')",
			  'bali': "url('/public/img/bali.jpg')",
			  'norway': "url('/public/img/norway.jpg')",
			  'chicago': "url('/public/img/chicago.jpg')",
			  'europe': "url('/public/img/europe.jpg')",
			  'iceland': "url('/public/img/iceland.jpg')",
      },
      fontFamily:{
        'Montserrat':['Montserrat', 'sans-serif']
      },
      // overscrollBehavior: {
      //   'contain-x': 'contain',
      // },
      // scrollSnapType: {
      //   'x-proximity': 'x proximity',
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({ addUtilities }) {
      const newUtilities = {
        '.scroll-snap-x-proximity': {
          'scroll-snap-type': 'x proximity',
        },
        '.scroll-snap-align-center': {
          'scroll-snap-align': 'center',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
}

