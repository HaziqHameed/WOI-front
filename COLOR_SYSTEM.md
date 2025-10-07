# Color System Documentation

This document outlines the centralized color system implemented in the Tailwind configuration for better reusability and maintainability.

## Color Categories

### Primary Brand Colors
- `primary-500`: `#CE2D52` - Main primary color (red)
- `primary-*`: Various shades from 50-950

### Secondary Brand Colors  
- `secondary-500`: `#F05921` - Main secondary color (orange)
- `secondary-*`: Various shades from 50-950

### Gradient Colors
- `gradient-start`: `#FFA844` - Gradient start color
- `gradient-end`: `#FF6D68` - Gradient end color
- `gradient-primary-start`: `#CE2D52` - Primary gradient start
- `gradient-primary-end`: `#F05921` - Primary gradient end

### Status Colors
- `success-500`: `#00B900` - Main success color (green)
- `successAlt-500`: `#52B447` - Alternative success color

### Background Colors
- `background-primary`: `#111827` - Main dark background
- `background-secondary`: `#1F2937` - Secondary dark background  
- `background-tertiary`: `#374151` - Tertiary dark background
- `background-card`: `rgba(17,24,39,0.5)` - Card background
- `background-cardHover`: `rgba(31,41,55,0.3)` - Card hover background

### Accent Colors
- `accent-purple`: `#762A45` - Purple accent (used in headers)
- `accent-blue`: `#5088FF` - Blue accent color

### Text Colors
- `text-primary`: `#ffffff` - Primary text color (white)
- `text-secondary`: `#9CA3AF` - Secondary text color (gray)
- `text-muted`: `#6B7280` - Muted text color

### Border Colors
- `border-primary`: `#1F2937` - Primary border color
- `border-secondary`: `#374151` - Secondary border color
- `border-muted`: `#6B7280` - Muted border color

### Overlay Colors
- `overlay-light`: `rgba(255, 255, 255, 0.1)` - Light overlay
- `overlay-medium`: `rgba(255, 255, 255, 0.2)` - Medium overlay
- `overlay-dark`: `rgba(0, 0, 0, 0.5)` - Dark overlay

## Usage Examples

### Background Colors
```tsx
// Instead of: bg-[#111827]
<div className="bg-background-primary">

// Instead of: bg-[#1F2937]  
<div className="bg-background-secondary">

// Instead of: bg-[#374151]
<div className="bg-background-tertiary">
```

### Text Colors
```tsx
// Instead of: text-white
<p className="text-text-primary">

// Instead of: text-gray-400
<p className="text-text-secondary">

// Instead of: text-gray-500
<p className="text-text-muted">
```

### Border Colors
```tsx
// Instead of: border-[#1F2937]
<div className="border border-border-primary">

// Instead of: border-gray-700
<div className="border border-border-secondary">
```

### Status Colors
```tsx
// Instead of: bg-[#00B900]
<div className="bg-brand-success">

// Instead of: text-[#52B447]
<span className="text-brand-successAlt">
```

### Gradients
```tsx
// Instead of: bg-gradient-to-r from-[#FFA844] to-[#FF6D68]
<div className="bg-gradient-brand">

// Instead of: bg-gradient-to-r from-[#CE2D52] to-[#F05921]
<div className="bg-gradient-primary-brand">
```

## Migration Guide

### Before (Hardcoded Colors)
```tsx
<div className="bg-[#111827] border border-[#1F2937] text-white">
  <span className="text-[#52B447]">Success</span>
</div>
```

### After (Centralized Colors)
```tsx
<div className="bg-background-primary border border-border-primary text-text-primary">
  <span className="text-brand-successAlt">Success</span>
</div>
```

## Benefits

1. **Consistency**: All colors are defined in one place
2. **Maintainability**: Easy to update colors across the entire application
3. **Reusability**: Colors can be reused with semantic names
4. **Type Safety**: TypeScript support for color names
5. **Design System**: Establishes a proper design system foundation
6. **Accessibility**: Easier to maintain proper contrast ratios

## Custom Gradients

The configuration includes custom gradient utilities:
- `bg-gradient-brand`: Brand gradient (orange to red)
- `bg-gradient-primary-brand`: Primary brand gradient (red to orange)

## Animations

Additional animations are included:
- `animate-fade-in`: Fade in animation
- `animate-slide-up`: Slide up animation  
- `animate-slide-down`: Slide down animation

## Box Shadows

Custom shadow utilities:
- `shadow-card`: Standard card shadow
- `shadow-card-hover`: Card hover shadow
