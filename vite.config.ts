import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  build: {
    // set up for debug
    minify: false,
    target: 'es2015'
  },
  preview: {
    port: 3030
  },
  plugins: [
    splitVendorChunkPlugin()
  ]
})
