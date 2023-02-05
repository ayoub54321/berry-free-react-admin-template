import { defineConfig } from 'vite'
// import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import dsv from '@rollup/plugin-dsv'
import eslint from 'vite-plugin-eslint'
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  // css: {
  //   postcss,
  // },
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [react(), dsv(), jsconfigPaths(), eslint({
    failOnWarning: false,
    failOnError: false,
  })],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
