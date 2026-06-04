# MutationObserver Implementations

Three `MutationObserver` instances are used across the app, each solving a genuine real-world problem.

---

## What is MutationObserver?

`MutationObserver` is a native browser API that watches for changes to the DOM and fires a callback whenever specified mutations occur. Unlike polling (`setInterval`), it is event-driven and has zero overhead when no mutations happen.

```typescript
const observer = new MutationObserver((mutations: MutationRecord[]) => {
  mutations.forEach(mutation => {
    // React to DOM change
  })
})

observer.observe(targetElement, {
  childList: true,       // Watch for added / removed child nodes
  attributes: true,      // Watch for attribute changes
  characterData: true,   // Watch for text content changes
  subtree: true,         // Also watch all descendants
  attributeFilter: ['class', 'data-active']  // Limit to specific attributes
})

// Always disconnect when the component unmounts
observer.disconnect()
```

---

## 1. Stats Section — Counter Pulse Highlight

**File:** `components/sections/StatsSection.vue`  
**Mutation type:** `childList` + `subtree` on text nodes

### Problem
The counter animation updates a `<span>`'s `textContent` 60 times per second as it counts from 0 to the target value. We want each update to flash a brief glow highlight on the number so users see it "ticking".

### Solution
Attach a `MutationObserver` to each counter `<span>`. Whenever its child text node changes (the animation rewrites `textContent`), the observer fires and toggles the `counter-pulse` CSS class.

### Implementation

```typescript
// StatsSection.vue — onMounted
mutationObs = new MutationObserver((mutations) => {
  mutations.forEach((m) => {
    const el = m.target.parentElement as HTMLElement | null
    if (!el) return

    // Toggle class to restart the CSS animation
    el.classList.remove('counter-pulse')
    void el.offsetWidth           // Force reflow — restarts the animation
    el.classList.add('counter-pulse')
    setTimeout(() => el.classList.remove('counter-pulse'), 500)
  })
})

// Observe each counter span
counterRefs.value.forEach((el) => {
  if (el) {
    mutationObs!.observe(el, {
      childList: true,   // Detects text node replacement
      subtree: true      // Includes the text node inside the span
    })
  }
})
```

### CSS Class

```css
/* assets/css/main.css */
@keyframes counterPulse {
  0%   { text-shadow: 0 0 0   rgba(167,139,250, 0); }
  40%  { text-shadow: 0 0 20px rgba(167,139,250, 0.8); }
  100% { text-shadow: 0 0 0   rgba(167,139,250, 0); }
}
.counter-pulse {
  animation: counterPulse 0.5s ease forwards;
}
```

### Secondary Observer — Attribute Watch
A second target (`observerTarget` ref) watches for the `data-active` attribute being set by the `IntersectionObserver` when the section scrolls into view. This demonstrates `attributeFilter` usage:

```typescript
mutationObs!.observe(observerTarget.value, {
  attributes: true,
  attributeFilter: ['data-active']
})
```

---

## 2. Portfolio Section — Load More Detection

**File:** `components/sections/PortfolioSection.vue`  
**Mutation type:** `childList` on the grid container

### Problem
Clicking "Load More" inserts new portfolio cards into the grid via Vue's reactivity system. AOS does not automatically detect new `[data-aos]` elements added after `AOS.init()`, so newly added cards would appear without animation.

### Solution
Observe the `.portfolio-grid` container for child additions. When new nodes appear, call `AOS.refresh()` and apply a custom `newly-added` entrance animation class to each new card.

### Implementation

```typescript
// PortfolioSection.vue — onMounted
mutationObs = new MutationObserver((mutations) => {
  const hasNewNodes = mutations.some(m => m.addedNodes.length > 0)

  if (hasNewNodes) {
    nextTick(() => {
      // Re-register new [data-aos] elements with AOS
      aosInstance?.refresh()

      // Apply entrance animation class to each new card node
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            node.classList.add('newly-added')
            setTimeout(() => node.classList.remove('newly-added'), 800)
          }
        })
      })
    })
  }
})

if (gridRef.value) {
  mutationObs.observe(gridRef.value, { childList: true })
}
```

### CSS Class

```css
/* PortfolioSection.vue — scoped styles */
.newly-added {
  animation: slideInFade 0.6s ease forwards;
}

@keyframes slideInFade {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to   { opacity: 1; transform: scale(1)   translateY(0); }
}
```

### SSR Safety
`aosInstance` is loaded with a dynamic `import('aos')` inside `onMounted`, keeping the top-level component code SSR-safe (no browser API references at module initialisation time).

```typescript
onMounted(async () => {
  aosInstance = (await import('aos')).default
  // ... observer setup
})
```

---

## 3. FAQ Section — Accordion State Watcher

**File:** `components/sections/FaqSection.vue`  
**Mutation type:** `attributes` (`class`) on each `.faq-item`

### Problem
The FAQ accordion toggles an `active` class on items when a user clicks. The content panel height animation is driven by imperatively setting `maxHeight` in JavaScript. We want a reactive way to respond to class changes without coupling the click handler to the animation logic.

### Solution
Use `MutationObserver` to watch the `class` attribute of each `.faq-item`. When `active` is added or removed, the observer fires and both updates the live status badge and applies a brief glow shadow.

### Implementation

```typescript
// FaqSection.vue — onMounted → nextTick
mutationObs = new MutationObserver((mutations) => {
  // Count open items and update the status badge
  const activeCount = faqRefs.value.filter(
    el => el?.classList.contains('active')
  ).length

  mutationLog.value =
    `${activeCount} open item${activeCount !== 1 ? 's' : ''} detected`

  // Apply glow shadow to the newly opened item
  mutations.forEach((m) => {
    const el = m.target as HTMLElement
    if (el.classList.contains('active')) {
      el.style.boxShadow = 'var(--glow)'
      setTimeout(() => { el.style.boxShadow = '' }, 600)
    }
  })
})

// Observe each FAQ item's class attribute changes only
faqRefs.value.forEach((el) => {
  if (el) {
    mutationObs!.observe(el, {
      attributes: true,
      attributeFilter: ['class']   // Only fire when class changes, not other attrs
    })
  }
})
```

### Live Status Badge
The observer result is displayed in the UI as a small badge below the accordion:

```html
<div class="observer-log">
  <span class="obs-dot"></span>
  <span>MutationObserver active — watching {{ mutationLog }}</span>
</div>
```

`mutationLog` updates in real time as the user opens and closes FAQ items.

---

## Lifecycle & Cleanup

All three observers are properly disconnected in `onUnmounted` to prevent memory leaks:

```typescript
// Pattern used in all three components
let mutationObs: MutationObserver | null = null

onMounted(() => {
  mutationObs = new MutationObserver(...)
  mutationObs.observe(target, options)
})

onUnmounted(() => {
  mutationObs?.disconnect()
})
```

---

## Comparison Table

| Observer | Component | Target | Trigger | Mutation Type | Action Taken |
|---|---|---|---|---|---|
| Counter Pulse | StatsSection | Counter `<span>` elements | Text content changes during animation | `childList` + `subtree` | Flash `counter-pulse` CSS class on parent |
| Load More | PortfolioSection | `.portfolio-grid` container | New card nodes inserted via Vue reactivity | `childList` | Call `AOS.refresh()`, add `newly-added` class |
| Accordion State | FaqSection | Each `.faq-item` div | `active` class toggled on click | `attributes` (class only) | Update status badge, apply glow shadow |
