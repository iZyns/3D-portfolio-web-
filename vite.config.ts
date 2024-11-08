import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const { terser } = require('rollup-plugin-terser');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        minify: 'terser',
        rollupOptions: {
            plugins: [terser()],
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                }
            }
        }
    }
});
