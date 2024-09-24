import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'Personal_Portfolio_Website' with your actual repository name
export default defineConfig({
  base: '/Personal_Portfolio_Website/', // Adjust this line
  plugins: [react()],
});
