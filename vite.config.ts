import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
    build: {
        modulePreload: {
            polyfill: false,
        },
    },
    plugins: [viteSingleFile()],
})
