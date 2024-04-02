import React from 'react'
import { Routes, Route } from 'react-router-dom'

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





const App = () => {

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
          <Route path='dashboard/*' element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
