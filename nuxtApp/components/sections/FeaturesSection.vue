<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">What We Offer</span>
        <h2>Everything You Need to <span class="gradient-text">Succeed</span></h2>
        <div class="divider"></div>
        <p>A complete toolkit of capabilities designed to take your digital presence from good to extraordinary.</p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feature-card card"
          data-aos="zoom-in"
          :data-aos-delay="i * 80"
        >
          <div class="feat-icon-wrap" :style="{ background: feat.bg }">
            <span class="feat-icon">{{ feat.icon }}</span>
          </div>
          <h3>{{ feat.title }}</h3>
          <p>{{ feat.desc }}</p>
          <div class="feat-tags">
            <span v-for="tag in feat.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '🎨', title: 'UI/UX Design',
    desc: 'Human-centred interfaces that delight users and improve conversion rates through thoughtful visual hierarchy.',
    bg: 'rgba(124,58,237,0.1)', tags: ['Figma', 'Prototyping', 'Research']
  },
  {
    icon: '⚡', title: 'Web Development',
    desc: 'Lightning-fast web applications built with modern frameworks, optimised for Core Web Vitals.',
    bg: 'rgba(6,182,212,0.1)', tags: ['Nuxt', 'Next.js', 'TypeScript']
  },
  {
    icon: '📱', title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that feel right at home on iOS and Android.',
    bg: 'rgba(236,72,153,0.1)', tags: ['React Native', 'Flutter', 'Swift']
  },
  {
    icon: '🤖', title: 'AI Integration',
    desc: 'Supercharge your product with intelligent features — chatbots, recommendations, and smart automation.',
    bg: 'rgba(16,185,129,0.1)', tags: ['OpenAI', 'Langchain', 'ML']
  },
  {
    icon: '📈', title: 'SEO & Analytics',
    desc: 'Data-driven strategies to increase organic visibility and turn traffic into measurable business outcomes.',
    bg: 'rgba(245,158,11,0.1)', tags: ['GA4', 'Search Console', 'CRO']
  },
  {
    icon: '☁️', title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure, CI/CD pipelines, and zero-downtime deployments for peace of mind.',
    bg: 'rgba(99,102,241,0.1)', tags: ['AWS', 'Vercel', 'Docker']
  },
]
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
.feature-card { display: flex; flex-direction: column; gap: 1rem; }
.feat-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.feat-icon { font-size: 1.6rem; }
.feature-card h3 { font-size: 1.1rem; }
.feature-card p { font-size: 0.9rem; flex: 1; }
.feat-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; }
.tag {
  padding: 0.2rem 0.65rem;
  background: var(--border-light);
  border: 1px solid var(--border-light);
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-dim);
}
@media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .features-grid { grid-template-columns: 1fr; } }
</style>
