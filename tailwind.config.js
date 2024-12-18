/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        customLightA: "#BFECFF", // Define your custom color here
        customLightB: "#E4F2FD", // Define your custom color here
        customLightC: "#CDC1FF", // Define your custom color here
        customLightD: "#A294F9", // Define your custom color here
        customblue: "#0A97B0",
        customblue2: "#37AFE1"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins
        playwrite: ['"Playwrite VN Guides"', 'sans-serif'], // Add Playwrite
      },
      boxShadow:{
        'black': '0px 2px 8px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

