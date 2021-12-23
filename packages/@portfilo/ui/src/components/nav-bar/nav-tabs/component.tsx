import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Tabs,
  Tab
} from '@mui/material'
import { RouteData } from 'types/route'

export default function NavTabs (props: {routes: RouteData[], onRouteChange: (route: string) => void, currentRoute?: string}) {
  const { routes, currentRoute, onRouteChange } = props

  return (
    <Tabs value={currentRoute} textColor='primary' indicatorColor='primary'>
      {routes.map((route: RouteData) => (
        <Tab
          key={route.route}
          value={route.route}
          label={route.label}
          component={Link}
          to={route.route}
          onClick={() => {onRouteChange(route.route)}}
        />
      ))}
    </Tabs>
  )
}
