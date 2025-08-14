import React from 'react'
import { Box, Container, Typography, Button, Card, CardContent, Stack } from '@mui/material'
import { Add, Home, Search, Person } from '@mui/icons-material'

function App() {
  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh', 
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Material 3 App Header */}
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
          Material Design 3 Prototype
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="sm" sx={{ flex: 1, py: 3 }}>
        <Stack spacing={3}>
          {/* Welcome Card */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Welcome to Material 3
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                This app is built with Google's latest Material Design 3 (Material You) design system.
              </Typography>
              <Button variant="contained" startIcon={<Add />}>
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Feature Cards */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Material 3 Features
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Home color="primary" />
                  <Typography variant="body2">Dynamic color system</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Search color="secondary" />
                  <Typography variant="body2">Enhanced accessibility</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Person color="tertiary" />
                  <Typography variant="body2">Personalized experience</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
            <Button variant="contained" color="primary">
              Explore
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
