// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/ionic", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      short_name: "LedWall",
      name: "LedWall - Free Spirit",
      description: "An app to control the led wall",
      theme_color: '#ff6909',
      background_color: '#ff6909',
      start_url: '/',
      // background_color: '#23a7e4',
      icons: [
        {
          src: "icons/pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: 'icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: "icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{json,ico,svg,ttf,woff,css,scss,js,html,txt,jpg,png,woff2,mjs,otf,ani}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
    client: {
      installPrompt: true,
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ionic: {
    integrations: {
      pwa: false,
    },
    css: {
      //
    },
    config: {
      //
    }
  },
})
