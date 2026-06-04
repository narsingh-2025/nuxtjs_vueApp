<template>
  <section id="faq" class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">FAQ</span>
        <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
        <div class="divider"></div>
        <p>Everything you need to know before we start building together.</p>
      </div>

      <div class="faq-wrap">
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq-item"
          ref="faqRefs"
          :class="{ active: openIndex === i }"
          data-aos="fade-up"
          :data-aos-delay="i * 60"
        >
          <button class="faq-question" @click="toggle(i)">
            <span>{{ item.q }}</span>
            <span class="faq-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
          <div class="faq-answer" ref="answerRefs">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>

      <!-- Observer log badge -->
      <div class="observer-log" data-aos="fade-up">
        <span class="obs-dot"></span>
        <span>MutationObserver active — watching {{ mutationLog }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary by scope. A landing page takes 2–4 weeks, a full product 8–16 weeks. After our discovery call, we provide a detailed timeline with milestones and delivery dates.'
  },
  {
    q: 'What is your payment structure?',
    a: 'We typically work with a 40% deposit upfront, 30% at design approval, and 30% on final delivery. For larger engagements, we use monthly retainer billing with clear deliverable milestones.'
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes! All projects include a 30-day bug-fix period at no cost. Ongoing maintenance, feature development, and priority support are available via our monthly retainer packages.'
  },
  {
    q: 'Can I see your previous work before hiring you?',
    a: 'Absolutely. Check out our Portfolio section above, or request a tailored case study deck — we\'ll send you work relevant to your industry and project type within 24 hours.'
  },
  {
    q: 'Do you work with startups or only established companies?',
    a: 'We love working with startups! We offer flexible packages for early-stage teams and have helped dozens of startups go from idea to funded product. Ask us about our MVP-in-a-month package.'
  },
  {
    q: 'What technologies do you use?',
    a: 'Our stack depends on the project. For web: Vue/Nuxt, React/Next.js, TypeScript. Backend: Node.js, Python, Go. Mobile: React Native, Flutter. We always choose the best tool for the job.'
  },
  {
    q: 'How do you handle revisions and feedback?',
    a: 'Each phase includes a dedicated feedback round. We use Figma for design reviews and a shared project board (Notion/Linear) for development. Most clients require 1–2 revision rounds per phase.'
  },
]

const openIndex = ref<number | null>(0)
const faqRefs = ref<HTMLElement[]>([])
const answerRefs = ref<HTMLElement[]>([])
const mutationLog = ref('0 FAQ items')
let mutationObs: MutationObserver | null = null

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

function setHeight(index: number, isOpen: boolean) {
  const el = answerRefs.value[index]
  if (!el) return
  if (isOpen) {
    el.style.maxHeight = el.scrollHeight + 'px'
    el.style.opacity = '1'
  } else {
    el.style.maxHeight = '0'
    el.style.opacity = '0'
  }
}

watch(openIndex, (newVal, oldVal) => {
  if (oldVal !== null) setHeight(oldVal, false)
  if (newVal !== null) setHeight(newVal, true)
})

onMounted(() => {
  // Initialise first item open
  nextTick(() => {
    if (openIndex.value !== null) setHeight(openIndex.value, true)

    // ── MutationObserver ─────────────────────────────────────────────
    // Watches each FAQ item's class list. When the 'active' class is
    // toggled, updates the log message and adds a highlight glow.
    mutationObs = new MutationObserver((mutations) => {
      const activeCount = faqRefs.value.filter(el => el?.classList.contains('active')).length
      mutationLog.value = `${activeCount} open item${activeCount !== 1 ? 's' : ''} detected`

      mutations.forEach((m) => {
        const el = m.target as HTMLElement
        if (el.classList.contains('active')) {
          el.style.boxShadow = 'var(--glow)'
          setTimeout(() => { el.style.boxShadow = '' }, 600)
        }
      })
    })

    faqRefs.value.forEach((el) => {
      if (el) mutationObs!.observe(el, { attributes: true, attributeFilter: ['class'] })
    })
  })
})

onUnmounted(() => mutationObs?.disconnect())
</script>

<style scoped>
.faq-wrap {
  max-width: 780px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.faq-item {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.faq-item.active { border-color: var(--border); }
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 1.75rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color 0.3s;
}
.faq-question:hover { color: var(--primary-light); }
.faq-icon {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s;
}
.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: var(--primary-light);
}
.faq-answer {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
}
.faq-answer p {
  padding: 0 1.75rem 1.5rem;
  font-size: 0.925rem;
  line-height: 1.8;
}
.observer-log {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.obs-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #06b6d4;
  animation: blink 1.5s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
</style>
