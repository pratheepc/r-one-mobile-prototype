import { useState, useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'

interface WorklistDetailsBottomSheetProps {
  open: boolean
  onClose: () => void
}

function WorklistDetailsBottomSheet({ open, onClose }: WorklistDetailsBottomSheetProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      // Small delay to ensure DOM is ready before animation
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
      // Wait for exit animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300) // Match the transition duration
      return () => clearTimeout(timer)
    }
  }, [open])

  const handleClose = () => {
    setIsAnimating(false)
    // Small delay to allow animation to start
    setTimeout(() => {
      onClose()
    }, 50)
  }

  if (!shouldRender) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: isAnimating ? 'auto' : 'none'
      }}
      onClick={handleClose}
    >
      <Box
        sx={{
          width: '100%',
          maxHeight: '85vh',
          backgroundColor: 'white',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          transform: isAnimating ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header Section */}
        <Box sx={{ 
          padding: '20px',
          paddingBottom: '16px',
          flexShrink: 0,
          borderBottom: '1px solid #f0f0f0'
        }}>
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
            alignItems: 'flex-start'
          }}>
            <Typography sx={{ 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              color: '#333'
            }}>
              Checklist detail
            </Typography>
          </Box>
        </Box>

        {/* Scrollable Content Section */}
        <Box sx={{ 
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          paddingTop: '16px',
          WebkitOverflowScrolling: 'touch'
        }}>
          {/* Address Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Address
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
              <Typography sx={{ 
                fontSize: '1rem', 
                color: '#333',
                lineHeight: 1.5,
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
                  flexShrink: 0,
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
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Charge Point
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              CP-2024-001
            </Typography>
          </Box>

          {/* Created by Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Created by
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              <span style={{ color: '#E23151', fontWeight: 600 }}>Rohit</span> on 12 Oct 2024
            </Typography>
          </Box>

          {/* Assigned by Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Assigned by
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              <span style={{ color: '#E23151', fontWeight: 600 }}>Rohit</span> on 12 Oct 2024
            </Typography>
          </Box>

          {/* Additional Details Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Project Status
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              <span style={{ color: '#E23151', fontWeight: 600 }}>In Progress</span> - Survey Phase
            </Typography>
          </Box>

          {/* Timeline Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Timeline
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              12 November 2024 - 13 November 2024
            </Typography>
          </Box>

          {/* Priority Section */}
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '8px',
              fontWeight: 500
            }}>
              Priority
            </Typography>
            <Typography sx={{ 
              fontSize: '1rem', 
              color: '#333',
              lineHeight: 1.5
            }}>
              <span style={{ color: '#E23151', fontWeight: 600 }}>High</span> - Requires immediate attention
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default WorklistDetailsBottomSheet
