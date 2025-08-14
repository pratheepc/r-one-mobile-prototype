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
    
    // Gradient helpers
    gradients: {
      primary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 50%, ${colors.tertiary.main} 100%)`,
      primaryDark: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.secondary.dark} 50%, ${colors.tertiary.dark} 100%)`,
      primaryLight: `linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.secondary.light} 50%, ${colors.tertiary.light} 100%)`,
      primaryToSecondary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
      secondaryToTertiary: `linear-gradient(135deg, ${colors.secondary.main} 0%, ${colors.tertiary.main} 100%)`,
    },
  }
}

// Export colors for direct import
export { colors, withOpacity, lighten, darken }
