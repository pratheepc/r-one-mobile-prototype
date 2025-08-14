# R-One Mobile App Typography Scale (WCAG 2.1 A/AA Compliant)

## Typography Tokens

| Token | Font size | Line-height | Weight | Letter‑spacing | Typical use |
|---|---:|---:|---:|---:|---|
| **displayLarge** | 40 | 1.2 | 700 | −0.01em | Hero / main page title |
| **displayMedium** | 32 | 1.25 | 700 | −0.01em | Section headers / announcements |
| **displaySmall** | 28 | 1.25 | 700 | −0.005em | Subsection / featured |
| **headlineLarge** | 24 | 1.3 | 700 | 0 | Main page titles |
| **headlineMedium** | 22 | 1.3 | 700 | 0 | Section titles |
| **headlineSmall** | 20 | 1.35 | 600 | 0 | Subsection titles |
| **titleLarge** | 18 | 1.4 | 600 | 0 | Card titles / dialog headers |
| **titleMedium** | 16 | 1.45 | 600 | 0 | Component titles / form headers |
| **titleSmall** | 14 | 1.55 | 600 | 0 | Small component / list headers |
| **bodyLarge** | 18 | 1.55 | 400–500 | 0 | Primary body, key descriptions |
| **bodyMedium** *(base)* | 16 | 1.6 | 400–500 | 0 | Secondary body, captions |
| **bodySmall** | 14 | 1.6 | 400–500 | 0 | Metadata, footnotes |
| **labelLarge** | 16 | 1.25 | 600 | 0 | Button text, nav labels |
| **labelMedium** | 14 | 1.3 | 600 | 0.01em | Form labels, menu items |
| **labelSmall** | 12 | 1.35 | 600 | 0.02em | Small tags/badges/counters* |

\* Use **labelSmall** only when space is constrained; prefer 14 if possible.

---

## WCAG 2.1 A/AA Compliance Notes

- **Contrast ratios**
  - **Normal text** (< 24 px regular or < 18.66 px bold): **≥ 4.5:1**
  - **Large text** (≥ 24 px regular or ≥ 18.66 px bold): **≥ 3:1**
  - **UI component text & icons**: **≥ 3:1** against adjacent colors (recommend ≥ 4.5:1)
  - Avoid opacity tricks—contrast is measured against **effective** background color.
- **Minimum comfortable sizes**
  - Primary reading text: **16 px** or larger.
  - Avoid **12 px** except for non‑critical badges with adequate spacing and contrast.
- **Line length & spacing**
  - Aim for **40–70 characters** per line for body text.
  - Line‑height: 1.4–1.6 for body, 1.2–1.35 for headings.
- **States**
  - Hover/pressed/disabled text must meet contrast. Disabled text can be lower contrast only if non‑essential and paired with another cue.
- **Focus visibility**
  - Interactive text must have a **visible focus indicator** (≥ 3:1 contrast).
- **Don’t rely on color alone**
  - Use text or icons with color changes for required labels, errors, and statuses.

---

## Internationalization (EU) & Legibility

- Use a text‑optimized variable font with full diacritic coverage (e.g., **Inter**, **SF Pro Text**, **Roboto Flex**).
- Use text optical size if available (`font-variation-settings: "opsz"`).
- Keep letter‑spacing neutral for sentence case; add slight tracking to ALL CAPS labels only.
- Avoid ultra‑light weights below 20 px.
- Support OS text scaling: Android **sp**, iOS **Dynamic Type**.

---

## Practical Usage Defaults

- **Body base (default app text)**: `bodyMedium` (16/1.6/Regular)
- **Buttons**: `labelLarge` (16/1.25/600) with ≥ 4.5:1 contrast against button fill
- **Card titles**: `titleLarge` (18/1.4/600), supporting text `bodySmall` (14/1.6)
- **Page header**: `headlineLarge` (24/1.3/700) on mobile; escalate to `displaySmall` (28) for hero screens
- **Metadata/time stamps**: `bodySmall` (14/1.6/Regular) with ≥ 4.5:1 contrast
