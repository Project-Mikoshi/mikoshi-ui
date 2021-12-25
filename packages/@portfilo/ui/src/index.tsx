import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"

const colorTheme = createTheme({
  palette:  {
    primary: {
      main: "#009eef",
      contrastText: '#fff'
    },
    secondary: {
      main: "#fff",
      contrastText: '#000'
    }
  }
})

let themes = createTheme({
  palette: colorTheme.palette
})

themes = responsiveFontSizes(themes)

ReactDOM.render(
  <ThemeProvider theme={themes}>
    <React.StrictMode>     
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
