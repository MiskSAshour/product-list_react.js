import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update the base URL with your repository name
export default defineConfig({
  plugins: [react()],
  base: "/product-list_react.js/", // Replace 'repository-name' with your GitHub repository name
});
