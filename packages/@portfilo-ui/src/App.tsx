import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import NavBar from 'components/nav-bar/component'
import ParticlesBackground from 'components/particle-effect/component'
import Projects from 'pages/projects/page'
import Dashboard  from 'pages/dashboard/page'
import Skills from 'pages/skills/page'
import Contact from 'pages/contact/page'
import { ROUTE } from 'constants/route'
import { getCurrentRoute } from 'utils'

export default function App () {
  const { HOME, SKILLS, WORKS, CONTACT } = ROUTE
  const [currentRoute, setCurrentRoute] = React.useState(getCurrentRoute() ?? ROUTE.HOME.route)

  const onRouteChange = (newRoute: string) => setCurrentRoute(newRoute)

  return (
    <div className='app'>
      <Router>
        <NavBar routes={[HOME, SKILLS, WORKS, CONTACT]} currentRoute={currentRoute} onRouteChange={onRouteChange}/>
        <ParticlesBackground />
        <Routes>
          <Route path='/' element={<Navigate replace to={ROUTE.HOME.route} />} />
          <Route path={ROUTE.HOME.route} element={<Dashboard onRouteChange={onRouteChange} />} />
          <Route path={ROUTE.SKILLS.route} element={<Skills />} />
          <Route path={ROUTE.WORKS.route} element={<Projects />} />
          <Route path={ROUTE.CONTACT.route} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}
