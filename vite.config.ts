import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "little-lemon.thomasscheiber.com",
      "www.little-lemon.thomasscheiber.com",
      "localhost"
    ]
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "little-lemon.thomasscheiber.com",
      "www.little-lemon.thomasscheiber.com",
      "localhost"
    ]
  }
});
