import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
// FIXME: this is a hack to get the build working with esm and rollup, remove it if there's a proper fix
window.React = React
