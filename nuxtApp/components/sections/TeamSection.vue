<template>
  <section id="team" class="section section-alt">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">The Team</span>
        <h2>Meet the <span class="gradient-text">Minds Behind</span> the Magic</h2>
        <div class="divider"></div>
        <p>A diverse collective of designers, engineers, and strategists passionate about building the future.</p>
      </div>

      <div class="team-grid">
        <div
          v-for="(member, i) in team"
          :key="member.name"
          class="team-card"
          data-aos="flip-left"
          :data-aos-delay="i * 100"
        >
          <div class="member-avatar" :style="{ background: member.color }">
            <span class="member-emoji">{{ member.emoji }}</span>
            <span class="member-initials">{{ member.initials }}</span>
          </div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <span class="member-role">{{ member.role }}</span>
            <p>{{ member.bio }}</p>
            <div class="member-skills">
              <span v-for="skill in member.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Alex Rivera', initials: 'AR', emoji: '👩‍💻', role: 'Founder & CEO',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    bio: 'Former Google designer with 15 years building products used by millions worldwide.',
    skills: ['Vision', 'Strategy', 'UX']
  },
  {
    name: 'James Osei', initials: 'JO', emoji: '👨‍🎨', role: 'Head of Design',
    color: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
    bio: 'Dribbble Top 50 designer obsessed with motion, detail and pixel-perfect execution.',
    skills: ['Figma', 'Motion', 'Brand']
  },
  {
    name: 'Yuki Nakamura', initials: 'YN', emoji: '👩‍🔬', role: 'Lead Engineer',
    color: 'linear-gradient(135deg,#ec4899,#7c3aed)',
    bio: 'Full-stack architect who has shipped over 50 production applications at scale.',
    skills: ['Vue', 'Node', 'AWS']
  },
  {
    name: 'Omar Hassan', initials: 'OH', emoji: '👨‍💼', role: 'Head of Growth',
    color: 'linear-gradient(135deg,#10b981,#06b6d4)',
    bio: 'Growth expert who helped 3 startups reach Series B through data-driven marketing.',
    skills: ['SEO', 'Ads', 'Analytics']
  },
]
</script>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;
}
.team-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: var(--transition);
  text-align: center;
}
.team-card:hover {
  border-color: var(--border);
  transform: translateY(-6px);
  box-shadow: var(--glow);
}
.member-avatar {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.member-emoji { font-size: 4rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
.member-initials {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: white;
}
.member-info { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
.member-info h3 { font-size: 1rem; }
.member-role {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.member-info p { font-size: 0.825rem; line-height: 1.6; }
.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: center;
  margin-top: 0.5rem;
}
.skill-tag {
  padding: 0.2rem 0.6rem;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--primary-light);
}
@media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .team-grid { grid-template-columns: 1fr; } }
</style>
