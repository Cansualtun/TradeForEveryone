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
          'body': '#FFFFFF'
//Tema Renklerini buraya tanımlamak gerekiyor.
          }
      ,
         fontFamily: {
          'Bilo': ["'Bilo'", 'sans-serif']
        }
      }
    },
    plugins: []
  }