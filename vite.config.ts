import { defineConfig } from "vite";
import { resolve } from "node:path";
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [Inspect()],
  root: "./",
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contacto: resolve(__dirname, "contacto.html"),
        excurciones: resolve(__dirname, "excurciones.html"),
        reserva: resolve(__dirname, "reserva.html"),
        actividades: resolve(__dirname, "actividades.html")
      },
    },
  },
});
