import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai_edu/', // GitHub Pages 저장소 이름과 일치해야 합니다.
  build: {
    outDir: 'docs', // 깃허브 페이지 설정을 쉽게 하기 위해 docs 폴더로 출력
  }
});