/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    theme: [
      {
        mytheme: {
          primary: "#2c5dff",
         
        },
      }
      
    ]
     
  },
  
  plugins: [require("daisyui")],
}