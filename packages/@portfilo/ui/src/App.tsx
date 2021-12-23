import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar, { RouteData } from 'components/NavBar/component'
import ProjectCardDemo from 'demo/ProjectCard/page'

const demoRoutes: Array<RouteData> = [
  {label: 'Home', route: '/'},
  {label: 'Project Card Demo', route: 'project-card-demo'}
]

export default function App () {
  return (
    <div className="app">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Router>
        <NavBar routes={demoRoutes} />

        <Switch>
          <Route path='/project-card-demo'>
            <ProjectCardDemo />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
