<template>
  <section class="newsletter-section section">
    <div class="newsletter-bg">
      <div class="nl-blob nl-b1"></div>
      <div class="nl-blob nl-b2"></div>
    </div>
    <div class="container">
      <div class="newsletter-inner" data-aos="zoom-in">
        <span class="section-badge">Stay Updated</span>
        <h2>Get Weekly <span class="gradient-text">Design & Dev</span> Insights</h2>
        <p>
          Join 12,000+ designers and developers who receive our curated digest every Tuesday —
          no spam, unsubscribe anytime.
        </p>
        <form class="nl-form" @submit.prevent="subscribe">
          <div class="nl-input-wrap">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              :disabled="submitted"
            />
            <button type="submit" class="btn btn-primary" :disabled="submitted || !email">
              {{ submitted ? '✓ Subscribed!' : 'Subscribe' }}
            </button>
          </div>
          <p v-if="submitted" class="success-msg">
            🎉 Welcome aboard! Check your inbox for a confirmation email.
          </p>
        </form>
        <div class="nl-perks">
          <div v-for="perk in perks" :key="perk" class="nl-perk">
            <span class="perk-check">✓</span> {{ perk }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const submitted = ref(false)

function subscribe() {
  if (!email.value) return
  submitted.value = true
}

const perks = ['No spam ever', 'Weekly digest only', 'Unsubscribe instantly']
</script>

<style scoped>
.newsletter-section {
  position: relative;
  overflow: hidden;
  background: var(--bg-3);
}
.newsletter-bg { position: absolute; inset: 0; pointer-events: none; }
.nl-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}
.nl-b1 { width: 600px; height: 600px; background: var(--primary); top: -200px; left: -100px; }
.nl-b2 { width: 400px; height: 400px; background: var(--secondary); bottom: -100px; right: -100px; }

.newsletter-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}
.newsletter-inner h2 { margin: 1rem 0 1.25rem; }
.newsletter-inner > p { font-size: 1.05rem; margin-bottom: 2.5rem; }

.nl-form { margin-bottom: 2rem; }
.nl-input-wrap {
  display: flex;
  gap: 0.75rem;
  max-width: 520px;
  margin: 0 auto;
}
.nl-input-wrap input {
  flex: 1;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius);
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-light);
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s;
}
.nl-input-wrap input:focus { border-color: var(--primary); }
.nl-input-wrap input::placeholder { color: var(--text-dim); }
.nl-input-wrap input:disabled { opacity: 0.6; }

.success-msg {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--success);
  font-weight: 500;
}

.nl-perks {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.nl-perk {
  font-size: 0.85rem;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.perk-check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: var(--success);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
}

@media (max-width: 560px) {
  .nl-input-wrap { flex-direction: column; }
}
</style>
