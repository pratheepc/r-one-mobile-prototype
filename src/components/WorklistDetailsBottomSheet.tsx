import React from 'react'
import { Box, Typography, Chip, IconButton, Drawer } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'

interface WorklistDetailsBottomSheetProps {
  open: boolean
  onClose: () => void
}

function WorklistDetailsBottomSheet({ open, onClose }: WorklistDetailsBottomSheetProps) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          maxHeight: '80vh',
          background: 'white'
        }
      }}
    >
      <Box sx={{ padding: '20px' }}>
        {/* Drag Indicator */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '16px'
        }}>
          <Box sx={{
            width: '40px',
            height: '4px',
            backgroundColor: '#E0E0E0',
            borderRadius: '2px'
          }} />
        </Box>

        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <Typography sx={{ 
            fontSize: '1.2rem', 
            fontWeight: 600, 
            color: '#333'
          }}>
            Checklist detail
          </Typography>
        </Box>

        {/* Address Section */}
        <Box sx={{ marginBottom: '16px' }}>
          <Typography sx={{ 
            fontSize: '0.9rem', 
            color: '#666', 
            marginBottom: '4px'
          }}>
            Address
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.4,
              flex: 1
            }}>
              The Gateway Grill, Ahmedabad, Gujarat - 41739
            </Typography>
            <IconButton
              aria-label="Navigate"
              sx={{
                color: '#E23151',
                backgroundColor: '#FFF5F5',
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#FFE6E6'
                }
              }}
              onClick={() => {
                const addr = 'The Gateway Grill, Ahmedabad, Gujarat - 41739'
                const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`
                window.open(url, '_blank')
              }}
            >
              <FontAwesomeIcon icon={faDirections} style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Charge Point Section */}
        <Box sx={{ marginBottom: '16px' }}>
          <Typography sx={{ 
            fontSize: '0.9rem', 
            color: '#666', 
            marginBottom: '4px'
          }}>
            Charge Point
          </Typography>
          <Typography sx={{ 
            fontSize: '1rem', 
            color: '#333',
            lineHeight: 1.4
          }}>
            CP-2024-001
          </Typography>
        </Box>

        {/* Created by Section */}
        <Box sx={{ marginBottom: '16px' }}>
          <Typography sx={{ 
            fontSize: '0.9rem', 
            color: '#666', 
            marginBottom: '4px'
          }}>
            Created by
          </Typography>
          <Typography sx={{ 
            fontSize: '1rem', 
            color: '#333',
            lineHeight: 1.4
          }}>
            <span style={{ color: '#E23151', fontWeight: 600 }}>Rohit</span> on 12 Oct 2024
          </Typography>
        </Box>

        {/* Assigned by Section */}
        <Box sx={{ marginBottom: '16px' }}>
          <Typography sx={{ 
            fontSize: '0.9rem', 
            color: '#666', 
            marginBottom: '4px'
          }}>
            Assigned by
          </Typography>
          <Typography sx={{ 
            fontSize: '1rem', 
            color: '#333',
            lineHeight: 1.4
          }}>
            <span style={{ color: '#E23151', fontWeight: 600 }}>Rohit</span> on 12 Oct 2024
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default WorklistDetailsBottomSheet
