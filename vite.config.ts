import react from '@vitejs/plugin-react-swc';
import tailwindcss from "tailwindcss";
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    coverage: { "provider": "istanbul"},
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
