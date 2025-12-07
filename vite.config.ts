import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai_edu/', // GitHub Pages 저장소 이름과 일치해야 합니다.
  build: {
    outDir: 'dist',
  }
});