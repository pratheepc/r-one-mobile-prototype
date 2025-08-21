import React from 'react'
import { Box } from '@mui/material'
import MapComponent from '../components/Map'
import { useColors } from '../theme/useColors'

function MapScreen() {
  const colors = useColors()

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0
    }}>
      <MapComponent />
    </Box>
  )
}

export default MapScreen
