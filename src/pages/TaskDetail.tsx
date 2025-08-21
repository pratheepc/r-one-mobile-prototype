import { useState, useEffect } from 'react'
import { 
  Box, 
  Typography, 
  IconButton, 
  Tabs, 
  Tab, 
  Card, 
  CardContent, 
  Chip, 
  TextField, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronLeft,
  faInfoCircle,
  faShareAlt,
  faPlus,
  faTrash,
  faCheck,
  faPaperPlane,
  faPaperclip,
  faFilePdf,
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import MemberSelectionBottomSheet from '../components/MemberSelectionBottomSheet'
import WorklistDetailsBottomSheet from '../components/WorklistDetailsBottomSheet'

interface TaskDetailProps {
  onBack: () => void
  taskId?: string
}

function TaskDetail({ onBack, taskId = 'WID001' }: TaskDetailProps) {
  const [activeTab, setActiveTab] = useState(0)

  const [memberSheetOpen, setMemberSheetOpen] = useState(false)
  
  // Debug: Log when memberSheetOpen changes
  useEffect(() => {
    console.log('memberSheetOpen changed to:', memberSheetOpen)
  }, [memberSheetOpen])
  const [actionsMenuAnchor, setActionsMenuAnchor] = useState<null | HTMLElement>(null)
  const [selectedMembers, setSelectedMembers] = useState([
    { id: '1', name: 'Liam', initials: 'L' },
    { id: '2', name: 'Emma', initials: 'E' },
    { id: '3', name: 'Noah', initials: 'N' },
    { id: '4', name: 'Olivia', initials: 'O' }
  ])
  const [completedTasks, setCompletedTasks] = useState<number[]>([])
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false)
  const [forwardDialogOpen, setForwardDialogOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const actions = ['Submit for review', 'Forward']

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Check network connectivity & websocket connection',
      type: 'text',
      value: '123',
      completed: true
    },
    {
      id: 2,
      title: 'Inspect power cable & possible chances of nearby heat sources',
      type: 'textarea',
      value: 'Lorem ipsum dolor sit amet consectetur. Fermentum cursus elit feugiat enim vulputate.',
      completed: true
    },
    {
      id: 7,
      title: 'Verify installation requirements',
      type: 'description',
      completed: false
    },
    {
      id: 3,
      title: 'Current value',
      type: 'text',
      value: '123',
      completed: true
    },
    {
      id: 4,
      title: 'Current value',
      type: 'text',
      value: '123',
      completed: true
    },
    {
      id: 5,
      title: 'Inspect power cable & possible chances of nearby heat sources',
      type: 'radio',
      value: 'Approved',
      options: ['Approved', 'Rejected'],
      completed: true
    },
    {
      id: 6,
      title: 'Charger Installation',
      type: 'images',
      images: [
        { name: 'image_1.jpg', type: 'image', path: '/image/image_1.jpg' },
        { name: 'image_2.jpg', type: 'image', path: '/image/image_2.jpg' },
        { name: 'document.pdf', type: 'pdf', path: '/image/document.pdf' },
        { name: 'video.mp4', type: 'video', path: '/image/video.mp4' }
      ],
      completed: true
    }
  ])

  const handleMemberSelect = (member: any) => {
    setSelectedMembers(prev => {
      const isSelected = prev.some(m => m.id === member.id)
      if (isSelected) {
        return prev.filter(m => m.id !== member.id)
      } else {
        return [...prev, member]
      }
    })
  }

  const handleTaskToggle = (taskId: number) => {
    setCompletedTasks(prev => {
      if (prev.includes(taskId)) {
        return prev.filter(id => id !== taskId)
      } else {
        return [...prev, taskId]
      }
    })
  }

  const handleDeleteAttachment = (taskId: number, fileIndex: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId && task.type === 'images' && task.images) {
        return {
          ...task,
          images: task.images.filter((_: any, index: number) => index !== fileIndex)
        }
      }
      return task
    }))
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollY(event.currentTarget.scrollTop)
  }



  const renderTaskInput = (task: any) => {
    switch (task.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={task.value}
            sx={{
              marginTop: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
              }
            }}
          />
        )
      case 'textarea':
        return (
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            size="small"
            value={task.value}
            sx={{
              marginTop: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
              }
            }}
          />
        )
      case 'radio':
        return (
          <RadioGroup
            value={task.value}
            sx={{ marginTop: '8px' }}
          >
            {task.options.map((option: string) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',
                    color: '#333'
                  }
                }}
              />
            ))}
          </RadioGroup>
        )
      case 'images':
        return (
          <Box sx={{ marginTop: '8px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
              <Box sx={{ 
                display: 'flex', 
                gap: '12px', 
                overflowX: 'auto',
                flex: 1,
                paddingBottom: '8px',
                paddingRight: '8px',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                '&::-webkit-scrollbar': {
                  height: '6px'
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px',
                  margin: '0 4px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#E23151',
                  borderRadius: '3px',
                  '&:hover': {
                    background: '#d42a47'
                  }
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#d42a47'
                },
                '&::-webkit-scrollbar-corner': {
                  background: 'transparent'
                }
              }}>
                {task.images.map((file: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'relative',
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden'
                    }}
                  >
                    {file.type === 'image' ? (
                      <img 
                        src={file.path} 
                        alt={file.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    ) : (
                      <Box sx={{ textAlign: 'center' }}>
                        <FontAwesomeIcon 
                          icon={file.type === 'pdf' ? faFilePdf : faVideo} 
                          style={{ 
                            fontSize: '1.5rem', 
                            color: file.type === 'pdf' ? '#E23151' : '#1976D2',
                            marginBottom: '4px'
                          }} 
                        />
                        <Typography sx={{ fontSize: '0.6rem', color: '#666', lineHeight: 1 }}>
                          {file.name.split('.')[0]}
                        </Typography>
                      </Box>
                    )}
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteAttachment(task.id, index)}
                      sx={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        width: '20px',
                        height: '20px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} style={{ fontSize: '0.7rem', color: '#E23151' }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
              {/* Gradient fade indicator for scroll */}
              <Box
                sx={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  width: '20px',
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.8))',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
              <Box
                sx={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#FFF5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#FFE6E6'
                  }
                }}
              >
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', color: '#E23151' }} />
              </Box>
            </Box>
          </Box>
        )
      case 'description':
        return (
          <Box sx={{ marginTop: '8px' }}>
            <Typography sx={{ 
              fontSize: '0.85rem', 
              color: '#666',
              lineHeight: 1.5
            }}>
              {task.description}
            </Typography>
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      background: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1
    }}>
      {/* Top Bar */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        marginTop: '72px'
      }}>
        {/* Back Button Row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          width: '100%'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1.2rem', color: '#E23151' }} />
            <Typography sx={{ color: '#E23151', fontSize: '0.9rem' }}>Back</Typography>
          </Box>
        </Box>

        {/* Work ID Row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-start',
          width: '100%',
          marginBottom: '-18px'
        }}>
          <Typography sx={{ color: '#E23151', fontSize: '0.7rem', fontWeight: 600 }}>
            {taskId}
          </Typography>
        </Box>

        {/* Heading and Actions Row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Typography sx={{ color: '#333', fontSize: '1.2rem', fontWeight: 600 }}>
            Installation plan
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e0e0e0',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f8f8f8',
                borderColor: '#d0d0d0'
              }
            }} onClick={(e) => setActionsMenuAnchor(e.currentTarget)}>
              <Typography sx={{ color: '#000000', fontSize: '0.9rem', fontWeight: 500 }}>Actions</Typography>
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '0.8rem', color: '#000000', transform: 'rotate(-90deg)' }} />
            </Box>
            <IconButton sx={{ color: '#666666', padding: '8px' }} onClick={() => setDetailsOpen(true)}>
              <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton sx={{ color: '#666666', padding: '0px' }}>
              <FontAwesomeIcon icon={faShareAlt} style={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Animated Project Overview Card */}
      <Box sx={{ 
        padding: '16px',
        paddingTop: '0px',
        marginTop: '-8px',
        opacity: scrollY > 50 ? 0 : 1,
        maxHeight: scrollY > 50 ? 0 : '200px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: scrollY > 50 ? 'none' : 'auto',
        transform: scrollY > 50 ? 'translateY(-20px)' : 'translateY(0)'
      }}>
        <Card sx={{
          borderRadius: '12px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          border: 'none',
          backgroundColor: 'white'
        }}>
          <CardContent sx={{ padding: '4px 12px' }}>
            {/* Schedule Section */}
            <Box sx={{ marginBottom: '0px' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#666', marginBottom: '2px' }}>
                Schedule
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#000000', fontWeight: 500 }}>
                12 November 2024 - 13 November 2024
              </Typography>
            </Box>
            
            {/* Stage Section */}
            <Box sx={{ marginBottom: '8px' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#666', marginBottom: '2px' }}>
                Stage
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#E23151', fontWeight: 500 }}>
                Survey
              </Typography>
            </Box>

            {/* Members Section */}
            <Box>
              <Typography sx={{ fontSize: '0.8rem', color: '#666', marginBottom: '4px' }}>
                Members
              </Typography>
              <Box sx={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {selectedMembers.map((member) => (
                  <Chip 
                    key={member.id}
                    label={member.name} 
                    size="small" 
                    sx={{ 
                      backgroundColor: '#FFF5F5', 
                      color: '#E23151', 
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      height: '24px'
                    }} 
                  />
                ))}
                <IconButton 
                  size="small" 
                  sx={{ 
                    color: '#E23151', 
                    padding: '4px',
                    backgroundColor: '#FFF5F5',
                    borderRadius: '12px',
                    width: '24px',
                    height: '24px',
                    '&:hover': {
                      backgroundColor: '#FFE6E6'
                    }
                  }}
                  onClick={() => {
                    console.log('Plus button clicked, setting memberSheetOpen to true')
                    setMemberSheetOpen(true)
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '0.7rem' }} />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Sticky Tabs - Now positioned below the details card */}
      <Box sx={{ 
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 10,
        borderBottom: '1px solid #f0f0f0',
        padding: '0 16px',
        transition: 'all 0.3s ease'
      }}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
              width: '100%',
              '& .MuiTabs-flexContainer': {
                width: '100%'
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                flex: 1,
                minWidth: 'auto',
                padding: '12px 0',
                color: '#666'
              },
              '& .Mui-selected': {
                color: '#E23151',
                backgroundColor: '#FFF5F5'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#E23151'
              }
            }}
          >
            <Tab label="Tasks" />
            <Tab label="Comments" />
          </Tabs>
        </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Scrollable Content */}
        <Box sx={{ 
          flex: 1, 
          overflow: 'auto', 
          padding: '0 16px 16px 16px'
        }} onScroll={handleScroll}>
          {activeTab === 0 ? (
            /* Task List */
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {tasks.map((task) => (
                <Card key={task.id} sx={{
                  borderRadius: '12px',
                  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
                  border: 'none',
                  position: 'relative'
                }}>
                  <CardContent sx={{ padding: '16px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          {task.title}
                        </Typography>
                        {renderTaskInput(task)}
                      </Box>
                      {task.type === 'description' && (
                        <Box 
                          onClick={() => handleTaskToggle(task.id)}
                          sx={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: completedTasks.includes(task.id) ? '#E23151' : 'transparent',
                            border: '2px solid #E23151',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginLeft: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: completedTasks.includes(task.id) ? 'scale(1.1)' : 'scale(1)',
                            '&:hover': {
                              transform: completedTasks.includes(task.id) ? 'scale(1.15)' : 'scale(1.05)',
                              backgroundColor: completedTasks.includes(task.id) ? '#d32f2f' : 'rgba(226, 49, 81, 0.1)'
                            }
                          }}
                        >
                          {completedTasks.includes(task.id) && (
                            <FontAwesomeIcon 
                              icon={faCheck} 
                              style={{ 
                                fontSize: '0.8rem', 
                                color: 'white',
                                animation: 'fadeInScale 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                              }} 
                            />
                          )}
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            /* Comments Section */
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Comments List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              {/* Comment 1 - Mathew (Oldest) */}
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <Box sx={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Typography sx={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>M</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                    Mathew reassigned the work
                  </Typography>
                  <Box sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '4px'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                      Replaced the SDR module and rebooted the charger. The charger is working fine now
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#999', textAlign: 'right' }}>
                    28 May 2024, 09:30 AM
                  </Typography>
                </Box>
              </Box>

              {/* Comment 2 - John Abraham */}
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <Box sx={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#E91E63',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Typography sx={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>J</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                    John Abraham
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>
                    Replaced the SDR module
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: '#999', textAlign: 'right' }}>
                    28 May 2024, 10:15 AM
                  </Typography>
                </Box>
              </Box>

              {/* Comment 3 - Mathew */}
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <Box sx={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Typography sx={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>M</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                    Mathew reassigned the work
                  </Typography>
                  <Box sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '4px'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                      Swapped out the SDR module and rebooted the charger. It's working great now!
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#999', textAlign: 'right' }}>
                    28 May 2024, 11:45 AM
                  </Typography>
                </Box>
              </Box>

              {/* Comment 4 - John Abraham (Latest) */}
              <Box sx={{ display: 'flex', gap: '12px' }}>
                <Box sx={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#E91E63',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Typography sx={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>J</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                    John Abraham
                  </Typography>
                  <Box sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '4px'
                  }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                    Changed the SDR module and rebooted the charger. Everything's running smoothly now!
                  </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#999', textAlign: 'right' }}>
                    28 May 2024, 02:30 PM
                  </Typography>
                </Box>
              </Box>
              </Box>
            </Box>
          )}
        </Box>

        {/* Comment Input Box - Only show when Comments tab is active */}
        {activeTab === 1 && (
          <Box sx={{ 
            padding: '16px', 
            borderTop: '1px solid #f0f0f0',
            backgroundColor: 'white',
            flexShrink: 0,
            marginBottom: '32px',
            opacity: scrollY > 50 ? 0 : 1,
            maxHeight: scrollY > 50 ? 0 : '80px',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: scrollY > 50 ? 'none' : 'auto',
            transform: scrollY > 50 ? 'translateY(20px)' : 'translateY(0)'
          }}>
            <Box sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center'
            }}>
              <TextField
                fullWidth
                placeholder="Type your comment..."
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton 
                      size="small"
                      sx={{ 
                        color: '#666',
                        padding: '4px',
                        '&:hover': {
                          color: '#E23151'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faPaperclip} style={{ fontSize: '0.9rem' }} />
                    </IconButton>
                  )
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                    backgroundColor: '#f8f9fa',
                    '& fieldset': {
                      borderColor: 'transparent'
                    },
                    '&:hover fieldset': {
                      borderColor: '#e0e0e0'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E23151'
                    }
                  }
                }}
              />
                          <IconButton 
              sx={{ 
                backgroundColor: '#E23151', 
                color: 'white',
                padding: '12px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                '&:hover': {
                  backgroundColor: '#d32f2f'
                }
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '1rem' }} />
            </IconButton>
            </Box>
          </Box>
        )}
      </Box>

      {/* Submit Button */}
      <Box sx={{ padding: '16px', borderTop: '1px solid #f0f0f0' }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#E23151',
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#d32f2f'
            }
          }}
        >
          Submit for review
        </Button>
      </Box>

      {/* Actions Menu */}
      <Menu
        anchorEl={actionsMenuAnchor}
        open={Boolean(actionsMenuAnchor)}
        onClose={() => setActionsMenuAnchor(null)}
        PaperProps={{
          sx: {
            marginTop: '4px',
            borderRadius: '6px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            minWidth: '140px',
            border: '1px solid #e0e0e0'
          }
        }}
      >
        {actions.map((action) => (
          <MenuItem
            key={action}
            onClick={() => {
                              setActionsMenuAnchor(null)
                // Handle the action here
                if (action === 'Submit for review') {
                  setSubmitDialogOpen(true)
                } else if (action === 'Forward') {
                  setForwardDialogOpen(true)
                }
            }}
            sx={{
              fontSize: '0.9rem',
              padding: '10px 16px',
              '&:hover': {
                backgroundColor: '#f8f8f8'
              },
              '&.Mui-selected': {
                backgroundColor: '#E23151',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#E23151'
                }
              }
            }}
          >
            {action}
          </MenuItem>
        ))}
      </Menu>

      {/* Submit Confirmation Dialog */}
      <Dialog
        open={submitDialogOpen}
        onClose={() => setSubmitDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            maxWidth: '320px',
            width: '90%'
          }
        }}
      >
        <DialogTitle sx={{ 
          fontSize: '1.1rem', 
          fontWeight: 600, 
          color: '#333',
          padding: '20px 20px 8px 20px'
        }}>
          Confirm Submit
        </DialogTitle>
        <DialogContent sx={{ padding: '8px 20px 20px 20px' }}>
          <Typography sx={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
            Are you sure you want to submit this worklist for review?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ padding: '0 20px 20px 20px', gap: '8px' }}>
          <Button
            variant="outlined"
            onClick={() => setSubmitDialogOpen(false)}
            sx={{
              color: '#E23151',
              borderColor: '#E23151',
              textTransform: 'none',
              fontSize: '0.9rem',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#FFF5F5',
                borderColor: '#E23151'
              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setSubmitDialogOpen(false)
              // Handle actual submission here
              console.log('Worklist submitted for review')
            }}
            variant="contained"
            sx={{
              background: '#E23151 !important',
              backgroundColor: '#E23151 !important',
              color: 'white !important',
              textTransform: 'none',
              fontSize: '0.9rem',
              padding: '8px 16px',
              '&:hover': {
                background: '#d32f2f !important',
                backgroundColor: '#d32f2f !important'
              },
              '&.MuiButton-contained': {
                background: '#E23151 !important',
                backgroundColor: '#E23151 !important'
              },
              '&::before': {
                display: 'none !important'
              }
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Forward Confirmation Dialog */}
      <Dialog
        open={forwardDialogOpen}
        onClose={() => setForwardDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            maxWidth: '320px',
            width: '90%'
          }
        }}
      >
        <DialogTitle sx={{ 
          fontSize: '1.1rem', 
          fontWeight: 600, 
          color: '#333',
          padding: '20px 20px 8px 20px'
        }}>
          Confirm Forward
        </DialogTitle>
        <DialogContent sx={{ padding: '8px 20px 20px 20px' }}>
          <Typography sx={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
            Are you sure you want to forward this worklist?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ padding: '0 20px 20px 20px', gap: '8px' }}>
          <Button
            variant="outlined"
            onClick={() => setForwardDialogOpen(false)}
            sx={{
              color: '#E23151',
              borderColor: '#E23151',
              textTransform: 'none',
              fontSize: '0.9rem',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#FFF5F5',
                borderColor: '#E23151'
              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setForwardDialogOpen(false)
              // Navigate back to InstallationChecklist
              onBack()
            }}
            variant="contained"
            sx={{
              background: '#E23151 !important',
              backgroundColor: '#E23151 !important',
              color: 'white !important',
              textTransform: 'none',
              fontSize: '0.9rem',
              padding: '8px 16px',
              '&:hover': {
                background: '#d32f2f !important',
                backgroundColor: '#d32f2f !important'
              },
              '&.MuiButton-contained': {
                background: '#E23151 !important',
                backgroundColor: '#E23151 !important'
              },
              '&::before': {
                display: 'none !important'
              }
            }}
          >
            Forward
          </Button>
        </DialogActions>
      </Dialog>

      {/* Worklist Details Bottom Sheet */}
      <WorklistDetailsBottomSheet 
        open={detailsOpen} 
        onClose={() => setDetailsOpen(false)} 
      />

      {/* Member Selection Bottom Sheet */}
      <MemberSelectionBottomSheet
        open={memberSheetOpen}
        onClose={() => setMemberSheetOpen(false)}
        onMemberSelect={handleMemberSelect}
        selectedMembers={selectedMembers}
      />
    </Box>
  )
}

export default TaskDetail
