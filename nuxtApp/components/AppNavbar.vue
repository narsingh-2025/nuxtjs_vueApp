<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container navbar-inner">
      <a href="#home" class="logo">
        <span class="logo-icon">⬡</span>
        <span class="logo-text">Pixel<span class="gradient-text">Forge</span></span>
      </a>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        </li>
      </ul>

      <a href="#contact" class="btn btn-primary btn-sm hide-mobile" @click="menuOpen = false">
        Get In Touch
      </a>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        </li>
        <li>
          <a href="#contact" class="btn btn-primary" style="width:100%;justify-content:center" @click="menuOpen = false">
            Get In Touch
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { href: '#about',     label: 'About' },
  { href: '#features',  label: 'Features' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#pricing',   label: 'Pricing' },
  { href: '#blog',      label: 'Blog' },
]

let onScroll: (() => void) | null = null

onMounted(() => {
  onScroll = () => { isScrolled.value = window.scrollY > 50 }
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.4s ease;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(3, 7, 18, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: var(--border-light);
  padding: 0.85rem 0;
  box-shadow: 0 4px 30px rgba(0,0,0,0.4);
}
.navbar-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}
.logo-icon {
  font-size: 1.6rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}
.nav-links a {
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: var(--transition);
}
.nav-links a:hover {
  color: var(--text);
  background: var(--border-light);
}
.hide-mobile { flex-shrink: 0; }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}
.navbar.menu-open .hamburger span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar.menu-open .hamburger span:nth-child(2) { opacity: 0; }
.navbar.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
.mobile-menu {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
  background: var(--bg-2);
  border-top: 1px solid var(--border-light);
}
.mobile-menu.open { max-height: 400px; }
.mobile-menu ul {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.mobile-menu a {
  display: block;
  padding: 0.6rem 1rem;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  transition: var(--transition);
}
.mobile-menu a:hover { color: var(--text); background: var(--border-light); }

@media (max-width: 768px) {
  .nav-links, .hide-mobile { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
</style>
