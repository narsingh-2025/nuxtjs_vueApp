<template>
  <section class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">By The Numbers</span>
        <h2>Results That <span class="gradient-text">Speak</span></h2>
        <div class="divider"></div>
      </div>

      <div class="stats-grid">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat-card card"
          :data-aos="i % 2 === 0 ? 'fade-up' : 'fade-down'"
          :data-aos-delay="i * 100"
        >
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-value-wrap">
            <span ref="counterRefs" class="stat-value">0</span>
            <span class="stat-suffix">{{ stat.suffix }}</span>
          </div>
          <p class="stat-label">{{ stat.label }}</p>
          <div class="stat-bar">
            <div class="stat-bar-fill" :style="{ width: stat.pct + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- MutationObserver target: watches this element for attribute changes -->
      <p class="observer-note" ref="observerTarget">
        <span class="obs-dot"></span> Live counters monitored by MutationObserver
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { icon: '🚀', label: 'Projects Completed', value: 240,  suffix: '+',  pct: 96 },
  { icon: '😊', label: 'Happy Clients',       value: 180,  suffix: '+',  pct: 90 },
  { icon: '⭐', label: 'Awards Won',           value: 32,   suffix: '',   pct: 75 },
  { icon: '☕', label: 'Cups of Coffee',       value: 15840, suffix: '+', pct: 100 },
]

const counterRefs = ref<HTMLElement[]>([])
const observerTarget = ref<HTMLElement | null>(null)
let intersectionObs: IntersectionObserver | null = null
let mutationObs: MutationObserver | null = null
let animated = false

function animateCounter(el: HTMLElement, target: number, duration = 1800) {
  const startTime = performance.now()
  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
    el.textContent = Math.floor(eased * target).toLocaleString()
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = target.toLocaleString()
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // ── MutationObserver ─────────────────────────────────────────────
  // Watch counter elements: when textContent changes (during animation),
  // briefly add the `counter-pulse` CSS class for a glow highlight.
  mutationObs = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      const el = m.target.parentElement as HTMLElement | null
      if (!el) return
      el.classList.remove('counter-pulse')
      void el.offsetWidth // force reflow to restart animation
      el.classList.add('counter-pulse')
      setTimeout(() => el.classList.remove('counter-pulse'), 500)
    })
  })

  nextTick(() => {
    counterRefs.value.forEach((el) => {
      if (el) {
        mutationObs!.observe(el, { characterData: false, childList: true, subtree: true })
      }
    })

    // Also watch the observerTarget element for attribute mutations
    if (observerTarget.value) {
      mutationObs!.observe(observerTarget.value, { attributes: true, attributeFilter: ['data-active'] })
    }
  })

  // ── IntersectionObserver — triggers counter animation once visible ──
  intersectionObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true
          counterRefs.value.forEach((el, i) => {
            if (el) animateCounter(el, stats[i].value, 1800 + i * 200)
          })
          // Trigger a MutationObserver-detected attribute change on observerTarget
          if (observerTarget.value) {
            observerTarget.value.setAttribute('data-active', 'true')
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = counterRefs.value[0]?.closest('section')
  if (section) intersectionObs.observe(section)
})

onUnmounted(() => {
  intersectionObs?.disconnect()
  mutationObs?.disconnect()
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.stat-card { text-align: center; position: relative; overflow: hidden; }
.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient);
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: inherit;
}
.stat-card:hover::before { opacity: 0.05; }

.stat-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.stat-value-wrap {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: 0.5rem;
}
.stat-value {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: var(--transition);
}
.stat-suffix {
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.875rem;
  color: var(--text-dim);
  font-weight: 500;
  margin-bottom: 1.25rem;
}
.stat-bar {
  height: 3px;
  background: var(--border-light);
  border-radius: 2px;
  overflow: hidden;
}
.stat-bar-fill {
  height: 100%;
  background: var(--gradient);
  border-radius: 2px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 0;
}
.stat-card:hover .stat-bar-fill { /* show bar on hover before animation */ }

.observer-note {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.obs-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  animation: blink 1.5s ease-in-out infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

@media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr; } }
</style>
