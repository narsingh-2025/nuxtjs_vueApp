# Styling & Design System

All styles live in `assets/css/main.css` and are globally available. Components use `<style scoped>` only for layout and section-specific rules.

---

## CSS Custom Properties (Variables)

All design tokens are defined as CSS variables on `:root`.

### Colour Palette

```css
:root {
  /* Brand */
  --primary:       #7c3aed;   /* Violet – primary interactive colour */
  --primary-light: #a78bfa;   /* Lighter violet – text links, tags */
  --secondary:     #ec4899;   /* Pink – gradient partner */
  --accent:        #06b6d4;   /* Cyan – accent highlight */
  --success:       #10b981;   /* Green – check marks, status dots */

  /* Backgrounds */
  --bg:            #030712;   /* Page background – deepest dark navy */
  --bg-2:          #0d0d20;   /* Alt section background */
  --bg-3:          #141428;   /* Newsletter / featured backgrounds */
  --card:          #0f0f24;   /* Card fill */
  --card-hover:    #181832;   /* Card fill on hover */

  /* Text */
  --text:          #f1f5f9;   /* Primary text – headings, labels */
  --text-muted:    #94a3b8;   /* Body copy, descriptions */
  --text-dim:      #64748b;   /* De-emphasised text, meta info */

  /* Borders */
  --border:        rgba(124, 58, 237, 0.25);  /* Accent border */
  --border-light:  rgba(255, 255, 255, 0.07); /* Subtle divider */
}
```

### Gradients

```css
:root {
  --gradient:       linear-gradient(135deg, #7c3aed, #ec4899);
  --gradient-blue:  linear-gradient(135deg, #06b6d4, #7c3aed);
  --gradient-text:  linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
  --gradient-card:  linear-gradient(145deg, #0f0f24, #181832);
}
```

### Shadows & Glow

```css
:root {
  --shadow:    0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.6);
  --glow:      0 0 40px rgba(124, 58, 237, 0.25);
  --glow-pink: 0 0 40px rgba(236, 72, 153, 0.2);
}
```

### Border Radius

```css
:root {
  --radius-sm: 6px;
  --radius:    12px;
  --radius-lg: 18px;
  --radius-xl: 28px;
}
```

### Transition

```css
:root {
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Typography

| Selector | Size | Weight | Notes |
|---|---|---|---|
| `h1` | `clamp(2.4rem, 6vw, 5rem)` | 800 | Fluid, letter-spacing `-0.02em` |
| `h2` | `clamp(1.8rem, 4vw, 3rem)` | 700 | Fluid, letter-spacing `-0.01em` |
| `h3` | `clamp(1.15rem, 2.5vw, 1.6rem)` | 600 | Fluid |
| `h4` | `1.1rem` | 600 | — |
| `p` | inherited | 400 | Colour: `--text-muted`, line-height: 1.75 |

**Font:** Inter (Google Fonts), loaded via `@import` in `main.css`, fallback to `system-ui`.

### Gradient Text

```html
<span class="gradient-text">Amazing</span>
```

```css
.gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Layout Utilities

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### Section

```css
.section     { padding: 6rem 0; }
.section-alt { background: var(--bg-2); }   /* Alternating section bg */
```

### Section Header (centred)

```html
<div class="section-header">
  <span class="section-badge">Label</span>
  <h2>Heading <span class="gradient-text">Word</span></h2>
  <div class="divider"></div>
  <p>Optional subtitle paragraph.</p>
</div>
```

```css
.section-header  { text-align: center; margin-bottom: 4rem; }
.section-badge   { padding: 0.3rem 1rem; border-radius: 100px; ... }
.divider         { width: 48px; height: 3px; background: var(--gradient); }
```

### CSS Grid Helpers

```css
.grid-2  { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.75rem; }
.grid-3  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
.grid-4  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.75rem; }
```

Responsive breakpoints:
- `≤ 1024px` → `grid-4` collapses to 2 columns; `grid-3` collapses to 2
- `≤ 640px` → all grids collapse to 1 column; sections reduce to `padding: 4rem 0`

---

## Button Variants

```html
<a class="btn btn-primary">Primary</a>
<a class="btn btn-outline">Outline</a>
<a class="btn btn-ghost">Ghost</a>

<!-- Size modifiers -->
<a class="btn btn-primary btn-lg">Large</a>
<a class="btn btn-outline btn-sm">Small</a>
```

| Class | Background | Border | Use Case |
|---|---|---|---|
| `btn-primary` | `--gradient` | none | Main CTAs |
| `btn-outline` | transparent | `--border-light` | Secondary actions |
| `btn-ghost` | `rgba(primary, 0.08)` | none | Subtle in-card links |
| `btn-lg` | — | — | Hero / newsletter CTAs |
| `btn-sm` | — | — | Card-level actions |

---

## Card Component

```html
<div class="card">...</div>
```

```css
.card {
  background: var(--gradient-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);
}
.card:hover {
  border-color: var(--border);
  transform: translateY(-4px);
  box-shadow: var(--glow);
}
```

---

## Special Animations (Beyond AOS)

### Blob Background (Hero, Newsletter)

```css
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: drift 12s ease-in-out infinite alternate;
}
@keyframes drift {
  to { transform: translate(40px, 30px) scale(1.05); }
}
```

### Floating Cards (Hero)

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
```

### Marquee (Partners)

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### Counter Pulse (MutationObserver trigger, Stats)

```css
@keyframes counterPulse {
  0%   { text-shadow: 0 0 0   rgba(167,139,250, 0); }
  40%  { text-shadow: 0 0 20px rgba(167,139,250, 0.8); }
  100% { text-shadow: 0 0 0   rgba(167,139,250, 0); }
}
.counter-pulse { animation: counterPulse 0.5s ease forwards; }
```

### Ping Dot (Contact response badge)

```css
@keyframes ping {
  0%   { box-shadow: 0 0 0 0   rgba(16,185,129, 0.6); }
  70%  { box-shadow: 0 0 0 8px rgba(16,185,129, 0); }
  100% { box-shadow: 0 0 0 0   rgba(16,185,129, 0); }
}
```

---

## z-index Layers

| Layer | Value | Element |
|---|---|---|
| Background noise | `-1` | `body::before` pseudo-element |
| Normal content | `auto` | All section content |
| Floating decorations | `1` | Hero inner, section decorations |
| Navbar | `1000` | `AppNavbar` |

---

## Scrollbar

```css
::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 3px; }
```

---

## Responsive Strategy

The app uses **fluid typography** (`clamp()`) and **CSS Grid auto-collapse** rather than many explicit breakpoints. Only two breakpoints are needed:

| Breakpoint | Change |
|---|---|
| `≤ 1024px` | 4-column grids → 2, 3-column → 2 |
| `≤ 640px` | All grids → 1 column, sections reduce padding |
| `≤ 900px` | Hero stacks vertically (visual element hidden on mobile) |
| `≤ 768px` | Navbar hamburger menu activates |
