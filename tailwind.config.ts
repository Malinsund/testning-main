import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html", // Lägg till HTML-filer
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;