import React from 'react'
import 'app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NavBar from 'components/nav-bar/component'
import Projects from 'routes/projects/page'
import Dashboard  from 'routes/dashboard/page'
import Skills from 'routes/skills/page'
import Contact from 'routes/contact/page'
import { ROUTE } from 'constants/route'
import { getCurrentRoute } from 'utils'

export default function App () {
  const {HOME, ABOUT, WORKS, CONTACT} = ROUTE
  const [currentRoute, setCurrentRoute] = React.useState(getCurrentRoute() ?? ROUTE.HOME.route)

  const onRouteChange = (newRoute: string) => setCurrentRoute(newRoute)

  return (
    <div className='app'>
      <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
      <Router>
        <NavBar routes={[HOME, ABOUT, WORKS, CONTACT]} currentRoute={currentRoute} onRouteChange={onRouteChange}/>

        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/about' />)}></Route>
          <Route path={['/about']} >
            <Dashboard onRouteChange={onRouteChange} />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
