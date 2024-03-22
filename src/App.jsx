import React from 'react'
import { Routes , Route } from 'react-router-dom'

// MUI :
import { ThemeProvider } from '@mui/material'
import MainTheme from "./Theme/MainTheme"

// Pages :
import Dashboard from "Pages/Dashboard"
import Login from 'Pages/Dashboard/auth/Login'
import Signup from 'Pages/Dashboard/auth/Signup'





const App = () => {

  return (
   <>
   <ThemeProvider theme={MainTheme}>
    <Routes>
      <Route path='/*' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </ThemeProvider>
   </>
  )
}

export default App
