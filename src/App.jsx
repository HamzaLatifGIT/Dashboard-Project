import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// MUI :
import { ThemeProvider } from '@mui/material'
import MainTheme from "./Theme/MainTheme"

// Pages :
import Dashboard from "Pages/Dashboard"
import Login from 'Pages/Auth/Login'
import Signup from 'Pages/Auth/Register'

// Helper :
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';





const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
const App = () => {

  let token = localStorage.getItem("crmToken")
  let AuthToken = token ?? null

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />

      <ThemeProvider theme={MainTheme}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='dashboard/*' element={<ProtectedRoute user={AuthToken}> <Dashboard /></ProtectedRoute>} />
          <Route path='*' element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
