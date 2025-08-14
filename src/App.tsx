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
        bgcolor: 'surface.main',
        borderBottom: '1px solid',
        borderColor: 'surface.variant',
        p: 2
      }}>
        <Typography variant="h5" color="text.primary" fontWeight={500}>
          R-One App
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Custom Color Palette Demo
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

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
            <Button variant="contained" color="primary" startIcon={<Palette />}>
              Customize Colors
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
