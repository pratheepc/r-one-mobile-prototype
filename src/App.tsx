import React from 'react'
import { Box, AppBar, Toolbar, Typography, Fab, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMap,
  faWrench,
  faQrcode,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { useColors } from './theme/useColors'
import SafeArea from './components/SafeArea'
import MapScreen from './pages/MapScreen'
import WorkScreen from './pages/WorkScreen'
import PWAInstallPrompt from './components/PWAInstallPrompt'

function App() {
  const colors = useColors()
  const [value, setValue] = React.useState(0)
  const [showInstallationDetails, setShowInstallationDetails] = React.useState(false)

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Fixed Header with Safe Area */}
      {!showInstallationDetails && (
        <SafeArea variant="top" fixed>
          <AppBar
            position="static"
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: 0,
              minHeight: 'auto',
              zIndex: 1000,
              '@media (max-width: 480px)': {
                minHeight: 'auto',
              }
            }}
          >
          <Toolbar sx={{
            minHeight: 'auto',
            paddingTop: 'env(safe-area-inset-top)',
            paddingY: { xs: 1, sm: 1.5, md: 2 },
            paddingX: { xs: 2, sm: 3 },
            '@media (max-width: 480px)': {
              paddingY: 0.5,
              paddingX: 1.5,
            }
          }}>
            {/* Greeting */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  color: 'rgba(0, 0, 0, 0.85)',
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                  lineHeight: 1.2,
                  marginBottom: '2px',
                  textShadow: '0px 1px 2px rgba(255, 255, 255, 0.3)'
                }}
              >
                Hey <span style={{ color: '#E23151' }}>John</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  fontWeight: 400,
                  textShadow: '0px 1px 2px rgba(255, 255, 255, 0.2)'
                }}
              >
                Your work for the day
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </SafeArea>
      )}

      {/* Content Area */}
      <SafeArea variant="content">
        <Box sx={{ 
          flex: 1, 
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: showInstallationDetails ? '0' : 'env(safe-area-inset-top)'
        }}>
          {value === 0 && <MapScreen />}
          {value === 1 && <WorkScreen onInstallationDetailsChange={setShowInstallationDetails} />}
          {value === 3 && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%',
              color: colors.textSecondary 
            }}>
              <Typography variant="h6">Search Screen</Typography>
            </Box>
          )}
          {value === 4 && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%',
              color: colors.textSecondary 
            }}>
              <Typography variant="h6">Profile Screen</Typography>
            </Box>
          )}
        </Box>
      </SafeArea>

      {/* Fixed Bottom Navigation with Safe Area */}
      <SafeArea variant="bottom" fixed>
        <Box
          sx={{
            position: 'relative',
            background: colors.surface,
            borderTop: `1px solid ${colors.surfaceVariant}`,
            paddingBottom: 'env(safe-area-inset-bottom)',
            minHeight: 'auto',
            zIndex: 1000
          }}
        >
          {/* Main Bottom Navigation */}
          <BottomNavigation
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue as number)
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
                  color: colors.primary,
                  '& .MuiBottomNavigationAction-label': {
                    color: colors.primary,
                    fontWeight: 600,
                  },
                  '& .MuiSvgIcon-root': {
                    color: colors.primary,
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
              value={0}
              icon={<FontAwesomeIcon icon={faMap} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            <BottomNavigationAction
              label="Work"
              value={1}
              icon={<FontAwesomeIcon icon={faWrench} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            {/* Empty space for FAB */}
            <Box sx={{ flex: 1, maxWidth: '20%' }} />
            <BottomNavigationAction
              label="Search"
              value={3}
              icon={<FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.2rem' }} />}
              sx={{
                flex: 1,
                maxWidth: '20%',
              }}
            />
            <BottomNavigationAction
              label="Profile"
              value={4}
              icon={<FontAwesomeIcon icon={faUser} style={{ fontSize: '1.2rem' }} />}
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
              // Handle R-Vision action
              console.log('R-Vision clicked')
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

      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </Box>
  )
}

export default App
