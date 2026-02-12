# Ctrl+CV Lab Website Design System

## Overview

This document outlines the design philosophy, visual language, and implementation patterns used in the Ctrl+CV Lab website. The design follows a **"Soft Realism"** aesthetic inspired by Shopify Editions, combining modern glassmorphism with clean, academic professionalism suitable for a research laboratory.

---

## Design Philosophy

### Core Principles

1. **Academic Professionalism**: Clean, trustworthy appearance suitable for a university research lab
2. **Modern Tech Aesthetic**: Contemporary design patterns that reflect the lab's focus on AI and robotics
3. **Soft Realism**: Gentle gradients, subtle shadows, and depth without harsh contrasts
4. **Accessibility First**: High contrast text, clear hierarchy, mobile-responsive
5. **Content-First**: Design serves to highlight research content, not distract from it

### Visual Identity

The design balances:
- **Warmth**: Soft gray backgrounds with warm undertones
- **Authority**: Deep navy/purple gradients for CTAs
- **Clarity**: Generous whitespace and clear typography
- **Motion**: Subtle animations that guide attention without overwhelming

---

## Color System

### Primary Colors

```css
/* Brand Gradient - Used for primary CTAs and accents */
--gradient-primary: linear-gradient(to right, #2563eb, #9333ea);
/* blue-600 to purple-600 */

/* Background Gradient - Hero sections and special areas */
--gradient-hero: linear-gradient(to bottom right, 
  #1a1a2e 0%, 
  #2d1b4e 50%, 
  #3d1e6d 100%
);
```

### Neutral Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#171717` | Primary text, headings |
| `neutral-800` | `#262626` | Body text |
| `neutral-700` | `#404040` | Secondary text |
| `neutral-600` | `#525252` | Muted text, descriptions |
| `neutral-500` | `#737373` | Placeholder, captions |
| `neutral-400` | `#a3a3a3` | Disabled states |

### Background Colors

```css
/* Main Background - Soft gray with subtle gradient */
.softrealism-bg {
  background: radial-gradient(circle at 50% 15%, #f4f4f4 0%, #e7e7e7 55%, #d9d9d9 100%);
}

/* Card Backgrounds */
--bg-card: #ffffff;
--bg-card-hover: rgba(255, 255, 255, 0.95);

/* Section Alternating Backgrounds */
--bg-section: rgba(255, 255, 255, 0.4);  /* Every other section */
```

### Accent Colors

```css
/* Blue Scale */
--blue-50: #eff6ff;   /* Light backgrounds */
--blue-100: #dbeafe;  /* Hover states */
--blue-600: #2563eb;  /* Primary links */
--blue-700: #1d4ed8;  /* Hover links */

/* Purple Scale */
--purple-50: #faf5ff;
--purple-100: #f3e8ff;
--purple-600: #9333ea;
--purple-700: #7c3aed;
```

### Semantic Colors

```css
/* Success/Active */
--success: #22c55e;  /* green-500 - for "recruiting" badges */

/* Highlights */
--highlight-gold: #fef3c7;  /* amber-100 - for featured papers */
--highlight-border: #fcd34d; /* amber-300 */
```

---

## Typography

### Font Family

```css
font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, sans-serif;
```

**Why Pretendard?**
- Optimized for Korean language display
- Modern geometric sans-serif
- Excellent readability at all sizes
- Variable font for performance

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | text-5xl (48px) / md:text-7xl (72px) | bold (700) | tracking-tight | Hero headings |
| H2 | text-4xl / md:text-5xl (48-64px) | bold | - | Page titles |
| H3 | text-3xl / md:text-4xl (30-48px) | bold | - | Section headings |
| H4 | text-2xl (24px) | bold | - | Subsection headings |
| H5 | text-xl (20px) | bold / semibold | - | Card titles |
| Body Large | text-lg (18px) | normal (400) | leading-relaxed (1.625) | Lead paragraphs |
| Body | text-base (16px) | normal | leading-relaxed | Main content |
| Small | text-sm (14px) | medium (500) | - | Labels, meta |
| Caption | text-xs (12px) | medium | - | Fine print |

### Typography Patterns

```css
/* Section Label - Small uppercase label above headings */
.label {
  @apply text-sm font-semibold text-blue-600 uppercase tracking-wider;
}

/* Stats Number - Large display numbers */
.stat-number {
  @apply text-3xl md:text-4xl font-bold text-neutral-900;
}

/* Card Title */
.card-title {
  @apply text-xl font-bold text-neutral-900;
}

/* Muted Text */
.muted {
  @apply text-neutral-600;
}
```

---

## Layout System

### Container

```css
/* Standard Container */
.container {
  @apply max-w-6xl mx-auto px-6;
}

/* Wide Container (for hero sections) */
.container-wide {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Narrow Container (for text-heavy content) */
.container-narrow {
  @apply max-w-4xl mx-auto px-6;
}
```

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `section-py` | py-24 (96px) | Major sections |
| `section-pt` | pt-32 (128px) | First section (account for fixed header) |
| `content-gap` | gap-12 (48px) | Between major content blocks |
| `card-gap` | gap-6 (24px) | Between cards |
| `element-gap` | gap-4 (16px) | Between related elements |

### Grid System

```css
/* 4-column Stats Grid */
.stats-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-6;
}

/* 2-column Content Grid */
.content-grid {
  @apply grid md:grid-cols-2 gap-12;
}

/* Card Grid */
.card-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6;
}
```

---

## Components

### Cards

#### Standard Card
```css
.card {
  @apply p-6 rounded-2xl bg-white border border-black/5 shadow-lg 
         hover:shadow-2xl transition-all duration-300 hover:-translate-y-1;
}
```

#### Feature Card (with icon)
```css
.feature-card {
  @apply group p-8 rounded-2xl bg-white border border-black/5 shadow-lg 
         hover:shadow-2xl transition-all duration-300 hover:-translate-y-1;
}

.feature-card-icon {
  @apply text-4xl mb-4;
}

.feature-card-title {
  @apply text-xl font-bold text-neutral-900 mb-2 
         group-hover:text-blue-600 transition-colors;
}
```

#### Profile Card
```css
.profile-card {
  @apply p-6 rounded-2xl bg-white border border-black/5 shadow-lg text-center;
}
```

### Buttons

#### Primary Button
```css
.btn-primary {
  @apply px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold 
         shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300;
}
```

#### Secondary Button
```css
.btn-secondary {
  @apply px-8 py-4 rounded-full bg-white text-neutral-900 font-semibold 
         border border-black/10 shadow-lg hover:shadow-xl hover:scale-105 
         transition-all duration-300;
}
```

#### Gradient CTA Button
```css
.btn-gradient {
  @apply px-8 py-4 rounded-full bg-white text-blue-600 font-semibold 
         shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300;
}
```

#### Ghost Button
```css
.btn-ghost {
  @apply px-8 py-4 rounded-full bg-white/20 text-white font-semibold 
         border border-white/30 hover:bg-white/30 transition-all duration-300;
}
```

### Navigation

#### Header
```css
.header {
  @apply fixed top-0 left-0 right-0 z-50;
}

.header-inner {
  @apply bg-white/80 backdrop-blur-xl border-b border-black/5 
         shadow-[0_10px_30px_rgba(0,0,0,0.08)];
}
```

#### Nav Links
```css
.nav-link {
  @apply px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200;
}

.nav-link-active {
  @apply bg-neutral-900 text-white;
}

.nav-link-inactive {
  @apply text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900;
}
```

### Tags/Badges

#### Research Topic Tag
```css
.tag-topic {
  @apply px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm 
         font-medium border border-blue-100;
}
```

#### Application Tag
```css
.tag-app {
  @apply px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm 
         font-medium border border-purple-100;
}
```

#### Status Badge
```css
.badge-status {
  @apply px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold;
}
```

### Sections

#### Hero Section
```css
.hero {
  @apply relative min-h-screen flex items-center justify-center pt-16 overflow-hidden;
}

.hero-vignette {
  @apply absolute inset-0 softrealism-vignette;
}

.hero-content {
  @apply relative z-10 max-w-6xl mx-auto px-6 text-center;
}
```

#### Content Section (alternating)
```css
.section {
  @apply py-24 px-6;
}

.section-alt {
  @apply py-24 px-6 bg-white/40;
}
```

#### CTA Section
```css
.cta-section {
  @apply relative overflow-hidden rounded-3xl bg-gradient-to-br 
         from-blue-600 to-purple-700 p-12 text-center text-white;
}
```

---

## Animation System

### Framer Motion Variants

#### Fade In Up
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};
```

#### Stagger Container
```typescript
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

#### Scale In
```typescript
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};
```

### Hover Animations

```css
/* Card lift on hover */
.hover-lift {
  @apply hover:-translate-y-1 transition-transform duration-300;
}

/* Shadow enhancement */
.hover-shadow {
  @apply hover:shadow-2xl transition-shadow duration-300;
}

/* Scale on hover */
.hover-scale {
  @apply hover:scale-105 transition-transform duration-300;
}
```

### Scroll Animations

Use Framer Motion's `whileInView` for scroll-triggered animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

---

## Special Effects

### Soft Realism Background

```css
.softrealism-bg {
  background: radial-gradient(circle at 50% 15%, #f4f4f4 0%, #e7e7e7 55%, #d9d9d9 100%);
}

.softrealism-vignette {
  background: radial-gradient(circle at 50% 10%, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(240, 240, 240, 0.4) 40%, 
    rgba(210, 210, 210, 0.2) 70%, 
    rgba(190, 190, 190, 0.1) 100%
  );
}
```

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
```

### Gradient Text

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}
```

### Decorative Blurs

```css
/* Add to CTA sections for visual interest */
.decoration-blur {
  @apply absolute w-64 h-64 bg-white/10 rounded-full blur-3xl;
}
```

---

## Page Templates

### Standard Page Structure

```tsx
export default function PageName() {
  return (
    <div className="min-h-screen softrealism-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              Page Label
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Page Title
            </h2>
            <p className="text-xl text-neutral-600">Page description</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Content here */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
```

### Footer Template

```tsx
<footer className="py-12 px-6 border-t border-black/10">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl 
                        bg-gradient-to-br from-blue-600 to-purple-600 text-white 
                        font-bold text-lg">
          CV
        </div>
        <div>
          <h3 className="font-bold text-neutral-900">Ctrl+CV Lab</h3>
          <p className="text-sm text-neutral-500">Control & Computer Vision Laboratory</p>
        </div>
      </div>
      
      <div className="text-center md:text-right text-sm text-neutral-500">
        <p>Department of Smart ICT Convergence Engineering</p>
        <p>Seoul National University of Science & Technology</p>
      </div>
    </div>
    
    <div className="mt-8 pt-8 border-t border-black/10 text-center text-sm text-neutral-400">
      <p>&copy; {new Date().getFullYear()} Ctrl+CV Lab. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Responsive Breakpoints

| Breakpoint | Tailwind Prefix | Usage |
|------------|-----------------|-------|
| Mobile | default | < 640px |
| Tablet | `sm:` | ≥ 640px |
| Desktop | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |
| XL | `xl:` | ≥ 1280px |

### Responsive Patterns

```css
/* Grid columns */
@apply grid-cols-1 md:grid-cols-2 lg:grid-cols-4;

/* Font sizes */
@apply text-3xl md:text-4xl lg:text-5xl;

/* Padding */
@apply px-4 md:px-6 lg:px-8;

/* Show/hide */
@apply hidden md:block;  /* Hide on mobile, show on desktop */
@apply block md:hidden;  /* Show on mobile, hide on desktop */
```

---

## Content Patterns

### Publication List Item

```tsx
<div className="p-5 rounded-xl bg-white border border-black/5 shadow-sm">
  <div className="flex flex-col gap-2">
    <span className="text-sm font-bold text-blue-600">[Number]</span>
    <p className="text-sm text-neutral-600">Authors</p>
    <h4 className="font-bold text-neutral-900">Title</h4>
    <p className="text-sm text-neutral-700 italic">Venue</p>
  </div>
</div>
```

### Team Member Card

```tsx
<div className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg text-center">
  <div className="text-5xl mb-4">👨‍💻</div>
  <h4 className="text-lg font-bold text-neutral-900">Name</h4>
  <p className="text-neutral-600 text-sm">Name (Korean)</p>
  <p className="text-sm text-blue-600 font-medium">Role</p>
  <p className="text-sm text-neutral-500">Research Area</p>
</div>
```

### Timeline/Experience Item

```tsx
<div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
    <div>
      <h4 className="font-bold text-neutral-900">Position</h4>
      <p className="text-neutral-600">Organization</p>
    </div>
    <span className="text-sm text-neutral-500 font-medium">Period</span>
  </div>
</div>
```

---

## Icons & Visual Elements

### Emoji Usage

The design uses emojis as icons for a friendly, accessible feel:

| Emoji | Usage |
|-------|-------|
| 🎓 | Professor/Education |
| 👨‍🏫 | Professor profile |
| 👨‍💻 | Student/Developer |
| 👨‍🔬 | Researcher |
| 🎯 | Research/Control |
| 🧠 | AI/ML |
| 👁️ | Vision |
| 🤖 | Robotics |
| 📍 | Location |
| 📞 | Phone |
| ✉️ | Email |
| 📚 | Education/Lecture |
| 📋 | Notice/Board |

### Icon Placeholders

When photos are unavailable, use gradient placeholders:

```tsx
<div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 
                flex items-center justify-center shadow-lg">
  <div className="text-8xl">👨‍🏫</div>
</div>
```

---

## Best Practices

### Do's

1. **Use consistent spacing** - Stick to the spacing scale
2. **Animate on scroll** - Use `whileInView` for progressive disclosure
3. **Maintain contrast** - Ensure text is readable on all backgrounds
4. **Use semantic HTML** - Proper heading hierarchy, landmarks
5. **Optimize images** - Use Next.js Image component when possible

### Don'ts

1. **Don't use pure black** - Use `neutral-900` instead of `#000`
2. **Don't over-animate** - Keep animations subtle and purposeful
3. **Don't break grid** - Stay within container max-widths
4. **Don't use too many colors** - Stick to the defined palette
5. **Don't forget mobile** - Test all breakpoints

---

## File Organization

```
app/
├── components/
│   └── Header.tsx          # Navigation component
├── page.tsx                # Homepage
├── professor/
│   └── page.tsx           # Professor profile
├── family/
│   └── page.tsx           # Team members
├── research/
│   └── page.tsx           # Research areas
├── publications/
│   └── page.tsx           # Publications list
├── lecture/
│   └── page.tsx           # Courses
├── notice/
│   └── page.tsx           # Announcements
├── layout.tsx             # Root layout
└── globals.css            # Global styles + Tailwind
```

---

## Quick Reference

### Color Classes Quick List

```
Text: text-neutral-900, text-neutral-600, text-blue-600, text-purple-700
Background: bg-white, bg-white/40, bg-blue-50, bg-purple-50
Borders: border-black/5, border-black/10, border-blue-200
```

### Spacing Quick List

```
Sections: py-24, pt-32, pb-16
Components: p-6, p-8
Cards: gap-6, gap-4
Elements: gap-2, gap-3
```

### Shadow Quick List

```
Cards: shadow-lg
Hover: shadow-xl, shadow-2xl
Buttons: shadow-xl hover:shadow-2xl
```

---

## Implementation Checklist

When creating a new page:

- [ ] Use `softrealism-bg` on main container
- [ ] Include Header component
- [ ] Start with pt-32 padding (for fixed header)
- [ ] Use max-w-6xl container
- [ ] Add section label (small uppercase blue text)
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Add Framer Motion animations
- [ ] Include footer
- [ ] Test responsive breakpoints
- [ ] Verify color contrast

---

*This design system was created for Ctrl+CV Lab website.*
*Last updated: February 2026*
