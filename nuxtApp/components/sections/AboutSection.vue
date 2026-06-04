<template>
  <section id="about" class="section">
    <div class="container about-inner">
      <div class="about-visual" data-aos="fade-right">
        <div class="img-stack">
          <div class="img-main">
            <div class="img-placeholder">
              <span>📐</span>
              <p>Design Lab</p>
            </div>
          </div>
          <div class="img-secondary">
            <div class="img-placeholder sm">
              <span>💻</span>
            </div>
          </div>
          <div class="exp-badge">
            <strong>12+</strong>
            <span>Years of<br>Excellence</span>
          </div>
        </div>
      </div>

      <div class="about-content" data-aos="fade-left" data-aos-delay="100">
        <span class="section-badge">About PixelForge</span>
        <h2>We Turn Ideas Into<br><span class="gradient-text">Digital Reality</span></h2>
        <p>
          Founded in 2013, PixelForge Studio has grown from a two-person startup into a
          full-service digital agency trusted by 200+ brands worldwide. We believe great
          design is the foundation of every successful product.
        </p>
        <ul class="about-list">
          <li v-for="item in perks" :key="item" data-aos="fade-left" :data-aos-delay="100">
            <span class="check">✓</span>
            {{ item }}
          </li>
        </ul>
        <div class="about-actions">
          <a href="#services" class="btn btn-primary">Explore Services</a>
          <a href="#team" class="btn btn-outline">Meet the Team</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const perks = [
  'Award-winning UI/UX design across 15 industries',
  'Full-stack development with modern frameworks',
  'Agile delivery — ship in weeks, not months',
  'Dedicated support and post-launch maintenance',
  'Transparent pricing with no hidden costs',
]
</script>

<style scoped>
.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.img-stack { position: relative; height: 420px; }
.img-main {
  width: 80%;
  height: 340px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-light);
}
.img-secondary {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%;
  height: 180px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid var(--bg-2);
  box-shadow: var(--shadow);
}
.img-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}
.img-placeholder span { font-size: 3rem; }
.img-placeholder p { font-weight: 600; color: var(--text-muted); font-size: 0.9rem; }
.img-placeholder.sm span { font-size: 2.5rem; }

.exp-badge {
  position: absolute;
  top: 20px;
  right: 0;
  background: var(--gradient);
  color: white;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
}
.exp-badge strong { display: block; font-size: 2rem; font-weight: 900; line-height: 1; }
.exp-badge span { font-size: 0.75rem; font-weight: 500; opacity: 0.9; }

.about-content h2 { margin: 1rem 0 1.25rem; }
.about-content > p { margin-bottom: 2rem; }

.about-list { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2.5rem; }
.about-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}
.check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: var(--success);
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}
.about-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

@media (max-width: 900px) {
  .about-inner { grid-template-columns: 1fr; gap: 3rem; }
  .img-stack { height: 300px; }
}
</style>
