<template>
  <section id="services" class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Our Services</span>
        <h2>Tailored Solutions for <span class="gradient-text">Every Need</span></h2>
        <div class="divider"></div>
        <p>From concept to launch and beyond — we cover the full spectrum of digital services.</p>
      </div>

      <div class="services-grid">
        <div
          v-for="(svc, i) in services"
          :key="svc.title"
          class="svc-card"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="svc-top" :style="{ background: svc.gradient }"></div>
          <div class="svc-body">
            <div class="svc-icon">{{ svc.icon }}</div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <ul class="svc-list">
              <li v-for="item in svc.items" :key="item">{{ item }}</li>
            </ul>
            <a href="#contact" class="btn btn-ghost btn-sm svc-cta">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '🖌️', title: 'Brand & Design',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    desc: 'We craft visual identities that communicate your brand values at a glance.',
    items: ['Logo & Identity', 'Brand Guidelines', 'Motion Design', 'Print & Digital']
  },
  {
    icon: '🌐', title: 'Web Solutions',
    gradient: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
    desc: 'End-to-end web development from marketing sites to complex SaaS platforms.',
    items: ['Landing Pages', 'E-Commerce', 'SaaS Dashboards', 'API Integrations']
  },
  {
    icon: '📲', title: 'Mobile Development',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    desc: 'Beautiful, performant mobile apps that keep users coming back.',
    items: ['iOS & Android', 'Cross-Platform', 'PWA', 'App Store Optimisation']
  },
  {
    icon: '🎯', title: 'Digital Marketing',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    desc: 'Growth-focused strategies that convert visitors into loyal customers.',
    items: ['SEO/SEM', 'Social Media', 'Email Campaigns', 'Performance Ads']
  },
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;
}
.svc-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}
.svc-card:hover {
  transform: translateY(-6px);
  border-color: var(--border);
  box-shadow: var(--glow);
}
.svc-top { height: 5px; }
.svc-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}
.svc-icon { font-size: 2.2rem; }
.svc-card h3 { font-size: 1.05rem; }
.svc-card p { font-size: 0.875rem; }
.svc-list {
  list-style: none;
  padding: 0;
  margin: 0.25rem 0;
  flex: 1;
}
.svc-list li {
  font-size: 0.85rem;
  color: var(--text-dim);
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.svc-list li::before {
  content: '→';
  color: var(--primary-light);
  font-size: 0.75rem;
}
.svc-cta { margin-top: 1rem; align-self: flex-start; }

@media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr; } }
</style>
