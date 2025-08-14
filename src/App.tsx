import React from 'react'
import { Box, AppBar, Toolbar, Typography, Fab, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMap,
  faWrench,
  faQrcode,
  faCogs,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { useColors } from './theme/useColors'
import SafeArea from './components/SafeArea'

function App() {
  const colors = useColors()
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Fixed Header with Safe Area */}
      <SafeArea variant="top" fixed>
        <AppBar
          position="static"
          sx={{
            background: colors.gradients.primary,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            borderRadius: 0,
            minHeight: 'auto',
            '@media (max-width: 480px)': {
              minHeight: 'auto',
            }
          }}
        >
          <Toolbar sx={{
            minHeight: 'auto',
            paddingTop: 'env(safe-area-inset-top)',
            paddingY: { xs: 1, sm: 1.5, md: 2 },
            '@media (max-width: 480px)': {
              paddingY: 0.5,
            }
          }}>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{
                color: 'white',
                flexGrow: 1,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}
            >
              R-One App
            </Typography>
          </Toolbar>
        </AppBar>
      </SafeArea>

      {/* Empty Content Area */}
      <SafeArea variant="content">
        <Box sx={{ flex: 1 }} />
      </SafeArea>

      {/* Fixed Bottom Navigation with Safe Area */}
      <SafeArea variant="bottom" fixed>
        <Box
          sx={{
            position: 'relative',
            background: colors.surface,
            borderTop: `1px solid ${colors.surfaceVariant}`,
            paddingBottom: 'env(safe-area-inset-bottom)',
            minHeight: 'auto'
          }}
        >
          {/* Main Bottom Navigation */}
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            showLabels
            sx={{
              height: 70,
              background: 'transparent',
              '& .MuiBottomNavigationAction-root': {
                minWidth: 'auto',
                padding: '6px 4px',
                color: colors.textSecondary,
                transition: 'all 0.2s ease-in-out',
                '&.Mui-selected': {
                  color: 'transparent',
                  background: colors.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  '& .MuiBottomNavigationAction-label': {
                    background: colors.gradients.primary,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                  },
                  '& .MuiSvgIcon-root': {
                    background: colors.gradients.primary,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                },
                '& .MuiBottomNavigationAction-label': {
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  marginTop: '6px',
                  transition: 'all 0.2s ease-in-out',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '1.2rem',
                  transition: 'all 0.2s ease-in-out',
                },
                '&:hover': {
                  color: colors.primary,
                  transform: 'translateY(-1px)',
                },
              },
            }}
          >
            <BottomNavigationAction
              label="Map"
              value="map"
              icon={<FontAwesomeIcon icon={faMap} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            <BottomNavigationAction
              label="Installation"
              value="installation"
              icon={<FontAwesomeIcon icon={faWrench} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            {/* Empty space for FAB */}
            <Box sx={{ flex: 1, maxWidth: '20%' }} />
            <BottomNavigationAction
              label="Service"
              value="service"
              icon={<FontAwesomeIcon icon={faCogs} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            <BottomNavigationAction
              label="More"
              value="more"
              icon={<FontAwesomeIcon icon={faBars} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
          </BottomNavigation>

          {/* R-Vision FAB Button */}
          <Fab
            color="primary"
            aria-label="R-Vision"
            sx={{
              position: 'absolute',
              top: -18,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 52,
              height: 52,
              background: colors.gradients.primary,
              boxShadow: '0px 3px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                background: colors.gradients.primaryDark,
                boxShadow: '0px 5px 10px 3px rgba(0, 0, 0, 0.20), 0px 2px 4px 0px rgba(0, 0, 0, 0.40)',
                transform: 'translateX(-50%) translateY(-2px)',
              },
              '&:active': {
                transform: 'translateX(-50%) translateY(0px)',
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.5rem',
                color: 'white',
              },
            }}
            onClick={() => {
              setValue('r-vision')
              // Handle R-Vision action
            }}
          >
            <FontAwesomeIcon
              icon={faQrcode}
              style={{
                fontSize: '1.5rem',
                color: 'white'
              }}
            />
          </Fab>
        </Box>
      </SafeArea>
    </Box>
  )
}

export default App
