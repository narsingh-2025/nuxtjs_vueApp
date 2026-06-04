<template>
  <section id="blog" class="section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="section-badge">Insights</span>
        <h2>From The <span class="gradient-text">Blog</span></h2>
        <div class="divider"></div>
        <p>Thoughts on design, engineering, and building great products.</p>
      </div>

      <div class="blog-grid">
        <article
          v-for="(post, i) in posts"
          :key="post.title"
          class="blog-card card"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="post-cover" :style="{ background: post.color }">
            <span class="post-emoji">{{ post.emoji }}</span>
            <span class="post-cat">{{ post.category }}</span>
          </div>
          <div class="post-body">
            <div class="post-meta">
              <span class="post-date">{{ post.date }}</span>
              <span class="dot">·</span>
              <span class="post-read">{{ post.read }} min read</span>
            </div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <a href="#" class="read-more">Read article →</a>
          </div>
        </article>
      </div>

      <div class="blog-cta" data-aos="fade-up">
        <a href="#" class="btn btn-outline">View All Posts</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    emoji: '🎨', category: 'Design',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    title: 'The Psychology of Colour in UX — How Hues Drive Decisions',
    excerpt: 'Colour is one of the most powerful tools in a designer\'s arsenal. Here\'s how we use it to guide user behaviour and reduce cognitive load.',
    date: 'May 28, 2026', read: 7
  },
  {
    emoji: '⚡', category: 'Performance',
    color: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
    title: 'From 3.2s to 0.8s: Our Core Web Vitals Playbook',
    excerpt: 'A deep-dive into the techniques we use to achieve sub-second LCP scores without sacrificing visual richness or interactivity.',
    date: 'May 14, 2026', read: 12
  },
  {
    emoji: '🤖', category: 'AI & Dev',
    color: 'linear-gradient(135deg,#ec4899,#f43f5e)',
    title: 'Integrating AI Copilots Into Your Product Without Breaking Trust',
    excerpt: 'LLMs are powerful but unpredictable. We share our framework for shipping AI features responsibly, with real fallback strategies.',
    date: 'Apr 30, 2026', read: 9
  },
]
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}
.blog-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.post-cover {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.post-emoji { font-size: 4rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
.post-cat {
  position: absolute;
  bottom: 12px;
  left: 16px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.post-body { padding: 1.75rem; flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
.post-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-dim);
}
.dot { color: var(--border-light); }
.blog-card h3 { font-size: 1.05rem; line-height: 1.4; }
.blog-card p { font-size: 0.875rem; flex: 1; }
.read-more {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-light);
  transition: gap 0.2s;
  margin-top: auto;
}
.read-more:hover { text-decoration: underline; }
.blog-cta { text-align: center; }

@media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .blog-grid { grid-template-columns: 1fr; } }
</style>
