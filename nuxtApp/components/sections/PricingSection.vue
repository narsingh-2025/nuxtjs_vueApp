<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Pricing</span>
        <h2>Simple, <span class="gradient-text">Transparent</span> Pricing</h2>
        <div class="divider"></div>
        <p>No hidden fees. No surprises. Pick the plan that fits your ambitions.</p>
      </div>

      <div class="billing-toggle" data-aos="fade-up" data-aos-delay="80">
        <span :class="{ active: !annual }">Monthly</span>
        <button class="toggle-btn" @click="annual = !annual" :class="{ on: annual }">
          <span class="toggle-thumb"></span>
        </button>
        <span :class="{ active: annual }">Annual <em>Save 20%</em></span>
      </div>

      <div class="pricing-grid">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="pricing-card"
          :class="{ featured: plan.featured }"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div v-if="plan.featured" class="popular-badge">Most Popular</div>
          <div class="plan-icon">{{ plan.icon }}</div>
          <h3>{{ plan.name }}</h3>
          <p class="plan-desc">{{ plan.desc }}</p>
          <div class="plan-price">
            <span class="currency">$</span>
            <span class="amount">{{ annual ? plan.annualPrice : plan.price }}</span>
            <span class="period">/mo</span>
          </div>
          <ul class="plan-features">
            <li v-for="feat in plan.features" :key="feat.text" :class="{ disabled: !feat.included }">
              <span class="feat-check">{{ feat.included ? '✓' : '×' }}</span>
              {{ feat.text }}
            </li>
          </ul>
          <a href="#contact" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const annual = ref(false)

const plans = [
  {
    icon: '🌱', name: 'Starter', featured: false,
    price: 29, annualPrice: 23,
    desc: 'Perfect for freelancers and small projects getting started.',
    features: [
      { text: '5 pages',                  included: true  },
      { text: 'Basic SEO setup',          included: true  },
      { text: 'Mobile responsive',        included: true  },
      { text: '1 month support',          included: true  },
      { text: 'Custom animations',        included: false },
      { text: 'Priority support',         included: false },
      { text: 'Advanced analytics',       included: false },
    ]
  },
  {
    icon: '⚡', name: 'Pro', featured: true,
    price: 79, annualPrice: 63,
    desc: 'The go-to for growing businesses that want to stand out.',
    features: [
      { text: 'Unlimited pages',          included: true },
      { text: 'Advanced SEO',             included: true },
      { text: 'Mobile responsive',        included: true },
      { text: '6 months support',         included: true },
      { text: 'Custom animations',        included: true },
      { text: 'Priority support',         included: true },
      { text: 'Advanced analytics',       included: false },
    ]
  },
  {
    icon: '🚀', name: 'Enterprise', featured: false,
    price: 199, annualPrice: 159,
    desc: 'Full-service engagement for ambitious brands and startups.',
    features: [
      { text: 'Everything in Pro',        included: true },
      { text: 'Advanced analytics',       included: true },
      { text: 'Dedicated account mgr',    included: true },
      { text: 'SLA guarantee',            included: true },
      { text: 'Custom integrations',      included: true },
      { text: '24/7 support',             included: true },
      { text: 'White-label option',       included: true },
    ]
  },
]
</script>

<style scoped>
.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dim);
}
.billing-toggle span.active { color: var(--text); }
.billing-toggle em {
  font-style: normal;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.8rem;
  margin-left: 4px;
}
.toggle-btn {
  width: 52px;
  height: 28px;
  border-radius: 14px;
  background: var(--border-light);
  border: 1px solid var(--border-light);
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}
.toggle-btn.on { background: var(--gradient); border-color: transparent; }
.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transition: transform 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.toggle-btn.on .toggle-thumb { transform: translateX(24px); }

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}
.pricing-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  transition: var(--transition);
  position: relative;
}
.pricing-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pricing-card.featured {
  border-color: var(--primary);
  background: linear-gradient(145deg, #1a0f3a, #1a1832);
  box-shadow: var(--glow), inset 0 0 60px rgba(124, 58, 237, 0.05);
  transform: scale(1.03);
}
.pricing-card.featured:hover { transform: scale(1.03) translateY(-4px); }
.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 1.25rem;
  border-radius: 100px;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
}
.plan-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.pricing-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
.plan-desc { font-size: 0.875rem; margin-bottom: 1.75rem; }
.plan-price {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 2rem;
}
.currency { font-size: 1.3rem; font-weight: 700; color: var(--text-muted); }
.amount {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.period { font-size: 1rem; color: var(--text-dim); }
.plan-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.plan-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
.plan-features li.disabled { opacity: 0.4; text-decoration: line-through; }
.feat-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
  background: rgba(16, 185, 129, 0.15);
  color: var(--success);
}
.plan-features li.disabled .feat-check {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
.pricing-card .btn { width: 100%; }

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
  .pricing-card.featured { transform: none; }
  .pricing-card.featured:hover { transform: translateY(-4px); }
}
</style>
