import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://weather-server-qmrm.onrender.com",
        changeOrigin: true,
      },
    },
  },
  base: "/weather/",

});
