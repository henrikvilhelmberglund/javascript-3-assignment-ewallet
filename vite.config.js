import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react(), generouted()],
})
