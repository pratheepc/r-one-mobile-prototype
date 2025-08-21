import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Box, Typography, Fab } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useColors } from '../theme/useColors'

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
})

// Map controls component
function MapControls() {
  const map = useMap()
  const colors = useColors()

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          map.setView([latitude, longitude], 15)
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }

  const handleZoomIn = () => {
    map.zoomIn()
  }

  const handleZoomOut = () => {
    map.zoomOut()
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 200,
        right: 16,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {/* Location Button */}
      <Fab
        size="small"
        aria-label="Get current location"
        onClick={handleLocationClick}
        sx={{
          width: 48,
          height: 48,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 1)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <FontAwesomeIcon 
          icon={faCrosshairs} 
          style={{ 
            fontSize: '1rem',
            color: colors.primary
          }} 
        />
      </Fab>

      {/* Zoom Controls */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'center' }}>
        <Fab
          size="small"
          aria-label="Zoom in"
          onClick={handleZoomIn}
          sx={{
            width: 48,
            height: 48,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 1)',
              transform: 'scale(1.05)',
            },
          }}
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            style={{ 
              fontSize: '1rem',
              color: colors.primary
            }} 
          />
        </Fab>
        <Fab
          size="small"
          aria-label="Zoom out"
          onClick={handleZoomOut}
          sx={{
            width: 48,
            height: 48,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 1)',
              transform: 'scale(1.05)',
            },
          }}
        >
          <FontAwesomeIcon 
            icon={faMinus} 
            style={{ 
              fontSize: '1rem',
              color: colors.primary
            }} 
          />
        </Fab>
      </Box>
    </Box>
  )
}

interface MapComponentProps {
  center?: [number, number]
  zoom?: number
  markers?: Array<{
    id: string
    position: [number, number]
    title: string
    description?: string
  }>
}

function MapComponent({ 
  center = [40.7128, -74.0060], // Default to New York
  zoom = 13,
  markers = []
}: MapComponentProps) {
  const colors = useColors()

  // Sample markers for demonstration
  const sampleMarkers = [
    {
      id: '1',
      position: [40.7128, -74.0060] as [number, number],
      title: 'R-One Headquarters',
      description: 'Main office location'
    },
    {
      id: '2',
      position: [40.7589, -73.9851] as [number, number],
      title: 'Installation Site A',
      description: 'Active installation project'
    },
    {
      id: '3',
      position: [40.7505, -73.9934] as [number, number],
      title: 'Service Center',
      description: 'Customer service location'
    }
  ]

  const displayMarkers = markers.length > 0 ? markers : sampleMarkers

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        '& .leaflet-container': {
          width: '100%',
          height: '100%',
          zIndex: 1,
        },
        '& .leaflet-popup-content-wrapper': {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        },
        '& .leaflet-popup-content': {
          margin: '12px 16px',
          fontFamily: 'Roboto, sans-serif',
        },
        '& .leaflet-popup-tip': {
          background: 'white',
        },
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false} // We'll use custom controls
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; Google Maps'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        
        {displayMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary }}>
                {marker.title}
              </Typography>
              {marker.description && (
                <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 0.5 }}>
                  {marker.description}
                </Typography>
              )}
            </Popup>
          </Marker>
        ))}
        
        <MapControls />
      </MapContainer>
    </Box>
  )
}

export default MapComponent
