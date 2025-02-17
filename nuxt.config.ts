import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
		buildModules: [
			'@nuxtjs/tailwindcss',
			'@pinia/nuxt',
		],
		modules: ['@nuxtjs/supabase'],
})
