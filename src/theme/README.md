# Color Palette System

This directory contains the centralized color palette configuration for the R-One app.

## 📁 Files

- `colors.ts` - Main color palette configuration
- `useColors.ts` - Custom hook for accessing colors
- `README.md` - This documentation

## 🎨 How to Edit Colors

### 1. Edit the Color Palette

Open `src/theme/colors.ts` and modify the colors object:

```typescript
export const colors = {
  primary: {
    main: '#E23151',    // ← Change this
    light: '#EA6D83',   // ← Change this
    dark: '#B41935',    // ← Change this
  },
  // ... other colors
}
```

### 2. Colors Will Update Automatically

All components using the color system will automatically update when you change the colors in `colors.ts`.

## 🚀 How to Use Colors in Components

### Option 1: Using the useColors Hook (Recommended)

```typescript
import { useColors } from '@/theme/useColors'

function MyComponent() {
  const colors = useColors()
  
  return (
    <Box sx={{ 
      bgcolor: colors.primary,
      color: colors.textPrimary 
    }}>
      <Typography sx={{ color: colors.secondary }}>
        Hello World
      </Typography>
    </Box>
  )
}
```

### Option 2: Direct Import

```typescript
import { colors } from '@/theme/useColors'

function MyComponent() {
  return (
    <Box sx={{ bgcolor: colors.primary.main }}>
      Content
    </Box>
  )
}
```

### Option 3: Material UI Theme Colors

```typescript
import { useTheme } from '@mui/material/styles'

function MyComponent() {
  const theme = useTheme()
  
  return (
    <Button color="primary"> // Uses theme colors
      Click me
    </Button>
  )
}
```

## 🎯 Available Color Categories

### Primary Colors
- `colors.primary.main` - Main brand color
- `colors.primary.light` - Lighter variant
- `colors.primary.dark` - Darker variant

### Secondary Colors
- `colors.secondary.main` - Supporting brand color
- `colors.secondary.light` - Lighter variant
- `colors.secondary.dark` - Darker variant

### Tertiary Colors
- `colors.tertiary.main` - Accent color
- `colors.tertiary.light` - Lighter variant
- `colors.tertiary.dark` - Darker variant

### Semantic Colors
- `colors.error.main` - Error states
- `colors.warning.main` - Warning states
- `colors.success.main` - Success states
- `colors.info.main` - Information states

### Surface Colors
- `colors.background.default` - Main background
- `colors.background.paper` - Card backgrounds
- `colors.surface.main` - Surface color
- `colors.surface.variant` - Alternative surface

### Text Colors
- `colors.text.primary` - Main text
- `colors.text.secondary` - Secondary text
- `colors.text.disabled` - Disabled text

### Neutral Colors
- `colors.neutral.100` through `colors.neutral.900` - Gray scale

## 🛠️ Helper Functions

### withOpacity(color, opacity)
Add transparency to any color:

```typescript
import { withOpacity } from '@/theme/useColors'

const transparentPrimary = withOpacity(colors.primary.main, 0.5)
```

### lighten(color, amount)
Make a color lighter:

```typescript
import { lighten } from '@/theme/useColors'

const lighterPrimary = lighten(colors.primary.main, 30)
```

### darken(color, amount)
Make a color darker:

```typescript
import { darken } from '@/theme/useColors'

const darkerPrimary = darken(colors.primary.main, 30)
```

## 📱 Best Practices

1. **Always use the centralized colors** - Don't hardcode colors in components
2. **Use semantic colors** - Use `error`, `success`, `warning` for appropriate states
3. **Consider contrast** - Ensure text is readable on colored backgrounds
4. **Test on mobile** - Colors may appear different on mobile devices
5. **Use the hook** - `useColors()` provides the most flexible access to colors

## 🔄 Updating Colors

1. Edit `src/theme/colors.ts`
2. Save the file
3. The app will automatically reload with new colors
4. All components using the color system will update immediately

## 🎨 Color Palette Structure

```
colors/
├── primary/          # Main brand colors
├── secondary/        # Supporting colors
├── tertiary/         # Accent colors
├── error/           # Error states
├── warning/         # Warning states
├── success/         # Success states
├── info/            # Information states
├── background/      # Background colors
├── surface/         # Surface colors
├── text/            # Text colors
└── neutral/         # Gray scale
```
