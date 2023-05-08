import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      // 이 부분에 baseUrl과 paths를 작성합니다.
      baseUrl: './',
      paths: {
        '@/*': ['src/*'],
        '@components/*': ['src/components/*'],
      },
    }),
  ],
});