import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { AuthProvider } from '@/dpms/auth/AuthProvider'
import Login from '@/dpms/pages/Login'
import Dashboard from '@/dpms/pages/Dashboard'
import PatientDetail from '@/dpms/pages/PatientDetail'
import SidebarLayout from '@/dpms/components/SidebarLayout'
import WebsiteAppointments from '@/dpms/pages/WebsiteAppointments'

// Modern Premium Theme (same as original DPMS)
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#EC4899',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 16px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          marginBottom: '8px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
})

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem('access_token')
  return token ? children : <Navigate to="/admin/login" replace />
}

export default function DPMSApp() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SidebarLayout>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="patients/:patient_id" element={<PrivateRoute><PatientDetail /></PrivateRoute>} />
            <Route path="website-appointments" element={<PrivateRoute><WebsiteAppointments /></PrivateRoute>} />
          </Routes>
        </SidebarLayout>
      </ThemeProvider>
    </AuthProvider>
  )
}
