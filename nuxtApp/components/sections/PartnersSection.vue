<template>
  <section class="partners section-alt">
    <div class="container">
      <p class="partners-label" data-aos="fade-up">Trusted by industry-leading companies</p>
      <div class="marquee-wrap" data-aos="fade-up" data-aos-delay="100">
        <div class="marquee-track">
          <div v-for="(logo, i) in [...logos, ...logos]" :key="i" class="partner-logo">
            <span class="logo-shape" :style="{ background: logo.color }"></span>
            <span class="logo-name">{{ logo.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  { name: 'Acme Corp',    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
  { name: 'Nova Labs',    color: 'linear-gradient(135deg,#06b6d4,#0284c7)' },
  { name: 'Orbit Inc',    color: 'linear-gradient(135deg,#ec4899,#f43f5e)' },
  { name: 'Prism Co',     color: 'linear-gradient(135deg,#10b981,#059669)' },
  { name: 'Apex Studio',  color: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { name: 'Flux Digital', color: 'linear-gradient(135deg,#6366f1,#4f46e5)' },
  { name: 'Zenith AI',    color: 'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
]
</script>

<style scoped>
.partners { padding: 3rem 0; overflow: hidden; }
.partners-label {
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  font-weight: 600;
  margin-bottom: 2rem;
}
.marquee-wrap { overflow: hidden; }
.marquee-track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  animation: marquee 25s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.partner-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: var(--card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  white-space: nowrap;
  transition: var(--transition);
}
.partner-logo:hover { border-color: var(--border); }
.logo-shape {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  flex-shrink: 0;
}
.logo-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-muted);
}
</style>
