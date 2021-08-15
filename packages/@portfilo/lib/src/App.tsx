import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import ProjectCardDemo from 'demo/ProjectCard/page'

export default function App () {
  return (
    <div className="app">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Router>
        <AppBar className='demo-app-bar' variant='elevation'>    
          <Link to='/'>Home</Link>
          <Link to='project-card-demo'>Project Card Demo</Link>
        </AppBar>  

        <Switch>
          <Route path='/project-card-demo'>
            <ProjectCardDemo />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
