import { createTheme } from '@mui/material/styles'
import { colors } from './theme/colors'
import { typescale } from './theme/typescale'

// Material Design 3 theme using centralized color palette and typescale
const material3Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: '#FFFFFF',
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
      contrastText: '#FFFFFF',
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
      contrastText: '#000000',
    },
    info: {
      main: colors.info.main,
      light: colors.info.light,
      dark: colors.info.dark,
      contrastText: '#FFFFFF',
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
      contrastText: '#FFFFFF',
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    
    // Display styles
    h1: {
      ...typescale.display.large,
    },
    h2: {
      ...typescale.display.medium,
    },
    h3: {
      ...typescale.display.small,
    },
    
    // Headline styles
    h4: {
      ...typescale.headline.large,
    },
    h5: {
      ...typescale.headline.medium,
    },
    h6: {
      ...typescale.headline.small,
    },
    
    // Body styles
    body1: {
      ...typescale.body.large,
    },
    body2: {
      ...typescale.body.medium,
    },
    
    // Title styles
    subtitle1: {
      ...typescale.title.large,
    },
    subtitle2: {
      ...typescale.title.medium,
    },
    
    // Label styles
    button: {
      ...typescale.label.large,
      textTransform: 'none',
    },
    caption: {
      ...typescale.label.medium,
    },
    overline: {
      ...typescale.label.small,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16, // Material 3 uses 16px border radius
  },
  spacing: (factor: number) => `${8 * factor}px`, // Material 3 uses 8px base spacing
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Ensure safe areas are respected globally
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // 2pt = 8px border radius
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          minHeight: 40,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 50%, ${colors.tertiary.main} 100%)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 50%, ${colors.tertiary.main} 100%)`,
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.secondary.dark} 50%, ${colors.tertiary.dark} 100%)`,
            boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.secondary.dark} 50%, ${colors.tertiary.dark} 100%)`,
            transform: 'translateY(0px)',
          },
          '&:focus': {
            outline: 'none',
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 50%, ${colors.tertiary.main} 100%)`,
            boxShadow: 'none',
            transform: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 50%, ${colors.tertiary.main} 100%)`,
            boxShadow: 'none',
            transform: 'none',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: colors.primary.main,
          background: 'transparent',
          color: colors.primary.main,
          '&:hover': {
            borderColor: colors.secondary.main,
            background: 'transparent',
            color: colors.secondary.main,
          },
          '&:active': {
            borderColor: colors.tertiary.main,
            background: 'transparent',
            color: colors.tertiary.main,
          },
          '&:focus': {
            outline: 'none',
            borderColor: colors.primary.main,
            background: 'transparent',
            color: colors.primary.main,
          },
          '&:focus-visible': {
            outline: 'none',
            borderColor: colors.primary.main,
            background: 'transparent',
            color: colors.primary.main,
          },
        },
        text: {
          background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main}, ${colors.tertiary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.dark}, ${colors.secondary.dark}, ${colors.tertiary.dark})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28, // Material 3 card radius
          boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface.main,
          color: colors.text.primary,
          boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
          minHeight: 'auto',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
          '@media (max-width: 480px)': {
            minHeight: 'auto',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: '8px',
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface.main,
          borderTop: `1px solid ${colors.surface.variant}`,
        },
      },
    },
  },
})

export default material3Theme
