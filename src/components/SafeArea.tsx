import React from 'react'
import { Box, BoxProps } from '@mui/material'

interface SafeAreaProps extends Omit<BoxProps, 'component'> {
    children: React.ReactNode
    variant?: 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical' | 'all' | 'content'
    fixed?: boolean
}

/**
 * SafeArea component for handling device safe areas (notch, status bar, home indicator)
 * 
 * @param variant - Which safe areas to apply:
 *   - 'top': Status bar/notch area
 *   - 'bottom': Home indicator area  
 *   - 'left': Left edge safe area
 *   - 'right': Right edge safe area
 *   - 'horizontal': Left and right safe areas
 *   - 'vertical': Top and bottom safe areas
 *   - 'all': All safe areas
 *   - 'content': Full content area with safe areas
 * @param fixed - Whether to use fixed positioning
 */
function SafeArea({
    children,
    variant = 'content',
    fixed = false,
    sx,
    ...props
}: SafeAreaProps) {
    const getSafeAreaClass = () => {
        if (fixed) {
            switch (variant) {
                case 'top': return 'fixed-top'
                case 'bottom': return 'fixed-bottom'
                case 'left': return 'fixed-left'
                case 'right': return 'fixed-right'
                default: return 'fixed-top'
            }
        }

        switch (variant) {
            case 'top': return 'safe-area-top'
            case 'bottom': return 'safe-area-bottom'
            case 'left': return 'safe-area-left'
            case 'right': return 'safe-area-right'
            case 'horizontal': return 'safe-area-horizontal'
            case 'vertical': return 'safe-area-vertical'
            case 'all': return 'safe-area-all'
            case 'content': return 'content-area'
            default: return 'content-area'
        }
    }

    return (
        <Box
            className={getSafeAreaClass()}
            sx={{
                ...sx,
                // Additional Material UI spacing
                ...(variant === 'content' && {
                    padding: 2,
                    paddingTop: `calc(16px + env(safe-area-inset-top))`,
                    paddingBottom: `calc(16px + env(safe-area-inset-bottom))`,
                    paddingLeft: `calc(16px + env(safe-area-inset-left))`,
                    paddingRight: `calc(16px + env(safe-area-inset-right))`,
                }),
                // For fixed top/bottom, add content padding
                ...(fixed && (variant === 'top' || variant === 'bottom') && {
                    '& > *': {
                        paddingTop: variant === 'top' ? 'env(safe-area-inset-top)' : undefined,
                        paddingBottom: variant === 'bottom' ? 'env(safe-area-inset-bottom)' : undefined,
                    }
                }),
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export default SafeArea
