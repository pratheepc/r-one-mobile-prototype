import { useTheme } from '@mui/material/styles'
import { colors } from './colors'

// Custom hook to access colors throughout the app
export const useColors = () => {
  const theme = useTheme()
  
  return {
    // Direct access to color palette
    palette: colors,
    
    // Theme-aware colors (respects dark/light mode)
    theme: {
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      error: theme.palette.error,
      warning: theme.palette.warning,
      success: theme.palette.success,
      info: theme.palette.info,
      background: theme.palette.background,
      text: theme.palette.text,
    },
    
    // Quick access to commonly used colors
    primary: colors.primary.main,
    secondary: colors.secondary.main,
    tertiary: colors.tertiary.main,
    error: colors.error.main,
    warning: colors.warning.main,
    success: colors.success.main,
    info: colors.info.main,
    
    // Surface colors
    background: colors.background.default,
    surface: colors.surface.main,
    surfaceVariant: colors.surface.variant,
    
    // Text colors
    textPrimary: colors.text.primary,
    textSecondary: colors.text.secondary,
    textDisabled: colors.text.disabled,
    
    // Neutral colors
    neutral: colors.neutral,
  }
}

// Export colors for direct import
export { colors, withOpacity, lighten, darken }
