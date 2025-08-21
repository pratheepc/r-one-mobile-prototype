import { Box } from '@mui/material'
import MapComponent from '../components/Map'

function MapScreen() {

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
