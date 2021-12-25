import React from 'react'
import 'app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from 'components/nav-bar/component'
import Projects from 'routes/projects/page'
import Dashboard  from 'routes/dashboard/page'
import { ROUTE } from 'constants/route'
import { getCurrentRoute } from 'utils/route'

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
          <Route path='/about' >
            <Dashboard onRouteChange={onRouteChange} />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
