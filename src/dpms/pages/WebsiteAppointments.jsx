import React, { useState, useEffect } from 'react'
import {
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button, Chip, CircularProgress, Alert
} from '@mui/material'
import api from '@/dpms/api'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { 
  Refresh as RefreshIcon,
  PlayArrow as PlayArrowIcon,
  Cancel as CancelIcon,
  PersonOff as PersonOffIcon
} from '@mui/icons-material'

const STATUS_OPTIONS = ['New', 'Confirmed', 'Consultation Started', 'Completed', 'Cancelled', 'No Show']

export default function WebsiteAppointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const fetchAppointments = async () => {
    setLoading(true)
    try {
      // Fetch specifically website appointments
      const res = await api.get('/api/appointments?source=Website&per_page=100')
      setAppointments(res.data.items || [])
    } catch (err) {
      setError('Failed to fetch website appointments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/appointments/${id}`, { status })
      setAppointments(appointments.map(a => a._id === id ? { ...a, status } : a))
    } catch (err) {
      alert('Failed to update status')
    }
  }

  const startConsultation = async (appt) => {
    try {
      if (appt.status !== 'Consultation Started') {
        await api.put(`/api/appointments/${appt._id}`, { status: 'Consultation Started' })
      }
      
      // Since existing patients bypass Website Appointments, 
      // everything here should route to the New Patient Registration form.
      navigate('/admin', {
        state: {
          openRegistration: true,
          mode: appt.consultation_type === 'clinic' || appt.consultation_type === 'walk_in' ? 'offline' : 'online',
          appointment: appt
        }
      })
    } catch (e) {
      alert('Failed to start consultation')
    }
  }

  if (loading) return <Box p={4} display="flex" justifyContent="center"><CircularProgress /></Box>

  return (
    <Box>
      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
          🌐 Website Appointments
        </Typography>
        <Button variant="outlined" onClick={fetchAppointments}>Refresh</Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, border: '1px solid #e2e8f0' }}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead sx={{ bgcolor: '#f8fafc' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Booking Time</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Patient</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Appointment Time</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600, align: 'right' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#64748b' }}>
                  No website appointments found
                </TableCell>
              </TableRow>
            ) : (
              appointments.map((appt) => (
                <TableRow key={appt._id} hover>
                  <TableCell>
                    <Typography variant="body2">{dayjs(appt.created_at).format('DD MMM YYYY')}</Typography>
                    <Typography variant="caption" color="text.secondary">{dayjs(appt.created_at).format('h:mm A')}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{appt.patient_name || 'Unknown'}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {appt.age ? `${appt.age}y` : ''} {appt.gender ? `• ${appt.gender}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{appt.phone || '-'}</Typography>
                    <Typography variant="caption" color="text.secondary">{appt.email || '-'}</Typography>
                  </TableCell>
                  <TableCell>
                    {appt.date_time === 'Pending' ? (
                      <Chip size="small" label="Pending" color="warning" />
                    ) : (
                      <>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{dayjs(appt.date_time).format('DD MMM YYYY')}</Typography>
                        <Typography variant="caption" color="text.secondary">{dayjs(appt.date_time).format('h:mm A')}</Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={appt.consultation_type === 'walk_in' ? 'Clinic Visit' : 'Online Consultation'} 
                      size="small" 
                      color={appt.consultation_type === 'walk_in' ? 'primary' : 'secondary'} 
                      variant="outlined" 
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={appt.status || 'New'} 
                      size="small" 
                      color={
                        appt.status === 'Completed' ? 'success' :
                        appt.status === 'Cancelled' ? 'error' :
                        appt.status === 'No Show' ? 'warning' :
                        appt.status === 'Consultation Started' ? 'info' : 'default'
                      }
                      sx={{ fontWeight: 600 }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box display="flex" gap={1} justifyContent="flex-end">
                      <Button 
                        variant="contained" 
                        color="primary"
                        size="small" 
                        startIcon={<PlayArrowIcon />}
                        onClick={() => startConsultation(appt)}
                        sx={{ textTransform: 'none', borderRadius: 1.5, background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
                      >
                        Start
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="warning"
                        size="small" 
                        onClick={() => updateStatus(appt._id, 'No Show')}
                        sx={{ textTransform: 'none', borderRadius: 1.5, minWidth: 0, px: 1 }}
                        title="Mark No Show"
                      >
                        <PersonOffIcon fontSize="small" />
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="error"
                        size="small" 
                        onClick={() => updateStatus(appt._id, 'Cancelled')}
                        sx={{ textTransform: 'none', borderRadius: 1.5, minWidth: 0, px: 1 }}
                        title="Cancel Appointment"
                      >
                        <CancelIcon fontSize="small" />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
