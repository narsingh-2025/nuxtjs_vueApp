<template>
  <section id="process" class="section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Our Process</span>
        <h2>How We <span class="gradient-text">Work</span></h2>
        <div class="divider"></div>
        <p>A transparent, collaborative process designed to deliver exceptional results every time.</p>
      </div>

      <div class="steps-wrap">
        <div class="steps-line"></div>
        <div class="steps-grid">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="step-card"
            data-aos="fade-up"
            :data-aos-delay="i * 120"
          >
            <div class="step-num" :style="{ background: step.color }">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <div class="step-duration">
              <span class="duration-dot"></span>
              {{ step.duration }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: '🔍', title: 'Discovery',
    desc: 'We dive deep into your business goals, target audience, and competitive landscape to set a strong foundation.',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    duration: '1-2 weeks'
  },
  {
    icon: '📐', title: 'Strategy & Design',
    desc: 'Our design team creates wireframes and high-fidelity prototypes, iterating until every detail is perfect.',
    color: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
    duration: '2-4 weeks'
  },
  {
    icon: '⚙️', title: 'Development',
    desc: 'Engineers build your product using best practices, clean code, and thorough testing at every milestone.',
    color: 'linear-gradient(135deg,#ec4899,#7c3aed)',
    duration: '4-12 weeks'
  },
  {
    icon: '🚀', title: 'Launch & Grow',
    desc: 'We deploy your product, monitor performance, and continuously optimise based on real user data.',
    color: 'linear-gradient(135deg,#10b981,#06b6d4)',
    duration: 'Ongoing'
  },
]
</script>

<style scoped>
.steps-wrap { position: relative; }
.steps-line {
  position: absolute;
  top: 40px;
  left: calc(12.5% + 1rem);
  right: calc(12.5% + 1rem);
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0.3;
  pointer-events: none;
}
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}
.step-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.step-card:hover {
  border-color: var(--border);
  transform: translateY(-6px);
  box-shadow: var(--glow);
}
.step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.step-icon { font-size: 2.5rem; }
.step-card h3 { font-size: 1.05rem; }
.step-card p { font-size: 0.875rem; flex: 1; }
.step-duration {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-dim);
  background: var(--border-light);
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
}
.duration-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-light);
}
@media (max-width: 1024px) {
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .steps-line { display: none; }
}
@media (max-width: 640px) {
  .steps-grid { grid-template-columns: 1fr; }
}
</style>
