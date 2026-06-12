import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@mui/material')) return 'mui-core'
          if (id.includes('@mui/icons-material')) return 'mui-icons'
          if (id.includes('recharts') || id.includes('d3-')) return 'charts'
          if (id.includes('dayjs')) return 'dayjs'
          if (id.includes('react-dom') || id.includes('react-router')) return 'react-vendor'
          if (id.includes('framer-motion')) return 'framer'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/icons-material',
      'axios',
      'dayjs',
    ],
  },
})
