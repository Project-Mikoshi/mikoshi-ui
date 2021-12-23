import React from 'react'
import './style.scss'
import {
  Link
} from 'react-router-dom'
import { AppBar, Zoom } from '@material-ui/core'

export interface RouteData {
  label: string,
  route: string
}

export default function NavBar (props: {routes: Array<RouteData>}) {
  const { routes } = props

  return (
    <Zoom in={true}>
      <AppBar className='nav-bar' variant='elevation'>
        {routes.map((route: RouteData) => (
          <Link to={route.route} key={route.route}>{route.label}</Link>)
        )}
      </AppBar>  
    </Zoom>
  )
}
