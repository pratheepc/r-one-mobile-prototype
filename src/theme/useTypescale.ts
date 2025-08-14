import { useTheme } from '@mui/material/styles'
import { typescale } from './typescale'

// Custom hook to access typescale throughout the app
export const useTypescale = () => {
  const theme = useTheme()

  return {
    // Direct access to typescale configuration
    typescale,

    // Theme-aware typography (respects Material UI theme)
    theme: {
      h1: theme.typography.h1,
      h2: theme.typography.h2,
      h3: theme.typography.h3,
      h4: theme.typography.h4,
      h5: theme.typography.h5,
      h6: theme.typography.h6,
      body1: theme.typography.body1,
      body2: theme.typography.body2,
      subtitle1: theme.typography.subtitle1,
      subtitle2: theme.typography.subtitle2,
      button: theme.typography.button,
      caption: theme.typography.caption,
      overline: theme.typography.overline,
    },

    // Quick access to commonly used styles
    display: {
      large: typescale.display.large,
      medium: typescale.display.medium,
      small: typescale.display.small,
    },

    headline: {
      large: typescale.headline.large,
      medium: typescale.headline.medium,
      small: typescale.headline.small,
    },

    title: {
      large: typescale.title.large,
      medium: typescale.title.medium,
      small: typescale.title.small,
    },

    label: {
      large: typescale.label.large,
      medium: typescale.label.medium,
      small: typescale.label.small,
    },

    body: {
      large: typescale.body.large,
      medium: typescale.body.medium,
      small: typescale.body.small,
    },

    // Helper functions for responsive typography
    getResponsiveStyle: (baseStyle: any, breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
      const fontSize = parseFloat(baseStyle.fontSize)
      const lineHeight = parseFloat(baseStyle.lineHeight)
      
      const ratios = {
        xs: 0.875,
        sm: 0.95,
        md: 1,
        lg: 1.05,
        xl: 1.125,
      }

      const ratio = ratios[breakpoint]
      
      return {
        ...baseStyle,
        fontSize: `${fontSize * ratio}px`,
        lineHeight: `${lineHeight * ratio}px`,
      }
    },

    // Helper for creating custom typography styles
    createStyle: (fontSize: string, lineHeight: string, letterSpacing: string, fontWeight: number) => ({
      fontSize,
      lineHeight,
      letterSpacing,
      fontWeight,
    }),
  }
}

// Export typescale for direct import
export { typescale }
