import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  IconButton, 
  TextField, 
  Chip,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTimes,
  faSearch,
  faCheck,
  faUser,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

interface Member {
  id: string
  name: string
  avatar?: string
  initials?: string
  isSelected?: boolean
}

interface MemberSelectionBottomSheetProps {
  open: boolean
  onClose: () => void
  onMemberSelect: (member: Member) => void
  selectedMembers: Member[]
}

function MemberSelectionBottomSheet({ 
  open, 
  onClose, 
  onMemberSelect, 
  selectedMembers 
}: MemberSelectionBottomSheetProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const allMembers: Member[] = [
    { id: '1', name: 'Rohit Kumar', initials: 'RK' },
    { id: '2', name: 'Priya Sharma', initials: 'PS' },
    { id: '3', name: 'Amit Patel', initials: 'AP' },
    { id: '4', name: 'Neha Singh', initials: 'NS' },
    { id: '5', name: 'Rajesh Verma', initials: 'RV' },
    { id: '6', name: 'Kavya Reddy', initials: 'KR' },
    { id: '7', name: 'Vikram Malhotra', initials: 'VM' },
    { id: '8', name: 'Anjali Desai', initials: 'AD' },
    { id: '9', name: 'Suresh Iyer', initials: 'SI' },
    { id: '10', name: 'Arjun Mehta', initials: 'AM' },
    { id: '11', name: 'Zara Khan', initials: 'ZK' },
    { id: '12', name: 'Rahul Gupta', initials: 'RG' },
    { id: '13', name: 'Ishita Joshi', initials: 'IJ' },
    { id: '14', name: 'Aditya Singh', initials: 'AS' },
    { id: '15', name: 'Maya Kapoor', initials: 'MK' },
    { id: '16', name: 'Vivek Sharma', initials: 'VS' },
    { id: '17', name: 'Tanvi Patel', initials: 'TP' },
    { id: '18', name: 'Karan Malhotra', initials: 'KM' },
    { id: '19', name: 'Aisha Reddy', initials: 'AR' },
    { id: '20', name: 'Rohan Desai', initials: 'RD' },
    { id: '21', name: 'Nisha Verma', initials: 'NV' },
    { id: '22', name: 'Dhruv Kumar', initials: 'DK' },
    { id: '23', name: 'Pooja Sharma', initials: 'PS' },
    { id: '24', name: 'Aryan Singh', initials: 'AS' },
    { id: '25', name: 'Kiara Patel', initials: 'KP' },
    { id: '26', name: 'Shaurya Gupta', initials: 'SG' },
    { id: '27', name: 'Ananya Joshi', initials: 'AJ' },
    { id: '28', name: 'Vedant Malhotra', initials: 'VM' },
    { id: '29', name: 'Riya Kapoor', initials: 'RK' },
    { id: '30', name: 'Arnav Reddy', initials: 'AR' }
  ]

  const filteredMembers = allMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleMemberClick = (member: Member) => {
    onMemberSelect(member)
  }

  const removeSelectedMember = (memberId: string) => {
    const member = selectedMembers.find(m => m.id === memberId)
    if (member) {
      onMemberSelect(member) // This will toggle selection
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <Box sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        maxHeight: '80vh',
        backgroundColor: 'white',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden'
      }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        maxHeight: '80vh'
      }}>
        {/* Fixed Header Section */}
        <Box sx={{ 
          padding: '20px 20px 0 20px',
          flexShrink: 0
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
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <Typography sx={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#333'
            }}>
              Assignee
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                color: '#666',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              <FontAwesomeIcon icon={faTimes} style={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>

          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Search people"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <FontAwesomeIcon 
                  icon={faSearch} 
                  style={{ 
                    fontSize: '1rem', 
                    color: '#666',
                    marginRight: '8px'
                  }} 
                />
              )
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
              }
            }}
          />

          {/* Selected Members Section */}
          {selectedMembers.length > 0 && (
            <Box sx={{ marginBottom: '20px' }}>
              <Typography sx={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#666',
                marginBottom: '12px',
                textTransform: 'uppercase'
              }}>
                Selected
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedMembers.map((member) => (
                  <Chip
                    key={member.id}
                    avatar={
                      <Avatar sx={{ 
                        backgroundColor: '#E23151', 
                        color: 'white',
                        fontSize: '0.8rem',
                        width: '24px',
                        height: '24px'
                      }}>
                        {member.initials}
                      </Avatar>
                    }
                    label={member.name}
                    onDelete={() => removeSelectedMember(member.id)}
                    deleteIcon={<FontAwesomeIcon icon={faXmark} style={{ fontSize: '0.8rem', color: '#E23151' }} />}
                    sx={{
                      backgroundColor: '#FFF5F5',
                      color: '#E23151',
                      border: '1px solid #E23151',
                      '& .MuiChip-deleteIcon': {
                        color: '#E23151'
                      },
                      '&:hover': {
                        backgroundColor: '#FFE6E6'
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* Scrollable Suggestions Section */}
        <Box sx={{ 
          flex: 1,
          overflow: 'hidden',
          padding: '0 20px 20px 20px'
        }}>
          <Typography sx={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#666',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            Suggestions
          </Typography>
          <Box sx={{ 
            maxHeight: 'calc(80vh - 200px)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            <List sx={{ padding: 0 }}>
              {filteredMembers.map((member) => {
                const isSelected = selectedMembers.some(m => m.id === member.id)
                return (
                  <ListItem
                    key={member.id}
                    button
                    onClick={() => handleMemberClick(member)}
                    sx={{
                      padding: '12px 0',
                      borderRadius: '8px',
                      marginBottom: '4px',
                      '&:hover': {
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ 
                        backgroundColor: isSelected ? '#E23151' : '#e0e0e0',
                        color: 'white',
                        fontSize: '0.8rem',
                        width: '32px',
                        height: '32px'
                      }}>
                        {member.initials}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={member.name}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                          color: '#333',
                          fontWeight: isSelected ? 600 : 400
                        }
                      }}
                    />
                    {isSelected && (
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        style={{ 
                          fontSize: '1rem', 
                          color: '#E23151' 
                        }} 
                      />
                    )}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Box>
              </Box>
      </Box>
    </Modal>
  )
}

export default MemberSelectionBottomSheet
