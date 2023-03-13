import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Ver https://stackoverflow.com/a/69007868
import path from 'path'

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(projectRootDir, "src"),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  }
})
