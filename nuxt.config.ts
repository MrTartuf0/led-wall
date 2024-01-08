// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/ionic'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ionic: {
    integrations: {
      //
    },
    css: {
      //
    },
    config: {
      //
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
