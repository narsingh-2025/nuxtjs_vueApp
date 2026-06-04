<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Contact Us</span>
        <h2>Let's Build Something <span class="gradient-text">Together</span></h2>
        <div class="divider"></div>
        <p>Tell us about your project and we'll get back to you within one business day.</p>
      </div>

      <div class="contact-inner">
        <div class="contact-form-wrap" data-aos="fade-right">
          <form class="contact-form" @submit.prevent="send">
            <div class="form-row">
              <div class="form-group">
                <label>Your Name</label>
                <input v-model="form.name" type="text" placeholder="Jane Smith" required />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input v-model="form.email" type="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <select v-model="form.subject">
                <option value="">Select a topic...</option>
                <option v-for="opt in subjects" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Budget Range</label>
              <div class="budget-grid">
                <button
                  v-for="b in budgets"
                  :key="b"
                  type="button"
                  class="budget-btn"
                  :class="{ active: form.budget === b }"
                  @click="form.budget = b"
                >{{ b }}</button>
              </div>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="Tell us about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg submit-btn" :disabled="sent">
              {{ sent ? '✓ Message Sent!' : 'Send Message →' }}
            </button>
          </form>
        </div>

        <div class="contact-info" data-aos="fade-left" data-aos-delay="150">
          <div v-for="info in contactInfo" :key="info.label" class="info-card">
            <div class="info-icon" :style="{ background: info.color }">{{ info.icon }}</div>
            <div>
              <strong>{{ info.label }}</strong>
              <p>{{ info.value }}</p>
            </div>
          </div>

          <div class="office-hours">
            <h4>Office Hours</h4>
            <div class="hours-list">
              <div class="hours-row" v-for="h in hours" :key="h.day">
                <span>{{ h.day }}</span>
                <span>{{ h.time }}</span>
              </div>
            </div>
          </div>

          <div class="response-badge">
            <span class="pulse-dot"></span>
            <span>Average response time: <strong>under 4 hours</strong></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: '', email: '', subject: '', budget: '', message: ''
})
const sent = ref(false)

const subjects = [
  'New Website / App', 'Redesign', 'Mobile Development',
  'Branding', 'SEO / Marketing', 'Maintenance', 'Other'
]

const budgets = ['< $5k', '$5k–15k', '$15k–50k', '$50k+']

const contactInfo = [
  { icon: '📧', label: 'Email Us',     value: 'hello@pixelforge.io',    color: 'rgba(124,58,237,0.15)' },
  { icon: '📞', label: 'Call Us',      value: '+1 (555) 000-1234',      color: 'rgba(6,182,212,0.15)'   },
  { icon: '📍', label: 'Visit Us',     value: '123 Design St, New York, NY 10001', color: 'rgba(236,72,153,0.15)' },
  { icon: '🌐', label: 'Follow Us',    value: '@pixelforgestudio',       color: 'rgba(16,185,129,0.15)'  },
]

const hours = [
  { day: 'Monday – Friday', time: '9am – 6pm EST' },
  { day: 'Saturday',        time: '10am – 2pm EST' },
  { day: 'Sunday',          time: 'Closed' },
]

function send() {
  sent.value = true
}
</script>

<style scoped>
.contact-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4rem;
  align-items: start;
}
.contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 0.85rem 1.1rem;
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  resize: vertical;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-dim); }
.form-group select option { background: var(--bg-2); }

.budget-grid { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.budget-btn {
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border-light);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}
.budget-btn:hover, .budget-btn.active {
  background: rgba(124, 58, 237, 0.15);
  border-color: var(--primary);
  color: var(--primary-light);
}

.submit-btn { width: 100%; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

/* Info panel */
.contact-info { display: flex; flex-direction: column; gap: 1.25rem; }
.info-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  transition: var(--transition);
}
.info-card:hover { border-color: var(--border); transform: translateX(4px); }
.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}
.info-card strong { display: block; font-size: 0.875rem; margin-bottom: 0.2rem; }
.info-card p { font-size: 0.875rem; margin: 0; }

.office-hours {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.office-hours h4 { margin-bottom: 1rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); }
.hours-list { display: flex; flex-direction: column; gap: 0.6rem; }
.hours-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--text-muted);
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border-light);
}
.hours-row:last-child { border-bottom: none; padding-bottom: 0; }

.response-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-dim);
  padding: 1rem 1.5rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
}
.response-badge strong { color: var(--success); }
.pulse-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  flex-shrink: 0;
  position: relative;
  animation: ping 1.5s ease-in-out infinite;
}
@keyframes ping {
  0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
  70%  { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
  100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
}

@media (max-width: 1024px) {
  .contact-inner { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
