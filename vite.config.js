import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme:{
    extend:{
      colors:{
        primar:"#ffcf3a",
        secondary:"#0063ff"
      },
    },
  },
  container:{
    center:true,
    padding:{
      DEFAULT:"1rem",
      sm:"2rem",
      lg:"4rem",
      xl:"5rem",
      "2xl":"6rem",
    }
  },

  plugins: [react(),
    tailwindcss()
  ],
})
