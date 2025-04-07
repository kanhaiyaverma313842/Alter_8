/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat'],
        opensans :['Open Sans']
      },
      
      colors:{
        'neutral-black':'#2D2D2D',
        'neutral-pink':"#FFF0F6"
        
      }
      
    },
  },
  plugins: [],
}
