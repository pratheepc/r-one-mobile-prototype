// Centralized Color Palette Configuration
// Edit these colors to update the entire app's color scheme

export const colors = {
  // Primary Colors
  primary: {
    main: '#E23151',
    light: '#EA6D83',
    dark: '#B41935',
  },

  // Secondary Colors
  secondary: {
    main: '#FF4D00',
    light: '#FF793F',
    dark: '#BF3900',
  },

  // Tertiary Colors
  tertiary: {
    main: '#CD8603',
    light: '#FBA608',
    dark: '#996402',
  },

  // Semantic Colors
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
  },

  warning: {
    main: '#ED6C02',
    light: '#FF9800',
    dark: '#E65100',
  },

  success: {
    main: '#2E7D32',
    light: '#4CAF50',
    dark: '#1B5E20',
  },

  info: {
    main: '#0288D1',
    light: '#03A9F4',
    dark: '#01579B',
  },

  // Surface Colors
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
  },

  surface: {
    main: '#FFFFFF',
    variant: '#F0F0F0',
  },

  // Text Colors
  text: {
    primary: '#212121',
    secondary: '#616161',
    disabled: '#9E9E9E',
  },

  // Neutral Colors
  neutral: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
} as const

// Type for the color palette
export type ColorPalette = typeof colors

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Helper function to get lighter/darker variants
export const lighten = (color: string, amount: number): string => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  const newR = Math.min(255, r + amount)
  const newG = Math.min(255, g + amount)
  const newB = Math.min(255, b + amount)
  
  return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`
}

export const darken = (color: string, amount: number): string => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  const newR = Math.max(0, r - amount)
  const newG = Math.max(0, g - amount)
  const newB = Math.max(0, b - amount)
  
  return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`
}
