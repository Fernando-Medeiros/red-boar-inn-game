import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.jsx', '.json'],
        alias: {
            setup: fileURLToPath(new URL('./setup', import.meta.url)),
            assets: fileURLToPath(new URL('./assets', import.meta.url)),
            core: fileURLToPath(new URL('./src/core', import.meta.url)),
            router: fileURLToPath(new URL('./src/router', import.meta.url)),
            comp: fileURLToPath(new URL('./src/components', import.meta.url)),
            composable: fileURLToPath(new URL('./src/composables', import.meta.url)),
            view: fileURLToPath(new URL('./src/views', import.meta.url))
        }
    }
})
