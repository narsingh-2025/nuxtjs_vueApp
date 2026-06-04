<template>
  <section id="testimonials" class="section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Testimonials</span>
        <h2>What Our <span class="gradient-text">Clients Say</span></h2>
        <div class="divider"></div>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="testi-card card"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="stars">
            <span v-for="n in 5" :key="n">★</span>
          </div>
          <blockquote>{{ t.quote }}</blockquote>
          <div class="testi-author">
            <div class="author-avatar" :style="{ background: t.color }">
              {{ t.initials }}
            </div>
            <div class="author-info">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}, {{ t.company }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'PixelForge transformed our entire digital presence. The team delivered a stunning platform that increased our conversion rate by 340% in just three months.',
    name: 'Sarah Chen', initials: 'SC', role: 'CEO', company: 'Nova Labs',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)'
  },
  {
    quote: 'Their attention to detail is unmatched. Every interaction, every animation, every pixel — crafted with genuine care for the user experience.',
    name: 'Marcus Adeyemi', initials: 'MA', role: 'Product Director', company: 'Orbit Inc',
    color: 'linear-gradient(135deg,#06b6d4,#7c3aed)'
  },
  {
    quote: 'Working with PixelForge felt like having a world-class product team embedded in our company. Fast, transparent, and incredibly talented.',
    name: 'Priya Sharma', initials: 'PS', role: 'CTO', company: 'Apex Studio',
    color: 'linear-gradient(135deg,#ec4899,#f43f5e)'
  },
  {
    quote: 'The mobile app they built for us has 4.9 stars on both stores and 200k downloads in the first quarter. I couldn\'t be happier with the outcome.',
    name: 'Tom Weller', initials: 'TW', role: 'Founder', company: 'Flux Digital',
    color: 'linear-gradient(135deg,#10b981,#06b6d4)'
  },
  {
    quote: 'PixelForge\'s process is refreshingly collaborative. They challenged us to think bigger and delivered something we could never have imagined on our own.',
    name: 'Aiko Tanaka', initials: 'AT', role: 'VP Marketing', company: 'Zenith AI',
    color: 'linear-gradient(135deg,#f59e0b,#ec4899)'
  },
  {
    quote: 'From discovery to launch in 8 weeks — they hit every deadline without compromising quality. A rare find in the agency world.',
    name: 'David Okonkwo', initials: 'DO', role: 'COO', company: 'Prism Co',
    color: 'linear-gradient(135deg,#6366f1,#7c3aed)'
  },
]
</script>

<style scoped>
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
.testi-card { display: flex; flex-direction: column; gap: 1.25rem; }
.stars { color: #f59e0b; font-size: 1rem; letter-spacing: 2px; }
blockquote {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
  flex: 1;
  font-style: italic;
}
blockquote::before {
  content: '"';
  font-size: 3rem;
  line-height: 0;
  vertical-align: -0.8rem;
  color: var(--primary);
  margin-right: 4px;
  font-style: normal;
}
.testi-author { display: flex; align-items: center; gap: 1rem; }
.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
}
.author-info strong { display: block; font-size: 0.95rem; }
.author-info span { font-size: 0.8rem; color: var(--text-dim); }

@media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .testimonials-grid { grid-template-columns: 1fr; } }
</style>
