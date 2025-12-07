import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai_edu/', // GitHub Pages 저장소 이름에 맞춰 기본 경로 설정
});