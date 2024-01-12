// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  devtools: { enabled: false },
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
