import React from 'react'
import { Box, Typography } from '@mui/material'
import { colors } from '../theme/colors'

interface StatusToggleProps {
  isWorking: boolean
  onToggle: (isWorking: boolean) => void
}

function StatusToggle({ isWorking, onToggle }: StatusToggleProps) {
  return (
    <Box
      onClick={() => onToggle(!isWorking)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        border: `2px solid ${colors.success.main}`,
        borderRadius: '20px',
        padding: '2px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        minWidth: '120px',
        height: '32px',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {/* Away Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isWorking ? 'transparent' : colors.success.main,
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: '0.75rem',
            color: isWorking ? colors.text.primary : 'white',
            transition: 'color 0.3s ease-in-out',
          }}
        >
          Away
        </Typography>
      </Box>

      {/* Working Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isWorking ? colors.success.main : 'transparent',
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: '0.75rem',
            color: isWorking ? 'white' : colors.text.primary,
            transition: 'color 0.3s ease-in-out',
          }}
        >
          Working
        </Typography>
      </Box>
    </Box>
  )
}

export default StatusToggle
