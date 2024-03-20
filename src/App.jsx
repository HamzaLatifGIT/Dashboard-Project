import React from 'react'
import { Routes , Route } from 'react-router-dom'

// MUI :
import { ThemeProvider } from '@mui/material'
import MainTheme from "./Theme/MainTheme"

// Pages :
import Dashboard from "Pages/Dashboard"





const App = () => {

  return (
   <>
   <ThemeProvider theme={MainTheme}>
    <Routes>
      <Route path='/*' element={<Dashboard/>} />
    </Routes>
   </ThemeProvider>
   </>
  )
}

export default App
