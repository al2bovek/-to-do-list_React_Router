import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
   base: '/-to-do-list_React_Router//',
  plugins: [react(), tailwindcss()],
});
