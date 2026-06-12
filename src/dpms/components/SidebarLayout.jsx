import React, { useState } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material'
import { Dashboard as DashboardIcon, Medication as MedicationIcon, Logout as LogoutIcon } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import MedicinesPanel from '@/dpms/components/MedicinesPanel'
import { useAuth } from '@/dpms/auth/AuthProvider'

const drawerWidth = 260

export default function SidebarLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [medicinesOpen, setMedicinesOpen] = useState(false)

  // Don't show layout on login page
  if (location.pathname === '/admin/login') {
    return <Box>{children}</Box>
  }

  const handleLogout = () => {
    if (auth?.logout) auth.logout()
    navigate('/admin/login')
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #e8e8f0',
            background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            color: '#fff',
          },
        }}
      >
        {/* Brand Header — real clinic logo */}
        <Box sx={{ px: 1.5, pt: 2, pb: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{
            backgroundColor: '#ffffff',
            borderRadius: 2,
            px: 1.5,
            py: 1,
            mb: 0.5,
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Box
              component="img"
              src="/clinic-logo.png"
              alt="Dr. Chauhan Clinic and Therapy Center"
              sx={{
                width: '100%',
                maxWidth: 190,
                objectFit: 'contain',
              }}
            />
          </Box>
          <Typography variant="caption" sx={{ color: '#6366F1', fontSize: '0.65rem', letterSpacing: 0.8, textAlign: 'center' }}>
            Patient Management System
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <List sx={{ px: 1, pt: 1, flexGrow: 1 }}>
          {/* Clinic Section */}
          <Box sx={{ px: 1.5, pt: 1.5, pb: 0.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#6366F1', letterSpacing: 1.5, fontSize: '0.65rem' }}>
              CLINIC
            </Typography>
          </Box>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === '/admin'}
              onClick={() => navigate('/admin')}
              sx={{
                borderRadius: '8px',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #6366F1 0%, #4f46e5 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #6366F1 0%, #4f46e5 100%)' },
                },
                '&:hover': { background: 'rgba(99,102,241,0.15)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>
                <DashboardIcon fontSize="small" sx={{ color: location.pathname === '/admin' ? '#fff' : '#94a3b8' }} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: location.pathname === '/admin' ? 600 : 400, color: location.pathname === '/admin' ? '#fff' : '#cbd5e1' }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === '/admin/website-appointments'}
              onClick={() => navigate('/admin/website-appointments')}
              sx={{
                borderRadius: '8px',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #6366F1 0%, #4f46e5 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #6366F1 0%, #4f46e5 100%)' },
                },
                '&:hover': { background: 'rgba(99,102,241,0.15)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>
                <span style={{ fontSize: '1.2rem', filter: location.pathname === '/admin/website-appointments' ? 'grayscale(0)' : 'grayscale(1)' }}>🌐</span>
              </ListItemIcon>
              <ListItemText
                primary="Website Appointments"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: location.pathname === '/admin/website-appointments' ? 600 : 400, color: location.pathname === '/admin/website-appointments' ? '#fff' : '#cbd5e1' }}
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />

          {/* Medicines Section (Available to all) */}
          <Box sx={{ px: 1.5, pb: 0.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#6366F1', letterSpacing: 1.5, fontSize: '0.65rem' }}>
              RESOURCES
            </Typography>
          </Box>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setMedicinesOpen(true)}
              sx={{
                borderRadius: '8px',
                '&:hover': { background: 'rgba(99,102,241,0.15)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>
                <MedicationIcon fontSize="small" sx={{ color: '#f87171' }} />
              </ListItemIcon>
              <ListItemText primary="Medicines" primaryTypographyProps={{ fontSize: '0.9rem', color: '#cbd5e1' }} />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Logout at bottom */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <List sx={{ px: 1, py: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                borderRadius: '8px',
                '&:hover': { background: 'rgba(239,68,68,0.15)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>
                <LogoutIcon fontSize="small" sx={{ color: '#f87171' }} />
              </ListItemIcon>
              <ListItemText primary="Logout" primaryTypographyProps={{ fontSize: '0.9rem', color: '#f87171' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#F8F9FB', minHeight: '100vh' }}>
        {children}
      </Box>

      <MedicinesPanel open={medicinesOpen} onClose={() => setMedicinesOpen(false)} />
    </Box>
  )
}
