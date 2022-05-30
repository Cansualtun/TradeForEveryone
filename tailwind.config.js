module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },  
        extend: {
          colors: {

           "body": '#101C26',
          'boldDown': '#FFFFFF',
          'Button': '#606060',
          'secondBody': '#F2F6FF',
          'Box': '#3D1673',
          'Footer': '#6A6D9E'
          
          },
          
//Tema Renklerini buraya tanımlamak gerekiyor.
          
         fontFamily: {
          'Bilo': ["'Bilo'", 'italic'],
          'Bilo': ["'Bilo'", 'Regular']
        }
      }
    },
    plugins:  [require('@tailwindcss/forms'),]
  }