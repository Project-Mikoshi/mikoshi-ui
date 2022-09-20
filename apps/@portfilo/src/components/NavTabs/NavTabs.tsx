import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from '@mikoshi/core-components'
import { RouteData } from 'types/route'

interface NavTabsProps {
    routes: Array<RouteData>,
    onRouteChange: (_route: string) => void,
    currentRoute?: string
}

export const NavTabs: FC<NavTabsProps> = (props: NavTabsProps) => {
  const { routes, currentRoute, onRouteChange } = props

  return (
    <Tabs selected={currentRoute}>
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
