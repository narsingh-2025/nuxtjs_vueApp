<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="logo">
            <span class="logo-icon">⬡</span>
            <span>Pixel<span class="gradient-text">Forge</span></span>
          </a>
          <p>Crafting digital experiences that inspire, engage, and convert. Your vision, our expertise.</p>
          <div class="socials">
            <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" class="social-btn">
              <span v-html="s.icon"></span>
            </a>
          </div>
        </div>
        <div v-for="col in columns" :key="col.title" class="footer-col">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 PixelForge Studio. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: 'Twitter',  href: '#', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { label: 'LinkedIn', href: '#', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' },
  { label: 'GitHub',   href: '#', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
  { label: 'Dribbble', href: '#', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386z"/></svg>' },
]

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design',       href: '#services' },
      { label: 'Development',      href: '#services' },
      { label: 'Mobile Apps',      href: '#services' },
      { label: 'SEO & Analytics',  href: '#services' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',    href: '#about' },
      { label: 'Our Team',    href: '#team' },
      { label: 'Portfolio',   href: '#portfolio' },
      { label: 'Blog',        href: '#blog' },
    ]
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@pixelforge.io',    href: '#' },
      { label: '+1 (555) 000-1234',      href: '#' },
      { label: '123 Design Street, NY',  href: '#' },
      { label: 'Get a Quote',            href: '#contact' },
    ]
  },
]
</script>

<style scoped>
.footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border-light);
  padding: 5rem 0 2rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}
.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.logo-icon {
  font-size: 1.6rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.footer-brand p {
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 280px;
  margin-bottom: 1.5rem;
}
.socials { display: flex; gap: 0.75rem; }
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border-light);
  color: var(--text-muted);
  transition: var(--transition);
}
.social-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: var(--glow);
}
.footer-col h4 {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-dim);
  margin-bottom: 1.25rem;
}
.footer-col ul { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-col a {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: var(--transition);
}
.footer-col a:hover { color: var(--primary-light); padding-left: 4px; }
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-light);
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-bottom p { font-size: 0.875rem; }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal a {
  font-size: 0.875rem;
  color: var(--text-dim);
  transition: var(--transition);
}
.footer-legal a:hover { color: var(--primary-light); }
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: 1 / -1; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
