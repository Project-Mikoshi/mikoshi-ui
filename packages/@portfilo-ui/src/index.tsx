import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'

const colorTheme = createTheme({
  palette:  {
    primary: {
      main: '#4182fd',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: '#000'
    }
  }
})

const themes = responsiveFontSizes(createTheme({
  palette: colorTheme.palette
}))

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <ThemeProvider theme={themes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
