import { useState } from 'react'
import { Box, Typography, Card, CardContent, Chip, IconButton, Tabs, Tab, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronLeft, 
  faInfoCircle, 
  faShare, 
  faThumbsUp, 
  faShareAlt,
  faPaperclip,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import DetailsBottomSheet from '../components/DetailsBottomSheet'
import TaskDetail from './TaskDetail'

interface Task {
  id: string
  title: string
  timeline: string
  assignedTo: string[]
}

function InstallationChecklist({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedProject, setSelectedProject] = useState('PRJ001')
  const [projectMenuAnchor, setProjectMenuAnchor] = useState<null | HTMLElement>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [forwardDialogOpen, setForwardDialogOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<string>('')
  const [acceptAnimId, setAcceptAnimId] = useState<string>('')
  const [showTaskDetail, setShowTaskDetail] = useState(false)
  const [selectedTaskForDetail, setSelectedTaskForDetail] = useState<Task | null>(null)
  const [activeActivityTab, setActiveActivityTab] = useState('all')
  const [commentText, setCommentText] = useState('')
  const showShare = false

  const projects = [
    'PRJ001',
    'PRJ002', 
    'PRJ003',
    'PRJ004',
    'PRJ005'
  ]

  const tasks: Task[] = [
    {
      id: 'WID001',
      title: 'Survey',
      timeline: '23/04/2025 - 24/05/2025',
      assignedTo: ['Isla', 'Sofia', 'Zara', 'Ethan']
    },
    {
      id: 'WID002',
      title: 'Installation plan',
      timeline: '01/05/2025 - 15/06/2025',
      assignedTo: ['Liam', 'Emma', 'Noah', 'Olivia']
    },
    {
      id: 'WID003',
      title: 'Electrical',
      timeline: '20/05/2025 - 30/06/2025',
      assignedTo: ['Ava', 'Mason', 'Sophia', 'James']
    },
    {
      id: 'WID004',
      title: 'Canopy',
      timeline: '10/06/2025 - 20/07/2025',
      assignedTo: ['Charlotte', 'Lucas', 'Amelia', 'Oliver']
    }
  ]

  // Activities data
  const activities = [
    {
      id: 1,
      user: 'Mathew',
      userInitial: 'M',
      userColor: '#4CAF50',
      action: 'reassigned the work',
      timestamp: '28 May 2024',
      details: 'Serial number: FHV982389 has been assigned with Cp id: 16388802, Station name: Kohapur Railway Station',
      type: 'reassignment'
    },
    {
      id: 2,
      user: 'John Abraham',
      userInitial: 'J',
      userColor: '#E91E63',
      action: 'Commented',
      timestamp: '28 May 2024',
      details: 'Replaced the SDR module',
      type: 'comment'
    },
    {
      id: 3,
      user: 'Mathew',
      userInitial: 'M',
      userColor: '#4CAF50',
      action: 'reassigned the work',
      timestamp: '28 May 2024',
      details: 'Serial number: FHV982389 has been assigned with Cp id: 16388802, Station name: Kohapur Railway Station',
      type: 'reassignment'
    },
    {
      id: 4,
      user: 'John Abraham',
      userInitial: 'J',
      userColor: '#E91E63',
      action: 'Commented',
      timestamp: '28 May 2024',
      details: 'Replaced the SDR module',
      type: 'comment'
    }
  ]

  // Comments data
  const comments = [
    {
      id: 1,
      user: 'John Abraham',
      userInitial: 'J',
      userColor: '#E91E63',
      message: 'Replaced the SDR module',
      timestamp: '28 May 2024, 2:30 PM'
    },
    {
      id: 2,
      user: 'Mathew',
      userInitial: 'M',
      userColor: '#4CAF50',
      message: 'Installation completed successfully',
      timestamp: '28 May 2024, 1:45 PM'
    },
    {
      id: 3,
      user: 'Sarah Wilson',
      userInitial: 'S',
      userColor: '#2196F3',
      message: 'Please check the wiring connections',
      timestamp: '28 May 2024, 12:20 PM'
    }
  ]

  if (showTaskDetail) {
    return <TaskDetail onBack={() => setShowTaskDetail(false)} taskId={selectedTaskForDetail?.id} />
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
      zIndex: 0
    }}>
      {/* Top Bar */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '4px 8px',
        marginTop: '72px',
        marginLeft: '8px',
        marginRight: '8px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          }} onClick={(e) => setProjectMenuAnchor(e.currentTarget)}>
            <Typography sx={{ color: '#000000', fontSize: '0.9rem', fontWeight: 500 }}>{selectedProject}</Typography>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '0.8rem', color: '#666', transform: 'rotate(-90deg)' }} />
          </Box>
        </Box>
      </Box>

      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '4px 8px',
        borderBottom: '1px solid #f0f0f0',
        marginLeft: '8px',
        marginRight: '8px'
      }}>
        <Typography sx={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: '#000000',
          flex: 1
        }}>
          Brookfields
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <IconButton sx={{ color: '#666666', padding: '8px' }} onClick={() => setDetailsOpen(true)}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '1.2rem' }} />
          </IconButton>
          {showShare && (
            <IconButton sx={{ color: '#666', padding: '8px' }}>
              <FontAwesomeIcon icon={faShareAlt} style={{ fontSize: '1.2rem' }} />
            </IconButton>
          )}
        </Box>
      </Box>



      {/* Navigation Tabs */}
      <Box sx={{ 
        borderBottom: '1px solid #f0f0f0',
        marginLeft: '8px',
        marginRight: '8px'
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
          <Tab label="Checklist" />
          <Tab label="Activities" />
        </Tabs>
      </Box>

      {/* Content Area */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'auto', 
        padding: '4px 8px',
        marginLeft: '8px',
        marginRight: '8px',
        maxHeight: 'calc(100vh - 300px)',
        '@media (max-width: 480px)': {
          maxHeight: 'calc(100vh - 280px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }
      }}>
        {activeTab === 0 ? (
          // Checklist Tab - Task List
          tasks.map((task) => (
            <Card key={task.id} sx={{
              marginBottom: '8px',
              borderRadius: '12px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.2s ease-in-out'
              }
            }} onClick={() => {
              setSelectedTaskForDetail(task)
              setShowTaskDetail(true)
            }}>
              <CardContent sx={{ padding: '12px 12px 8px 12px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    {/* Task ID */}
                    <Typography sx={{ 
                      color: '#666666', 
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '1px'
                    }}>
                      {task.id}
                    </Typography>
                    
                    {/* Task Title */}
                    <Typography sx={{ 
                      color: '#E23151', 
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      {task.title}
                    </Typography>
                    
                    {/* Timeline */}
                    <Typography sx={{ 
                      color: '#666', 
                      fontSize: '0.9rem',
                      marginBottom: '4px'
                    }}>
                      Timeline {task.timeline}
                    </Typography>
                    
                    {/* Assigned To */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <Typography sx={{ 
                        color: '#666', 
                        fontSize: '0.9rem'
                      }}>
                        Assigned to:
                      </Typography>
                      {task.assignedTo.map((person, personIndex) => (
                        <Chip
                          key={person}
                          label={person}
                          size="small"
                          sx={{
                            backgroundColor: personIndex === 0 ? '#E23151' : '#FFF5F5',
                            color: personIndex === 0 ? 'white' : '#E23151',
                            fontSize: '0.8rem',
                            height: '24px'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  {/* Action Buttons */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '6px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <IconButton 
                      sx={{ 
                        position: 'relative',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        overflow: 'visible',
                        '&:hover': {
                          backgroundColor: '#45a049'
                        },
                        '&.accept-pop': {
                          animation: 'acceptPop 300ms ease-out'
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 0,
                          height: 0,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(76, 175, 80, 0.3)'
                        },
                        '&.accept-burst::after': {
                          animation: 'acceptBurst 450ms ease-out'
                        },
                        '@keyframes acceptPop': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.15)' },
                          '100%': { transform: 'scale(1)' }
                        },
                        '@keyframes acceptBurst': {
                          '0%': { width: 0, height: 0, opacity: 0.6 },
                          '80%': { width: '64px', height: '64px', opacity: 0.2 },
                          '100%': { width: '72px', height: '72px', opacity: 0 }
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setAcceptAnimId(task.id)
                        setTimeout(() => setAcceptAnimId(''), 500)
                      }}
                      className={acceptAnimId === task.id ? 'accept-pop accept-burst' : ''}
                    >
                      <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1rem' }} />
                    </IconButton>
                    <IconButton 
                      sx={{ 
                        backgroundColor: '#FFC107',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        '&:hover': {
                          backgroundColor: '#FFB300'
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedTaskId(task.id)
                        setForwardDialogOpen(true)
                      }}
                    >
                      <FontAwesomeIcon icon={faShare} style={{ fontSize: '1rem' }} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          // Activities Tab - Activity Feed
          <Box>
            {/* Activity Filter Tabs */}
            <Box sx={{
              display: 'flex',
              backgroundColor: 'transparent',
              borderRadius: '6px',
              padding: '2px',
              marginBottom: '16px',
              gap: '16px',
              boxShadow: 'none'
            }}>
              <Box sx={{
                flex: 1,
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: activeActivityTab === 'all' ? '#E23151' : '#f5f5f5',
                color: activeActivityTab === 'all' ? 'white' : '#E23151',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer',
                borderRight: '1px solid #e0e0e0'
              }} onClick={() => setActiveActivityTab('all')}>
                All
              </Box>
              <Box sx={{
                flex: 1,
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: activeActivityTab === 'comments' ? '#E23151' : '#f5f5f5',
                color: activeActivityTab === 'comments' ? 'white' : '#E23151',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer',
                borderRight: '1px solid #e0e0e0'
              }} onClick={() => setActiveActivityTab('comments')}>
                Comments
              </Box>
              <Box sx={{
                flex: 1,
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: activeActivityTab === 'timeline' ? '#E23151' : '#f5f5f5',
                color: activeActivityTab === 'timeline' ? 'white' : '#E23151',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer'
              }} onClick={() => setActiveActivityTab('timeline')}>
                Timeline
              </Box>
            </Box>
            
            {/* Content based on active tab */}
            {activeActivityTab === 'all' && (
              // All tab - show activities
              activities.filter(activity => activity.type === 'comment' || activity.type === 'reassignment').map((activity) => (
              <Box key={activity.id} sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0',
                '&:last-child': {
                  borderBottom: 'none'
                }
              }}>
                {/* User Avatar */}
                <Box sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: activity.userColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Typography sx={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}>
                    {activity.userInitial}
                  </Typography>
                </Box>
                
                {/* Activity Content */}
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Typography sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#333'
                      }}>
                        {activity.user} {activity.type === 'comment' ? '' : activity.action}
                      </Typography>
                      {activity.type === 'comment' && (
                        <Box sx={{
                          display: 'inline-block',
                          backgroundColor: '#FFF5F5',
                          color: '#E23151',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}>
                          {activity.action}
                        </Box>
                      )}
                    </Box>
                    <Typography sx={{
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      {activity.timestamp}
                    </Typography>
                  </Box>
                  
                  <Typography sx={{
                    fontSize: '0.9rem',
                    color: '#333',
                    lineHeight: 1.4,
                    backgroundColor: activity.type === 'reassignment' ? '#f8f8f8' : 'transparent',
                    padding: activity.type === 'reassignment' ? '12px' : '0',
                    borderRadius: activity.type === 'reassignment' ? '6px' : '0'
                  }}>
                    {activity.details}
                  </Typography>
                </Box>
              </Box>
            )))}

            {activeActivityTab === 'comments' && (
              // Comments tab - show chat-like interface
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Comments List */}
                <Box sx={{ flex: 1, overflow: 'auto', paddingBottom: '16px' }}>
                  {comments.slice().reverse().map((comment) => (
                    <Box key={comment.id} sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      {/* User Avatar */}
                      <Box sx={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: comment.userColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Typography sx={{
                          color: 'white',
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>
                          {comment.userInitial}
                        </Typography>
                      </Box>
                      
                      {/* Comment Content */}
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <Typography sx={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: '#333'
                          }}>
                            {comment.user}
                          </Typography>
                          <Typography sx={{
                            fontSize: '0.75rem',
                            color: '#999'
                          }}>
                            {comment.timestamp}
                          </Typography>
                        </Box>
                        <Box sx={{
                          backgroundColor: '#f8f8f8',
                          padding: '12px',
                          borderRadius: '12px',
                          maxWidth: '80%'
                        }}>
                          <Typography sx={{
                            fontSize: '0.9rem',
                            color: '#333',
                            lineHeight: 1.4
                          }}>
                            {comment.message}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                                {/* Comment Input */}
                <Box sx={{
                  padding: '16px',
                  borderTop: '1px solid #f0f0f0',
                  backgroundColor: 'white',
                  flexShrink: 0,
                  position: 'fixed',
                  bottom: '120px',
                  left: '8px',
                  right: '8px',
                  zIndex: 1000
                }}>
                  <Box sx={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                  }}>
                    <TextField
                      fullWidth
                      placeholder="Type your comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
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
              </Box>
            )}

                                      {activeActivityTab === 'timeline' && (
              // Timeline tab - show reassignment activities only
              activities.filter(activity => activity.type === 'reassignment').map((activity) => (
                <Box key={activity.id} sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px 0',
                  borderBottom: '1px solid #f0f0f0',
                  '&:last-child': {
                    borderBottom: 'none'
                  }
                }}>
                  {/* User Avatar */}
                  <Box sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: activity.userColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Typography sx={{
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}>
                      {activity.userInitial}
                    </Typography>
                  </Box>
                  
                  {/* Activity Content */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <Typography sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#333'
                      }}>
                        {activity.user} {activity.action}
                      </Typography>
                      <Typography sx={{
                        fontSize: '0.85rem',
                        color: '#999'
                      }}>
                        {activity.timestamp}
                      </Typography>
                    </Box>
                    
                    <Typography sx={{
                      fontSize: '0.9rem',
                      color: '#333',
                      lineHeight: 1.4,
                      backgroundColor: '#f8f8f8',
                      padding: '12px',
                      borderRadius: '6px'
                    }}>
                      {activity.details}
                    </Typography>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        )}
      </Box>

      {/* Project Dropdown Menu */}
      <Menu
        anchorEl={projectMenuAnchor}
        open={Boolean(projectMenuAnchor)}
        onClose={() => setProjectMenuAnchor(null)}
        PaperProps={{
          sx: {
            marginTop: '4px',
            borderRadius: '6px',
            minWidth: '140px',
            border: '1px solid #e0e0e0'
          }
        }}
      >
        {projects.map((project) => (
          <MenuItem
            key={project}
            onClick={() => {
              setSelectedProject(project)
              setProjectMenuAnchor(null)
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
            {project}
          </MenuItem>
        ))}
      </Menu>

      {/* Details Bottom Sheet */}
      <DetailsBottomSheet 
        open={detailsOpen} 
        onClose={() => setDetailsOpen(false)} 
      />

      {/* Forward Confirmation Dialog */}
      <Dialog
        open={forwardDialogOpen}
        onClose={() => setForwardDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            maxWidth: '320px',
            width: '90%',
            margin: '16px'
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
          <Typography sx={{
            fontSize: '0.95rem',
            color: '#666',
            lineHeight: 1.4
          }}>
            Are you sure you want to forward this worklist?
          </Typography>
          {selectedTaskId && (
            <Typography sx={{
              fontSize: '0.9rem',
              color: '#E23151',
              fontWeight: 600,
              marginTop: '8px'
            }}>
              Worklist ID: {selectedTaskId}
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{
          padding: '0 20px 20px 20px',
          gap: '12px',
          justifyContent: 'center',
          display: 'flex'
        }}>
          <Button
            variant="outlined"
            onClick={() => setForwardDialogOpen(false)}
            sx={{
              color: '#E23151',
              borderColor: '#E23151',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              minWidth: '120px',
              height: '40px',
              '&:hover': {
                backgroundColor: '#FFF5F5',
                borderColor: '#E23151'
              }
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              // Handle forward action here
              console.log(`Forwarding task: ${selectedTaskId}`)
              setForwardDialogOpen(false)
              setSelectedTaskId('')
            }}
            sx={{
              background: '#E23151 !important',
              backgroundColor: '#E23151 !important',
              color: 'white !important',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              minWidth: '120px',
              height: '40px',
              borderRadius: '6px',
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
    </Box>
  )
}

export default InstallationChecklist
