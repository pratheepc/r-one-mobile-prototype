import { createTheme } from '@mui/material/styles'

// Material Design 3 (Material You) color palette
const material3Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4', // Material 3 primary color
      light: '#D0BCFF',
      dark: '#4F378B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71', // Material 3 secondary color
      light: '#E8DEF8',
      dark: '#4A4458',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260', // Material 3 tertiary color
      light: '#FFB4AB',
      dark: '#633B48',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#BA1A1A', // Material 3 error color
      light: '#FFB4AB',
      dark: '#93000A',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF8F00', // Material 3 warning color
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    info: {
      main: '#006C51', // Material 3 info color
      light: '#4CAF50',
      dark: '#2E7D32',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#006C51', // Material 3 success color
      light: '#4CAF50',
      dark: '#2E7D32',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBFE', // Material 3 surface color
      paper: '#FFFBFE',
    },
    surface: {
      main: '#FFFBFE',
      variant: '#E7E0EC',
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#49454F',
      disabled: '#9CA38B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      lineHeight: 1.29,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0.01em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.44,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16, // Material 3 uses 16px border radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Material 3 button radius
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          minHeight: 40,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
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
          backgroundColor: '#FFFBFE',
          color: '#1C1B1F',
          boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFBFE',
          borderTop: '1px solid #E7E0EC',
        },
      },
    },
  },
})

export default material3Theme
