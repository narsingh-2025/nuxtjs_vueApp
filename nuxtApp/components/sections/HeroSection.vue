<template>
  <section id="home" class="hero">
    <div class="hero-blobs">
      <div class="blob b1"></div>
      <div class="blob b2"></div>
      <div class="blob b3"></div>
    </div>
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="section-badge" data-aos="fade-down">🚀 Next-Gen Digital Agency</span>
        <h1 data-aos="fade-up" data-aos-delay="80">
          We Build<br>
          <span class="gradient-text">Amazing</span> Digital<br>
          Experiences
        </h1>
        <p data-aos="fade-up" data-aos-delay="160">
          PixelForge blends strategy, design, and engineering to create digital products
          that captivate users and drive measurable results for forward-thinking brands.
        </p>
        <div class="hero-cta" data-aos="fade-up" data-aos-delay="240">
          <a href="#contact" class="btn btn-primary btn-lg">Start Your Project</a>
          <a href="#portfolio" class="btn btn-outline btn-lg">See Our Work</a>
        </div>
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="320">
          <div v-for="s in stats" :key="s.label" class="hero-stat">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" data-aos="zoom-in" data-aos-delay="200">
        <div class="vis-card vc1">
          <div class="vc-icon">✦</div>
          <p>UI/UX Design</p>
        </div>
        <div class="vis-card vc2">
          <div class="vc-icon">⬡</div>
          <p>Web Dev</p>
        </div>
        <div class="vis-card vc3">
          <div class="vc-icon">◈</div>
          <p>Mobile Apps</p>
        </div>
        <div class="vis-orb"></div>
        <div class="vis-ring r1"></div>
        <div class="vis-ring r2"></div>
      </div>
    </div>

    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="500">
      <span>Scroll to explore</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '200+', label: 'Projects Done' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '12+',  label: 'Years Experience' },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 5rem;
  position: relative;
  overflow: hidden;
}
.hero-blobs { position: absolute; inset: 0; pointer-events: none; }
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: drift 12s ease-in-out infinite alternate;
}
.b1 { width: 500px; height: 500px; background: var(--primary); top: -100px; left: -100px; }
.b2 { width: 400px; height: 400px; background: var(--secondary); bottom: -80px; right: -80px; animation-delay: -4s; }
.b3 { width: 300px; height: 300px; background: var(--accent); top: 40%; left: 50%; animation-delay: -8s; }

@keyframes drift {
  to { transform: translate(40px, 30px) scale(1.05); }
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-content h1 { margin: 1rem 0 1.5rem; }
.hero-content p { font-size: 1.1rem; max-width: 500px; margin-bottom: 2rem; }
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
.hero-stats {
  display: flex;
  gap: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-light);
}
.hero-stat strong {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-stat span { font-size: 0.85rem; color: var(--text-dim); }

/* Visual element */
.hero-visual {
  position: relative;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-orb {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--gradient);
  opacity: 0.15;
  position: absolute;
}
.vis-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border);
  animation: spin 20s linear infinite;
}
.r1 { width: 360px; height: 360px; }
.r2 { width: 460px; height: 460px; animation-direction: reverse; animation-duration: 30s; }
@keyframes spin { to { transform: rotate(360deg); } }

.vis-card {
  position: absolute;
  background: var(--card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  backdrop-filter: blur(10px);
  text-align: center;
  box-shadow: var(--shadow);
  animation: float 4s ease-in-out infinite;
}
.vc1 { top: 60px; left: 20px; animation-delay: 0s; }
.vc2 { top: 40px; right: 30px; animation-delay: -1.3s; }
.vc3 { bottom: 80px; right: 10px; animation-delay: -2.6s; }
.vc-icon { font-size: 2rem; margin-bottom: 0.4rem; }
.vis-card p { font-size: 0.8rem; font-weight: 600; color: var(--text); margin: 0; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
  font-size: 0.78rem;
  letter-spacing: 0.05em;
}
.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--text-dim);
  border-bottom: 2px solid var(--text-dim);
  transform: rotate(45deg);
  animation: bounce 1.5s ease infinite;
}
@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50%       { transform: rotate(45deg) translateY(6px); }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-content p { margin: 0 auto 2rem; }
  .hero-cta { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { display: none; }
}
</style>
