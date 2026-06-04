<template>
  <section id="portfolio" class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Our Work</span>
        <h2>Selected <span class="gradient-text">Projects</span></h2>
        <div class="divider"></div>
      </div>

      <div class="filter-tabs" data-aos="fade-up" data-aos-delay="80">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeFilter === cat }"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- MutationObserver watches this grid for new child nodes -->
      <div class="portfolio-grid" ref="gridRef">
        <div
          v-for="(item, i) in visibleItems"
          :key="item.id"
          class="portfolio-item"
          :data-aos="'zoom-in'"
          :data-aos-delay="(i % 6) * 80"
        >
          <div class="port-image" :style="{ background: item.color }">
            <span class="port-emoji">{{ item.emoji }}</span>
          </div>
          <div class="port-overlay">
            <span class="port-cat">{{ item.category }}</span>
            <h4>{{ item.title }}</h4>
            <a href="#" class="btn btn-primary btn-sm">View Case</a>
          </div>
        </div>
      </div>

      <div class="load-more-wrap" data-aos="fade-up">
        <button
          v-if="canLoadMore"
          class="btn btn-outline"
          @click="loadMore"
          :disabled="loading"
        >
          {{ loading ? 'Loading...' : 'Load More Projects' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// AOS is initialised globally by plugins/aos.client.ts
// Dynamic import keeps this component SSR-safe
let aosInstance: typeof import('aos').default | null = null

const categories = ['All', 'Web', 'Mobile', 'Branding', 'AI']
const activeFilter = ref('All')
const gridRef = ref<HTMLElement | null>(null)
const loading = ref(false)

const allItems = [
  { id: 1,  title: 'Nova Dashboard',   category: 'Web',      emoji: '📊', color: 'linear-gradient(135deg,#7c3aed,#4f46e5)' },
  { id: 2,  title: 'Orbit Mobile App', category: 'Mobile',   emoji: '🌍', color: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
  { id: 3,  title: 'Prism Rebrand',    category: 'Branding', emoji: '🎨', color: 'linear-gradient(135deg,#ec4899,#f43f5e)' },
  { id: 4,  title: 'AI Copilot',       category: 'AI',       emoji: '🤖', color: 'linear-gradient(135deg,#10b981,#059669)' },
  { id: 5,  title: 'Apex Store',       category: 'Web',      emoji: '🛍️', color: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { id: 6,  title: 'Pulse Health',     category: 'Mobile',   emoji: '❤️', color: 'linear-gradient(135deg,#ef4444,#dc2626)' },
  { id: 7,  title: 'Flux Finance',     category: 'Web',      emoji: '💹', color: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
  { id: 8,  title: 'Zenith Brand',     category: 'Branding', emoji: '✨', color: 'linear-gradient(135deg,#a78bfa,#ec4899)' },
  { id: 9,  title: 'Smart Assistant',  category: 'AI',       emoji: '💡', color: 'linear-gradient(135deg,#38bdf8,#06b6d4)' },
]

const displayCount = ref(6)
const canLoadMore = computed(() => displayCount.value < filteredItems.value.length)

const filteredItems = computed(() =>
  activeFilter.value === 'All'
    ? allItems
    : allItems.filter(i => i.category === activeFilter.value)
)

const visibleItems = computed(() => filteredItems.value.slice(0, displayCount.value))

function loadMore() {
  loading.value = true
  setTimeout(() => {
    displayCount.value += 3
    loading.value = false
    nextTick(() => aosInstance?.refresh())
  }, 600)
}

let mutationObs: MutationObserver | null = null

onMounted(async () => {
  // Load AOS client-side only (SSR-safe)
  aosInstance = (await import('aos')).default

  // ── MutationObserver ─────────────────────────────────────────────
  // Watches the portfolio grid for new project cards added via "Load More".
  // When new child nodes appear, it re-initialises AOS on them.
  mutationObs = new MutationObserver((mutations) => {
    const hasNewNodes = mutations.some(m => m.addedNodes.length > 0)
    if (hasNewNodes) {
      nextTick(() => {
        AOS.refresh()
        // Apply entrance animation class to newly added cards
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
              node.classList.add('newly-added')
              setTimeout(() => node.classList.remove('newly-added'), 800)
            }
          })
        })
      })
    }
  })

  if (gridRef.value) {
    mutationObs.observe(gridRef.value, { childList: true })
  }
})

onUnmounted(() => mutationObs?.disconnect())

// Reset display count when filter changes
watch(activeFilter, () => { displayCount.value = 6 })
</script>

<style scoped>
.filter-tabs {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--card);
  border: 1px solid var(--border-light);
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition);
}
.filter-btn:hover, .filter-btn.active {
  background: var(--gradient);
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.portfolio-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  transition: var(--transition);
}
.portfolio-item:hover { transform: scale(1.02); box-shadow: var(--shadow-lg); }
.port-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.port-emoji { font-size: 4rem; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }
.port-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 7, 18, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  opacity: 0;
  transition: opacity 0.35s ease;
  padding: 1.5rem;
  text-align: center;
}
.portfolio-item:hover .port-overlay { opacity: 1; }
.port-cat {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary-light);
}
.port-overlay h4 { font-size: 1.1rem; }

/* Newly added items (triggered by MutationObserver) */
.newly-added { animation: slideInFade 0.6s ease forwards; }
@keyframes slideInFade {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.load-more-wrap { text-align: center; }

@media (max-width: 900px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px)  { .portfolio-grid { grid-template-columns: 1fr; } }
</style>
