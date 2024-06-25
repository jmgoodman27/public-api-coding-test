// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Hybrid rendering rules: mix SSR, CSR, and SSG depending on route feature and content
  routeRules: {
    // Quote of the day is generated on demand, revalidates in background, cached until API response changes
    '/': { swr: true },
    // About page is prerendered at build time
    '/about': { prerender: true }
  }
})