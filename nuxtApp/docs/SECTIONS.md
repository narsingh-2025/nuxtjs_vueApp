# Sections Reference

All 15 sections that make up the PixelForge Studio landing page, listed in render order.

---

## 1. Hero Section
**File:** `components/sections/HeroSection.vue`  
**ID:** `#home`

### Purpose
Full-viewport opening section. Establishes brand identity and drives clicks to "Start Your Project" and "View Our Work".

### Content
- Animated gradient headline: *"We Build Amazing Digital Experiences"*
- Supporting paragraph copy
- Two CTA buttons: **Start Your Project** → `#contact`, **See Our Work** → `#portfolio`
- Three hero stats: *200+ Projects Done*, *98% Client Satisfaction*, *12+ Years Experience*
- Decorative floating cards (UI/UX, Web Dev, Mobile Apps) with CSS `float` animation
- Animated blob background (CSS keyframe `drift`)
- Scroll indicator with bouncing arrow

### AOS Attributes
| Element | Animation | Delay |
|---|---|---|
| Badge | `fade-down` | 0 ms |
| `<h1>` | `fade-up` | 80 ms |
| `<p>` | `fade-up` | 160 ms |
| CTA buttons | `fade-up` | 240 ms |
| Hero stats | `fade-up` | 320 ms |
| Decorative cards | `zoom-in` | 200 ms |
| Scroll indicator | `fade-up` | 500 ms |

---

## 2. Partners Section
**File:** `components/sections/PartnersSection.vue`

### Purpose
Social proof strip. Shows logos of fictional partner companies to build trust above the fold.

### Content
- "Trusted by industry-leading companies" label
- 7 partner logo cards with coloured icon shapes and names
- Infinite horizontal marquee (CSS `marquee` keyframe, pauses on hover)

### AOS Attributes
| Element | Animation | Delay |
|---|---|---|
| Label | `fade-up` | 0 ms |
| Marquee wrap | `fade-up` | 100 ms |

---

## 3. About Section
**File:** `components/sections/AboutSection.vue`  
**ID:** `#about`

### Purpose
Company backstory and values. Builds credibility and invites visitors to explore services and team.

### Content
- Left column: stacked image layout with "Design Lab" placeholder and a "12+ Years of Excellence" badge
- Right column: section badge, headline, copy paragraph
- 5-item bulleted list of company strengths with green check icons
- Two action buttons: **Explore Services** → `#services`, **Meet the Team** → `#team`

### AOS Attributes
| Element | Animation | Delay |
|---|---|---|
| Image stack | `fade-right` | 0 ms |
| Text content | `fade-left` | 100 ms |
| Each list item | `fade-left` | 100 ms |

---

## 4. Stats Section ⚡ MutationObserver #1
**File:** `components/sections/StatsSection.vue`

### Purpose
Social proof through numbers. Counters animate from zero when the section scrolls into view.

### Content
- 4 stat cards: *240+ Projects Completed*, *180+ Happy Clients*, *32 Awards Won*, *15,840+ Cups of Coffee*
- Each card has icon, animated number, label, and a progress bar
- Live observer status badge with blinking dot

### AOS Attributes
| Element | Animation | Delay |
|---|---|---|
| Section header | `fade-up` | 0 ms |
| Even stat cards | `fade-up` | 0 / 200 ms |
| Odd stat cards | `fade-down` | 100 / 300 ms |

### MutationObserver
Watches the `childList` / `subtree` of each counter `<span>` element. Every time the count animation updates `textContent`, the observer fires and briefly adds the `counter-pulse` CSS class — producing a glow highlight as the numbers tick up. See [OBSERVERS.md](OBSERVERS.md#1-stats-section) for full details.

---

## 5. Features Section
**File:** `components/sections/FeaturesSection.vue`  
**ID:** `#features`

### Purpose
Capability overview. Communicates the breadth of services with quick scannable cards.

### Content
6 feature cards in a 3×2 grid:
1. UI/UX Design
2. Web Development
3. Mobile Apps
4. AI Integration
5. SEO & Analytics
6. Cloud & DevOps

Each card has: coloured icon background, title, description, and skill tags.

### AOS Attributes
All 6 cards use `zoom-in` with staggered delays of `i * 80` ms.

---

## 6. Services Section
**File:** `components/sections/ServicesSection.vue`  
**ID:** `#services`

### Purpose
Detailed service offering. Expands on Features with a process-oriented view and sub-item lists.

### Content
4 service cards in a horizontal grid, each with a unique gradient top border:
1. Brand & Design
2. Web Solutions
3. Mobile Development
4. Digital Marketing

Each card has: icon, title, description, 4-item list, and a **Learn More** CTA button.

### AOS Attributes
All 4 cards use `fade-up` with staggered delays of `i * 100` ms.

---

## 7. How It Works Section
**File:** `components/sections/HowItWorksSection.vue`  
**ID:** `#process`

### Purpose
Demystifies the engagement process. Reduces prospect anxiety by showing clear steps and timeframes.

### Content
4 numbered process steps in a timeline layout with a gradient horizontal connector line:
1. Discovery — *1–2 weeks*
2. Strategy & Design — *2–4 weeks*
3. Development — *4–12 weeks*
4. Launch & Grow — *Ongoing*

### AOS Attributes
All 4 step cards use `fade-up` with staggered delays of `i * 120` ms.

---

## 8. Portfolio Section ⚡ MutationObserver #2
**File:** `components/sections/PortfolioSection.vue`  
**ID:** `#portfolio`

### Purpose
Showcases selected work. Filter tabs allow visitors to narrow by category; "Load More" reveals additional projects.

### Content
- 5 filter tabs: All, Web, Mobile, Branding, AI
- 9 project cards (6 visible initially), each with: gradient cover, emoji, overlay with category + title + "View Case" button
- **Load More** button appends 3 additional cards

### AOS Attributes
All visible cards use `zoom-in` with staggered delays of `(i % 6) * 80` ms.

### MutationObserver
Watches `childList` on the `.portfolio-grid` element. When "Load More" adds new card nodes, the observer fires, calls `AOS.refresh()`, and applies a `newly-added` entrance animation class to each incoming node. See [OBSERVERS.md](OBSERVERS.md#2-portfolio-section) for full details.

---

## 9. Testimonials Section
**File:** `components/sections/TestimonialsSection.vue`  
**ID:** `#testimonials`

### Purpose
Peer validation. Six client quotes covering different business outcomes (conversion, design quality, speed, mobile apps).

### Content
6 testimonial cards in a 3×2 grid, each with: 5-star rating, blockquote, avatar initials, name, role and company.

### AOS Attributes
All 6 cards use `fade-up` with staggered delays of `i * 120` ms.

---

## 10. Team Section
**File:** `components/sections/TeamSection.vue`  
**ID:** `#team`

### Purpose
Humanises the brand. Shows the people behind the work with roles, short bios, and skill tags.

### Content
4 team member cards in a 4-column grid:
- Alex Rivera — Founder & CEO
- James Osei — Head of Design
- Yuki Nakamura — Lead Engineer
- Omar Hassan — Head of Growth

### AOS Attributes
All 4 cards use `flip-left` with staggered delays of `i * 100` ms.

---

## 11. Pricing Section
**File:** `components/sections/PricingSection.vue`  
**ID:** `#pricing`

### Purpose
Converts visitors into leads by making the value proposition and cost clear.

### Content
- Monthly / Annual billing toggle (Annual saves 20%)
- 3 pricing tiers: **Starter** ($29/mo), **Pro** ($79/mo, featured), **Enterprise** ($199/mo)
- Each card has: icon, name, description, animated price, feature checklist, CTA button

### AOS Attributes
All 3 cards use `fade-up` with staggered delays of `i * 100` ms.

---

## 12. FAQ Section ⚡ MutationObserver #3
**File:** `components/sections/FaqSection.vue`  
**ID:** `#faq`

### Purpose
Removes pre-purchase objections. Accordion format keeps the page compact while answering common questions.

### Content
7 accordion items:
1. How long does a typical project take?
2. What is your payment structure?
3. Do you offer post-launch support?
4. Can I see your previous work?
5. Do you work with startups?
6. What technologies do you use?
7. How do you handle revisions and feedback?

### AOS Attributes
All FAQ items use `fade-up` with staggered delays of `i * 60` ms.

### MutationObserver
Watches the `class` attribute of each `.faq-item` element. When the `active` class is toggled (user opens/closes an item), the observer fires, updates the live status badge ("X open items detected"), and briefly applies a glow `box-shadow` to the active item. See [OBSERVERS.md](OBSERVERS.md#3-faq-section) for full details.

---

## 13. Blog Section
**File:** `components/sections/BlogSection.vue`  
**ID:** `#blog`

### Purpose
Demonstrates expertise and improves SEO. Three featured articles with category, date, and read-time metadata.

### Content
3 blog post cards:
1. *The Psychology of Colour in UX* — Design, 7 min read
2. *From 3.2s to 0.8s: Our Core Web Vitals Playbook* — Performance, 12 min read
3. *Integrating AI Copilots Without Breaking Trust* — AI & Dev, 9 min read

### AOS Attributes
All 3 cards use `fade-up` with staggered delays of `i * 120` ms.

---

## 14. Newsletter Section
**File:** `components/sections/NewsletterSection.vue`

### Purpose
Grows a direct email audience. Low-commitment conversion point for visitors not yet ready to hire.

### Content
- Headline: *"Get Weekly Design & Dev Insights"*
- Subscriber count social proof: *"Join 12,000+ designers and developers"*
- Email input + Subscribe button (form shows confirmation message on submit)
- Three reassurance perks: No spam ever, Weekly digest only, Unsubscribe instantly

### AOS Attributes
The inner content block uses `zoom-in`.

---

## 15. Contact Section
**File:** `components/sections/ContactSection.vue`  
**ID:** `#contact`

### Purpose
Primary lead-capture form. Collects name, email, project type, budget, and message.

### Content

**Left — Contact Form:**
- Name + Email (two-column row)
- Subject dropdown (7 options)
- Budget selector (4 range buttons)
- Message textarea
- Send button with submission state

**Right — Info Panel:**
- 4 contact info cards (email, phone, address, social)
- Office hours table (Mon–Fri, Sat, closed Sun)
- Average response time badge with pulsing green dot

### AOS Attributes
| Element | Animation | Delay |
|---|---|---|
| Form | `fade-right` | 0 ms |
| Info panel | `fade-left` | 150 ms |
