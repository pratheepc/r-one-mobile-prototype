import React, { useState } from 'react'
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useColors } from '../theme/useColors'
import InstallationChecklist from './InstallationChecklist'

interface WorkScreenProps {
  onInstallationDetailsChange?: (show: boolean) => void
}

function WorkScreen({ onInstallationDetailsChange }: WorkScreenProps) {
  const colors = useColors()
  const [showInstallationDetails, setShowInstallationDetails] = useState(false)
  const [showChecklist, setShowChecklist] = useState(false)

  // Notify parent component when installation details state changes
  React.useEffect(() => {
    onInstallationDetailsChange?.(showInstallationDetails)
  }, [showInstallationDetails, onInstallationDetailsChange])

  const installationData = [
    { name: 'Brookfields', location: 'Coimbatore, Tamil Nadu', count: 5 },
    { name: 'Greenfield', location: 'Milwaukee, Wisconsin', count: 15 },
    { name: 'Maple Heights', location: 'Cleveland, Ohio', count: 10 },
    { name: 'Oceanview', location: 'Cairns, Queensland', count: 20 },
    { name: 'Brookfields', location: 'Coimbatore, Tamil Nadu', count: 5 }
  ]

  if (showChecklist) {
    return <InstallationChecklist onBack={() => setShowChecklist(false)} />
  }

  if (showInstallationDetails) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        height: '100vh',
        overflow: 'hidden',
        padding: '0 4px 4px 4px',
        boxSizing: 'border-box',
        marginTop: '72px',
        marginLeft: '8px',
        marginRight: '8px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        {/* Back Button */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '4px 4px 0 4px',
          cursor: 'pointer'
        }} onClick={() => setShowInstallationDetails(false)}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1.2rem', color: '#E23151' }} />
          <Typography sx={{ 
            color: '#E23151', 
            fontSize: '0.9rem'
          }}>
            Back
          </Typography>
        </Box>


        {/* Summary Cards */}
        <Box sx={{ 
          display: 'flex', 
          gap: '8px', 
          padding: '4px 4px',
          marginTop: '0px',
          marginBottom: '4px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
                      <Card sx={{
              borderRadius: '12px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)',
              border: 'none',
              width: '120px',
              flexShrink: 0
            }}>
            <CardContent sx={{ padding: '16px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography sx={{ 
                  fontSize: '0.8rem', 
                  color: '#2E7D32', 
                  marginBottom: '12px',
                  fontWeight: 400
                }}>
                  Active maintenance
                </Typography>
                <Typography sx={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: '#2E7D32',
                  lineHeight: 0.7,
                  fontFamily: 'Impact, Charcoal, sans-serif',
                  textAlign: 'right',
                  marginTop: 'auto'
                }}>
                  05
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card 
            sx={{
              borderRadius: '12px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #E3F2FD 0%, #F3F8FF 100%)',
              border: 'none',
              borderBottom: '4px solid #1976D2',
              width: '120px',
              flexShrink: 0,
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
            onClick={() => setShowInstallationDetails(true)}
          >
            <CardContent sx={{ padding: '16px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography sx={{ 
                  fontSize: '0.8rem', 
                  color: '#1976D2', 
                  marginBottom: '12px',
                  fontWeight: 400
                }}>
                  Active installation
                </Typography>
                <Typography sx={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: '#1976D2',
                  lineHeight: 0.7,
                  fontFamily: 'Impact, Charcoal, sans-serif',
                  textAlign: 'right',
                  marginTop: 'auto'
                }}>
                  05
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            borderRadius: '12px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%)',
            border: 'none',
            width: '120px',
            flexShrink: 0
          }}>
            <CardContent sx={{ padding: '16px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography sx={{ 
                  fontSize: '0.8rem', 
                  color: '#616161', 
                  marginBottom: '12px',
                  fontWeight: 400
                }}>
                  Waiting for approval
                </Typography>
                <Typography sx={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: '#616161',
                  lineHeight: 0.7,
                  fontFamily: 'Impact, Charcoal, sans-serif',
                  textAlign: 'right',
                  marginTop: 'auto'
                }}>
                  05
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            borderRadius: '12px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #E0F2F1 0%, #F0F9F8 100%)',
            border: 'none',
            width: '120px',
            flexShrink: 0
          }}>
            <CardContent sx={{ padding: '16px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography sx={{ 
                  fontSize: '0.8rem', 
                  color: '#00695C', 
                  marginBottom: '12px',
                  fontWeight: 400
                }}>
                  Completed
                </Typography>
                <Typography sx={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  color: '#00695C',
                  lineHeight: 0.7,
                  fontFamily: 'Impact, Charcoal, sans-serif',
                  textAlign: 'right',
                  marginTop: 'auto'
                }}>
                  09
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Main Heading */}
        <Typography sx={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          color: '#1976D2',
          padding: '0 4px'
        }}>
          Active installation
        </Typography>

        {/* Installation Details */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 4px', flex: 1, overflow: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {installationData.map((item, index) => (
            <Card key={index} sx={{
              borderRadius: '12px',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
              background: 'white',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease-in-out'
              }
            }} onClick={() => setShowChecklist(true)}>
              <CardContent sx={{ padding: '16px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                                         <Typography sx={{ 
                       fontWeight: 600, 
                       color: '#1976D2', 
                       fontSize: '1.1rem',
                       marginBottom: '4px'
                     }}>
                       {item.name}
                     </Typography>
                    <Typography sx={{ 
                      color: '#666', 
                      fontSize: '0.9rem'
                    }}>
                      {item.location}
                    </Typography>
                  </Box>
                                     <Typography sx={{ 
                     fontWeight: 700, 
                     color: '#1976D2', 
                     fontSize: '2.5rem',
                     lineHeight: 0.7,
                     fontFamily: 'Impact, Charcoal, sans-serif'
                   }}>
                     {item.count.toString().padStart(2, '0')}
                   </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      height: '100vh',
      overflow: 'hidden',
      padding: '4px 8px 4px 8px',
      boxSizing: 'border-box',
      marginTop: '132px',
      marginLeft: '8px',
      marginRight: '8px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0
    }}>
      {/* Active Maintenance Card */}
      <Card sx={{
        borderRadius: '12px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)',
        border: 'none'
      }}>
        <CardContent sx={{ padding: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#2E7D32',
                  marginBottom: '24px',
                  fontSize: '1rem'
                }}
              >
                Active maintenance
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#2E7D32',
                  fontSize: '4.5rem',
                  lineHeight: 0.8,
                  marginTop: '-8px',
                  fontFamily: 'Impact, Charcoal, sans-serif'
                }}
              >
                05
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              {/* Donut Chart */}
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `conic-gradient(#2E7D32 0deg 240deg, #4CAF50 240deg 360deg)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white'
                }} />
                
                {/* Numbers on the chart sections */}
                <Typography sx={{
                  position: 'absolute',
                  top: '0px',
                  left: '20%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  03
                </Typography>
                
                <Typography sx={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '2%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  02
                </Typography>
              </Box>
              
              {/* Legend */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#2E7D32', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#2E7D32', fontSize: '0.7rem' }}>
                    Yet to accept
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#4CAF50', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#4CAF50', fontSize: '0.7rem' }}>
                    Accepted
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Active Installation Card */}
      <Card 
        sx={{
          borderRadius: '12px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(135deg, #E3F2FD 0%, #F3F8FF 100%)',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.2s ease-in-out'
          }
        }}
        onClick={() => setShowInstallationDetails(true)}
      >
        <CardContent sx={{ padding: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1976D2',
                  marginBottom: '24px',
                  fontSize: '1rem'
                }}
              >
                Active installation
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#1976D2',
                  fontSize: '4.5rem',
                  lineHeight: 0.8,
                  marginTop: '-8px',
                  fontFamily: 'Impact, Charcoal, sans-serif'
                }}
              >
                12
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              {/* Donut Chart */}
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `conic-gradient(#1565C0 0deg 240deg, #42A5F5 240deg 360deg)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white'
                }} />
                
                {/* Numbers on the chart sections */}
                <Typography sx={{
                  position: 'absolute',
                  top: '0px',
                  left: '20%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  03
                </Typography>
                
                <Typography sx={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '2%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  02
                </Typography>
              </Box>
              
              {/* Legend */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#1565C0', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#1565C0', fontSize: '0.7rem' }}>
                    Yet to accept
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#42A5F5', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#42A5F5', fontSize: '0.7rem' }}>
                    Accepted
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Waiting for Approval Card */}
      <Card sx={{
        borderRadius: '12px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%)',
        border: 'none'
      }}>
        <CardContent sx={{ padding: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#616161',
                  marginBottom: '24px',
                  fontSize: '1rem'
                }}
              >
                Waiting for approval
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#616161',
                  fontSize: '4.5rem',
                  lineHeight: 0.8,
                  marginTop: '-8px',
                  fontFamily: 'Impact, Charcoal, sans-serif'
                }}
              >
                12
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              {/* Donut Chart */}
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `conic-gradient(#424242 0deg 240deg, #9E9E9E 240deg 360deg)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white'
                }} />
                
                {/* Numbers on the chart sections */}
                <Typography sx={{
                  position: 'absolute',
                  top: '0px',
                  left: '20%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  08
                </Typography>
                
                <Typography sx={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '2%',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  zIndex: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  04
                </Typography>
              </Box>
              
              {/* Legend */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#9E9E9E', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#9E9E9E', fontSize: '0.7rem' }}>
                    Completed
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box sx={{ width: '8px', height: '8px', background: '#424242', borderRadius: '2px' }} />
                  <Typography variant="caption" sx={{ color: '#424242', fontSize: '0.7rem' }}>
                    Forwarded
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Completed Card */}
      <Card sx={{
        borderRadius: '12px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #E0F2F1 0%, #F0F9F8 100%)',
        border: 'none'
      }}>
        <CardContent sx={{ padding: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#00695C',
                  fontSize: '1rem'
                }}
              >
                Completed
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#00695C',
                fontSize: '4.5rem',
                lineHeight: 0.8,
                marginTop: '-8px',
                fontFamily: 'Impact, Charcoal, sans-serif'
              }}
            >
              09
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WorkScreen
