import AOS from 'aos'

export default defineNuxtPlugin(() => {
  // onNuxtReady fires after full client-side hydration, guaranteeing
  // all data-aos elements are in the DOM before AOS scans them.
  onNuxtReady(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 0
    })
  })

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', () => {
    nextTick(() => AOS.refresh())
  })
})
