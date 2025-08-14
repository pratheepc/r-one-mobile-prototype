// Material Design 3 Typescale Configuration
// This file centralizes all typography settings for easy change management
// Based on Material Design 3 specifications

export const typescale = {
  // Display styles - Large text, limited to one per screen
  display: {
    large: {
      fontSize: '57px',
      lineHeight: '64px',
      letterSpacing: '-0.25px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '45px',
      lineHeight: '52px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    small: {
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
  },

  // Headline styles - Section headers
  headline: {
    large: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '28px',
      lineHeight: '36px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    small: {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
  },

  // Title styles - Page titles and important text
  title: {
    large: {
      fontSize: '22px',
      lineHeight: '28px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      fontWeight: 500,
    },
    small: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      fontWeight: 500,
    },
  },

  // Label styles - UI elements like buttons, tabs, and form fields
  label: {
    large: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      fontWeight: 500,
    },
    medium: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
    small: {
      fontSize: '11px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
  },

  // Body styles - Main content text
  body: {
    large: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      fontWeight: 400,
    },
    small: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      fontWeight: 400,
    },
  },
} as const

// Type for the typescale
export type Typescale = typeof typescale

// Helper function to get responsive font sizes
export const getResponsiveFontSize = (
  baseSize: string,
  mobileRatio: number = 0.875,
  tabletRatio: number = 1,
  desktopRatio: number = 1.125
) => {
  const baseValue = parseFloat(baseSize)
  return {
    xs: `${baseValue * mobileRatio}px`,
    sm: `${baseValue * tabletRatio}px`,
    md: `${baseValue * desktopRatio}px`,
  }
}

// Helper function to convert px to rem
export const pxToRem = (px: number, baseFontSize: number = 16): string => {
  return `${px / baseFontSize}rem`
}

// Helper function to convert px to em
export const pxToEm = (px: number, parentFontSize: number = 16): string => {
  return `${px / parentFontSize}em`
}
