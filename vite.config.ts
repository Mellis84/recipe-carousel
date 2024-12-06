import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({ root: './' })],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
          @use "src/styles/settings/spacing" as *;
          @use "src/styles/settings/colours" as *;
          @use "src/styles/settings/typography" as *;
          @use "src/styles/settings/breakpoints" as *;
        `
      }
    }
  }
});
