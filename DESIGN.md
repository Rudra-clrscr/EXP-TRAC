---
name: ExpenseTracker
version: 1.0
summary: >-
  A calm, modern financial dashboard design system built around teal-driven trust,
  warm orange accents for expense energy, and layered white surfaces with soft
  elevation.
colors:
  brand:
    primary: "#0d9488"
    primary-dark: "#0f766e"
    primary-cool: "#0891b2"
    primary-cool-dark: "#0e7490"
    accent: "#f97316"
    accent-dark: "#ea580c"
    success: "#10b981"
    success-strong: "#16a34a"
    success-soft: "#d1fae5"
    warning: "#f59e0b"
    info: "#0ea5e9"
    neutral:
      white: "#ffffff"
      canvas: "#f8fafc"
      surface: "#f3f4f6"
      border: "#e5e7eb"
      border-soft: "#f3f4f6"
      text: "#1f2937"
      text-muted: "#4b5563"
      text-subtle: "#6b7280"
      icon: "#9ca3af"
      placeholder: "#d1d5db"
      overlay: "rgba(255, 255, 255, 0.95)"
      danger: "#ef4444"
      danger-soft: "#fee2e2"
  gradients:
    primary: "linear-gradient(90deg, #0d9488 0%, #0f766e 100%)"
    warm: "linear-gradient(90deg, #f97316 0%, #ea580c 100%)"
    green: "linear-gradient(90deg, #16a34a 0%, #059669 100%)"
    aqua: "linear-gradient(90deg, #0d9488 0%, #0e7490 100%)"
typography:
  font:
    family: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
  size:
    xs: "0.75rem"
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    xxl: "1.5rem"
    xxxl: "2.25rem"
  line-height:
    normal: 1.5
    heading: 1.25
spacing:
  xxs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  xxl: "2rem"
  xxxl: "3rem"
radii:
  none: "0"
  small: "0.25rem"
  base: "0.5rem"
  medium: "0.75rem"
  large: "1rem"
  extra-large: "1.5rem"
  pill: "9999px"
elevation:
  level-1: "0 1px 2px rgba(15, 23, 42, 0.05)"
  level-2: "0 4px 6px rgba(15, 23, 42, 0.05)"
  level-3: "0 10px 15px rgba(15, 23, 42, 0.08)"
  level-4: "0 20px 25px rgba(15, 23, 42, 0.1)"
  ring: "0 0 0 2px rgba(16, 185, 129, 0.2)"
motion:
  duration:
    shortest: "100ms"
    short: "150ms"
    normal: "200ms"
    medium: "300ms"
  easing:
    standard: "cubic-bezier(0.4, 0, 0.2, 1)"
    gentle: "ease"
    spring: "cubic-bezier(0.22, 1, 0.36, 1)"
  animation:
    spin: "spin 1s linear infinite"
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
---

## Design intent

ExpenseTracker is designed as a calm, trust-worthy dashboard with a fresh financial tone.
The system balances cool teal and cyan anchors with warm orange accents to create clarity between stable income/summary states and expense/redirection states.

### Visual personality

- Clean, light surfaces: white cards sit above a very soft off-white canvas.
- Soft, rounded geometry: rounded-lg and rounded-xl corners give cards and controls a friendly, approachable feel.
- Subtle layering: low-contrast gray borders and gentle shadows keep the interface airy and polished without heavy depth.
- High-contrast text hierarchy: strong dark gray headlines and medium gray body copy support fast scanning across charts, lists, and forms.

### Interaction tone

- Smooth transitions and modest motion reinforce the experience without distracting from data.
- Buttons and inputs use soft hover and focus states, emphasizing the teal brand for primary actions and orange for attention.
- Interactive elements rely on rounded, pill-like touches and consistent padding to feel comfortable across desktop and mobile layouts.

### Surface system

- `surface.canvas` is the neutral page background.
- `surface` cards and panels are always pure white for contrast.
- `border-soft` and `border` define the card edge rhythm with subtle separation.
- Focus and selected states use the teal ring and primary gradient as consistent visual anchors.

### Color usage

- `primary` is the brand anchor for main dashboard elements, primary buttons, badges, and charts.
- `accent` and `accent-dark` energize expense warnings, toggles, and status highlights.
- `success` and `success-soft` are reserved for positive income and savings cues.
- Gray neutrals structure text, labels, borders, and muted backgrounds.
- `overlay` supports translucent tooltip and menu layering.

### Typography and layout

- A neutral sans-serif system font keeps the product modern and readable.
- Large headings and bold weights define section titles, while text-sm and text-base sizes support form labels, captions, and list metadata.
- Consistent spacing reinforces the modular dashboard structure: generous padding for cards and compact but readable gaps for lists.

### When to use these tokens

- Use `brand.primary` for main call-to-actions, data highlights, and active chart segments.
- Use `brand.accent` for warning or expense-oriented states.
- Use `neutral.surface` for cards and panels, with `neutral.border` to separate layers.
- Use `radii.medium` and `radii.large` for card and button corners.
- Apply `elevation.level-1` for input fields and list items, `level-2`/`level-3` for elevated cards and modals.
- Use `motion.duration.normal` and `motion.easing.standard` for standard transitions, and `motion.animation.spin` and `motion.animation.ping` for subtle load/notification feedback.
