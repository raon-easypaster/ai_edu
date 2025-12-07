import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai_edu/', // GitHub Pages 저장소 이름
  build: {
    outDir: 'docs', // dist 대신 docs 폴더에 생성
    emptyOutDir: true, // 빌드 시 기존 파일을 지우고 새로 생성
  }
});