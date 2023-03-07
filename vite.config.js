/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    rootDir: './src',
    useAtomics: true,
    setupFiles: './src/test/setup.jsx',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    coverage: {
      provider: 'istanbul',
      dir: './coverage',
      reporters: ['lcov', 'text'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
  },
});
