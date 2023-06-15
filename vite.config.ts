import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],

    build: {
        assetsDir: 'src',
        copyPublicDir: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.jsx', '.json'],
        alias: {
            core: fileURLToPath(new URL('./src/core', import.meta.url)),
            comp: fileURLToPath(new URL('./src/components', import.meta.url)),
            composable: fileURLToPath(new URL('./src/composables', import.meta.url)),
            router: fileURLToPath(new URL('./src/router', import.meta.url)),
            resources: fileURLToPath(new URL('./resources', import.meta.url)),
            setup: fileURLToPath(new URL('./setup', import.meta.url)),
            view: fileURLToPath(new URL('./src/views', import.meta.url))
        }
    }
})
