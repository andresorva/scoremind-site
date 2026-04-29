# ScoreMind AI — Design System Guide (Flat Redesign)

> Source of truth for all visual design decisions.
> Updated: 1 April 2026 — FLAT REDESIGN (replaced neumorphic)

---

## Design Philosophy

**Flat, Clean, Minimal** — inspired by FotMob and SofaScore.
- Pure backgrounds, subtle card differentiation
- Single-layer minimal shadows only
- No 3D, no neumorphic, no textures, no gradients
- Compact spacing — maximize content per screen

---

## Color Palettes

### Dark Theme
| Token | Value | Usage |
|-------|-------|-------|
| background | #000000 | Pure black |
| surfaceElevated | #111111 | Cards |
| textPrimary | #FFFFFF | Main text |
| textSecondary | #999999 | Secondary text |
| textTertiary | #666666 | Muted text |
| primary | #00CEC9 | Cyan accent |
| gold | #F59E0B | Gold highlights |
| error | #FF4444 | Red |
| success | #10B981 | Green |
| divider | #1A1A1A | Separators |
| pillCyan | #00CEC9 | Confidence pills |
| pillBlue | #0984E3 | O/U pills |
| pillPurple | #6C5CE7 | BTTS pills |

### Light Theme
| Token | Value | Usage |
|-------|-------|-------|
| background | #FFFFFF | Pure white |
| surfaceElevated | #F0F0F0 | Cards (visible contrast) |
| textPrimary | #1A1A1A | Main text |
| textSecondary | #666666 | Secondary text (WCAG AA) |
| textTertiary | #999999 | Muted text |
| divider | #E5E5E5 | Separators |
| Pills | Same cyan/blue/purple | |

### Accessibility Theme
| Token | Value | Usage |
|-------|-------|-------|
| background | #000000 | Pure black |
| surfaceElevated | #0D0D0D | Cards |
| primary | #FFA500 | Orange-yellow accent |
| textPrimary | #FFA500 | All text orange |
| textSecondary | #E8A04A | Golden orange |
| All pills | #FFA500 | Orange in accessibility |

---

## Shadows

**ONE shadow only, everywhere:**
```dart
BoxShadow(
  color: colors.cardShadow,  // dark: white@3%, light: black@8%
  offset: Offset(0, 1),
  blurRadius: 3,
)
```

No multi-layer shadows. No inset shadows. No neumorphic effects.

---

## Border Radius

| Element | Radius |
|---------|--------|
| Cards | 12px |
| Buttons | 10px |
| Pills/badges | 20px |
| Nav bar | 9999px (pill) |
| Minimum on ANY element | 8px |

No radius: 20 or 24 on cards. Everything is 12px.

---

## Typography

- Font: Inter (via google_fonts)
- Weights: w400 (body), w500 (medium), w600 (semibold), w700 (bold titles)
- Less bold overall — use w500 for most UI, w700 only for section titles

---

## Spacing

Reduced throughout the app. Guidelines:
- Between major sections: 12px (was 24px)
- Between cards: 8px (was 16px)
- Internal card padding: 10-12px (was 16-20px)
- Between elements within a card: 4-6px (was 8-12px)

---

## Prediction Pills (NEW)

Three colored pills stacked VERTICALLY on Hot Picks and Next 24h cards:

| Pill | Color | Example | Token |
|------|-------|---------|-------|
| Confidence | Cyan #00CEC9 | "82" | pillCyan |
| Over/Under | Blue #0984E3 | "O2.5" | pillBlue |
| BTTS | Purple #6C5CE7 | "BY" / "BN" | pillPurple |

Pills: borderRadius 20px, padding 5h 1v, fontSize 8-9, white text, bold.

---

## FIFA World Cup Theme

Isolated in `features/worldcup/theme/fifa_colors.dart`.
- Navy: #0A1A4A (base), #0D2157 (surface), #122B6A (raised)
- Gold: #D4AF37
- Same flat shadow pattern (single subtle shadow)
- FifaColors ONLY within WC Hub screens

---

## glass.dart Functions (Flat)

All neumorphic functions now return flat BoxDecoration:

| Function | Returns |
|----------|---------|
| neumorphDecoration | surfaceElevated + cardShadow |
| neumorphInsetDecoration | background, no shadow |
| neumorphGlowDecoration | surfaceElevated + accent border 0.3 alpha |
| neumorphBevelDecoration | = neumorphDecoration |
| neumorphCircleDecoration | surfaceElevated circle + cardShadow |
| NeuTab | Flat pills (selected=accent bg, unselected=transparent) |
| NeuDivider | Simple divider line |

---

## Background

Pure color. No texture, no grid, no mesh overlay.
`ScoreMindScaffold` is a plain Scaffold wrapper.

---

## Do's and Don'ts

### DO
- Use `context.colors` for ALL colors via ThemeExtension
- Use `neumorphDecoration()` from glass.dart (they're flat now)
- Use `GoRouter` (context.push/go) for navigation
- Use `CachedNetworkImage` for network images
- Use `FifaColors` ONLY inside WC Hub
- Keep border radius at 12px for cards, 20px for pills only

### DON'T
- Hardcode hex colors
- Use `Navigator.push` (use GoRouter)
- Use `Image.network` (use CachedNetworkImage)
- Add multi-layer shadows
- Add background textures or gradients
- Use radius > 12 on cards
- Use excessive vertical spacing
