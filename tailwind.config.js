/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wiggle : {
          '0%' : { transform : 'translateY(-10px)', opacity:'0'},
          '100%' : { transform : 'translateY(0)', opacity:'1'},
        }
      }
    },
    screens: {
      'xsm': '350px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2xl-mx': {'max': '1535px'},
      'xl-mx': {'max': '1279px'},
      'lg-mx': {'max': '1024px'},
      'md-mx': {'max': '767px'},
      'sm-mx': {'max': '639px'},
      'xs-mx': {'max': '479px'},
      'xsm-mx':{'max':'352px'}
    }
  },
  plugins: [],
}