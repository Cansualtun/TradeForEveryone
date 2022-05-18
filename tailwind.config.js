module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {   
    inset: {
    '0': 0,
    // ...
   '64': '16rem',
   '1/5': '20%',
  },
        extend: {
          colors: {
          'body': '#101C26',
          'boldDown': '#FFFFFF',
          'Button': '#606060',
          'Box': '#3D1673',
          'Footer': '#6A6D9E'
//Tema Renklerini buraya tanımlamak gerekiyor.
          }
      ,
         fontFamily: {
          'Bilo': ["'Bilo'", 'italic'],
          'Bilo': ["'Bilo'", 'Regular']
        }
      }
    },
    plugins: []
  }