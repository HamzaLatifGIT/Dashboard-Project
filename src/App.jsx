import React from 'react'
import { Routes, Route } from 'react-router-dom'

// MUI :
import { ThemeProvider } from '@mui/material'
import MainTheme from "./Theme/MainTheme"

// Pages :
import Dashboard from "Pages/Dashboard"
import Login from 'Pages/Auth/Login'
import Signup from 'Pages/Auth/Register'





const App = () => {

  return (
    <>
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
