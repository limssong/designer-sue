// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 600, 700],
      'Open+Sans': [300, 400, 500, 600, 700]
    }
  },
  app: {
    baseURL: '/designer-sue/',
    buildAssetsDir: 'assets'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  ssr: false
})
