# AOS Animations Reference

This document covers how AOS (Animate On Scroll) is configured, loaded, and used across the PixelForge landing page.

---

## Setup

### 1. CSS — `nuxt.config.ts`

```typescript
css: [
  '~/assets/css/main.css',
  'aos/dist/aos.css'          // Loaded globally via Nuxt's CSS pipeline
]
```

Loading AOS CSS through `nuxt.config.ts` (not inside a component) guarantees it is included in the server-rendered `<head>` and available before the page paints, preventing a flash of unstyled / hidden elements.

### 2. Plugin — `plugins/aos.client.ts`

```typescript
import AOS from 'aos'

export default defineNuxtPlugin(() => {
  // onNuxtReady fires after full client-side hydration.
  // This guarantees every data-aos element is in the DOM before AOS scans them.
  onNuxtReady(() => {
    AOS.init({
      duration: 850,          // Animation duration in ms
      easing: 'ease-in-out-cubic',
      once: false,            // Re-animate when element scrolls back into view
      mirror: true,           // Reverse animation when scrolling back up
      offset: 50              // Start animation 50px before element enters viewport
    })
  })

  // Refresh AOS after each page navigation (single-page app route changes)
  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', () => {
    nextTick(() => AOS.refresh())
  })
})
```

The `.client.ts` suffix tells Nuxt to skip this plugin during SSR — it only runs in the browser.

---

## Global Configuration

| Option | Value | Description |
|---|---|---|
| `duration` | `850` ms | Default animation duration |
| `easing` | `ease-in-out-cubic` | CSS easing function |
| `once` | `false` | Animate every time element enters viewport |
| `mirror` | `true` | Play animation in reverse when scrolling back up |
| `offset` | `50` px | Distance from viewport edge to trigger animation |
| `delay` | `0` | Default delay (overridden per-element) |

---

## Animation Types Used

### Fade Animations

| Attribute | Effect | Used In |
|---|---|---|
| `data-aos="fade-up"` | Slides up + fades in | Most sections |
| `data-aos="fade-down"` | Slides down + fades in | Hero badge, even stat cards |
| `data-aos="fade-left"` | Slides left + fades in | About text, Contact form |
| `data-aos="fade-right"` | Slides right + fades in | About image, Contact info |

### Zoom Animations

| Attribute | Effect | Used In |
|---|---|---|
| `data-aos="zoom-in"` | Scales up from 0.6 + fades in | Hero visual, Features, Portfolio cards |

### Flip Animations

| Attribute | Effect | Used In |
|---|---|---|
| `data-aos="flip-left"` | 3D flip from right to left | Team member cards |

---

## Per-Element Usage

### Basic

```html
<h2 data-aos="fade-up">Our Work</h2>
```

### With Custom Delay

```html
<div data-aos="fade-up" data-aos-delay="200">...</div>
```

### Staggered Grid (v-for)

```html
<div
  v-for="(item, i) in items"
  :key="item.id"
  data-aos="zoom-in"
  :data-aos-delay="i * 80"
>
```

Each card in the grid gets an additional 80 ms delay per position, creating a wave effect as they animate in one-by-one.

### Alternating Direction (Stats Section)

```html
<div
  v-for="(stat, i) in stats"
  :data-aos="i % 2 === 0 ? 'fade-up' : 'fade-down'"
  :data-aos-delay="i * 100"
>
```

Even-index cards come from below, odd-index cards come from above.

---

## AOS and Dynamic Content

When new DOM nodes are added after AOS initialises (e.g., the Portfolio "Load More" button), AOS does not automatically detect them. Two approaches are used:

### `AOS.refresh()` — Portfolio Section
Called inside the `MutationObserver` callback after new portfolio cards are inserted. This rescans the DOM and registers any new `[data-aos]` elements.

```typescript
mutationObs = new MutationObserver((mutations) => {
  const hasNewNodes = mutations.some(m => m.addedNodes.length > 0)
  if (hasNewNodes) {
    nextTick(() => aosInstance?.refresh())
  }
})
```

### Route Changes
The `page:finish` hook in `aos.client.ts` calls `AOS.refresh()` after each Nuxt page navigation so animations are reset correctly on new routes.

---

## CSS Overrides

`assets/css/main.css` adds one AOS-related rule:

```css
/* Prevent AOS elements from blocking clicks before they animate */
[data-aos]           { pointer-events: none; }
[data-aos].aos-animate { pointer-events: auto; }
```

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| All elements invisible on load | AOS CSS not loaded before JS | Ensure `'aos/dist/aos.css'` is in `nuxt.config.ts` `css` array |
| Elements stay hidden | `AOS.init()` called before DOM hydration | Wrap in `onNuxtReady()` |
| New dynamic elements don't animate | AOS not refreshed after DOM update | Call `AOS.refresh()` inside `nextTick()` after inserting elements |
| 500 error with `setting 'N'` | Function ref inside `v-for` triggers reactive flush | Use string ref `ref="myRef"` — Vue auto-collects into array |
