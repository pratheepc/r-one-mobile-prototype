import React from 'react'
import { Box, Container, Typography, Button, Card, CardContent, Stack, Chip } from '@mui/material'
import { Add, Home, Search, Person, Palette } from '@mui/icons-material'
import { useColors } from './theme/useColors'

function App() {
  const colors = useColors()

  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh', 
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* App Header */}
      <Box sx={{ 
        background: colors.gradients.primary,
        color: 'white',
        p: 2,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
      }}>
        <Typography variant="h5" fontWeight={500} sx={{ color: 'white' }}>
          R-One App
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Custom Gradient Color Palette Demo
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="sm" sx={{ flex: 1, py: 3 }}>
        <Stack spacing={3}>
          {/* Color Palette Demo */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Your Custom Color Palette
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                All colors are centralized in one place for easy editing.
              </Typography>
              
              {/* Primary Colors */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Primary Colors</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip 
                    label="Primary" 
                    sx={{ bgcolor: colors.primary, color: 'white' }} 
                  />
                  <Chip 
                    label="Light" 
                    sx={{ bgcolor: colors.palette.primary.light, color: 'white' }} 
                  />
                  <Chip 
                    label="Dark" 
                    sx={{ bgcolor: colors.palette.primary.dark, color: 'white' }} 
                  />
                </Stack>
              </Box>

              {/* Secondary Colors */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Secondary Colors</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip 
                    label="Secondary" 
                    sx={{ bgcolor: colors.secondary, color: 'white' }} 
                  />
                  <Chip 
                    label="Light" 
                    sx={{ bgcolor: colors.palette.secondary.light, color: 'white' }} 
                  />
                  <Chip 
                    label="Dark" 
                    sx={{ bgcolor: colors.palette.secondary.dark, color: 'white' }} 
                  />
                </Stack>
              </Box>

              {/* Tertiary Colors */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Tertiary Colors</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip 
                    label="Tertiary" 
                    sx={{ bgcolor: colors.tertiary, color: 'white' }} 
                  />
                  <Chip 
                    label="Light" 
                    sx={{ bgcolor: colors.palette.tertiary.light, color: 'white' }} 
                  />
                  <Chip 
                    label="Dark" 
                    sx={{ bgcolor: colors.palette.tertiary.dark, color: 'white' }} 
                  />
                </Stack>
              </Box>
            </CardContent>
          </Card>

          {/* Semantic Colors */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Semantic Colors
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Error" sx={{ bgcolor: colors.error, color: 'white' }} />
                  <Chip label="Warning" sx={{ bgcolor: colors.warning, color: 'white' }} />
                  <Chip label="Success" sx={{ bgcolor: colors.success, color: 'white' }} />
                  <Chip label="Info" sx={{ bgcolor: colors.info, color: 'white' }} />
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          {/* Gradient Buttons Demo */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gradient Buttons
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                All buttons now use your custom gradient (Primary + Secondary + Tertiary)
              </Typography>
              
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button variant="contained" size="large">
                    Contained Button
                  </Button>
                  <Button variant="outlined" size="large">
                    Outlined Button
                  </Button>
                  <Button variant="text" size="large">
                    Text Button
                  </Button>
                </Stack>
                
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button variant="contained" startIcon={<Palette />}>
                    With Icon
                  </Button>
                  <Button variant="outlined" endIcon={<Add />}>
                    End Icon
                  </Button>
                </Stack>
                
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button variant="contained" size="small">
                    Small
                  </Button>
                  <Button variant="contained" size="medium">
                    Medium
                  </Button>
                  <Button variant="contained" size="large">
                    Large
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
