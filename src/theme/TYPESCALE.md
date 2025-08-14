# Material Design 3 Typescale System

This document explains the centralized typescale system used in the R-One Mobile App prototype.

## Overview

The typescale system is centralized in `src/theme/typescale.ts` and provides consistent typography across the entire application. All typography settings can be modified in one place for easy change management.

## File Structure

```
src/theme/
├── typescale.ts          # Central typescale configuration
├── useTypescale.ts       # Custom hook for accessing typescale
├── TYPESCALE.md          # This documentation
└── colors.ts             # Color palette (separate from typescale)
```

## Typescale Categories

### 1. Display Styles
Large text, limited to one per screen:
- **Large**: 57px / 64px line-height
- **Medium**: 45px / 52px line-height  
- **Small**: 36px / 44px line-height

### 2. Headline Styles
Section headers:
- **Large**: 32px / 40px line-height
- **Medium**: 28px / 36px line-height
- **Small**: 24px / 32px line-height

### 3. Title Styles
Page titles and important text:
- **Large**: 22px / 28px line-height
- **Medium**: 16px / 24px line-height
- **Small**: 14px / 20px line-height

### 4. Label Styles
UI elements like buttons, tabs, and form fields:
- **Large**: 14px / 20px line-height
- **Medium**: 12px / 16px line-height
- **Small**: 11px / 16px line-height

### 5. Body Styles
Main content text:
- **Large**: 16px / 24px line-height
- **Medium**: 14px / 20px line-height
- **Small**: 12px / 16px line-height

## Usage

### In Components

```tsx
import { useTypescale } from '@/theme/useTypescale'

function MyComponent() {
  const typescale = useTypescale()
  
  return (
    <Typography sx={typescale.headline.large}>
      This uses headline large style
    </Typography>
  )
}
```

### Direct Import

```tsx
import { typescale } from '@/theme/typescale'

function MyComponent() {
  return (
    <Typography sx={typescale.body.large}>
      This uses body large style
    </Typography>
  )
}
```

### Material UI Theme Integration

The typescale is automatically integrated with Material UI's theme system:

```tsx
// These automatically use the typescale configuration
<Typography variant="h1">Display Large</Typography>
<Typography variant="h4">Headline Large</Typography>
<Typography variant="body1">Body Large</Typography>
<Typography variant="button">Label Large</Typography>
```

## Helper Functions

### Responsive Typography

```tsx
const typescale = useTypescale()

// Get responsive style for different breakpoints
const responsiveStyle = typescale.getResponsiveStyle(
  typescale.headline.large, 
  'md'
)
```

### Custom Styles

```tsx
const typescale = useTypescale()

// Create custom typography style
const customStyle = typescale.createStyle(
  '18px',    // fontSize
  '24px',    // lineHeight
  '0.1px',   // letterSpacing
  500        // fontWeight
)
```

## Modifying the Typescale

To modify typography across the entire app, edit `src/theme/typescale.ts`:

```tsx
export const typescale = {
  display: {
    large: {
      fontSize: '57px',        // Change this
      lineHeight: '64px',      // Change this
      letterSpacing: '-0.25px', // Change this
      fontWeight: 400,         // Change this
    },
    // ... other styles
  },
  // ... other categories
}
```

## Best Practices

1. **Use the typescale consistently**: Always use the predefined styles rather than creating custom typography
2. **Follow Material Design 3 guidelines**: The typescale follows MD3 specifications for optimal readability
3. **Test on different screen sizes**: Use responsive helpers for mobile-first design
4. **Maintain hierarchy**: Use appropriate styles for their intended purpose (display for hero text, headlines for sections, etc.)

## Integration with Material UI

The typescale automatically maps to Material UI's typography variants:

- `h1`, `h2`, `h3` → Display styles
- `h4`, `h5`, `h6` → Headline styles  
- `subtitle1`, `subtitle2` → Title styles
- `body1`, `body2` → Body styles
- `button`, `caption`, `overline` → Label styles

## Accessibility

The typescale is designed with accessibility in mind:
- Proper contrast ratios with the color palette
- Adequate line heights for readability
- Appropriate font weights for different use cases
- Scalable font sizes that work with browser zoom

## Future Enhancements

- Add support for custom fonts
- Implement dynamic font scaling based on user preferences
- Add support for different languages and writing systems
- Create automated testing for typography consistency
