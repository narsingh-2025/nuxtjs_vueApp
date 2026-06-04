// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  // Disable path-prefix so components/sections/HeroSection.vue
  // registers as <HeroSection> not <SectionsHeroSection>
  components: [
    { path: '~/components', pathPrefix: false }
  ]
})
