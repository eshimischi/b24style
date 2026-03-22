import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		vue(),
		tailwindcss()
	],
})