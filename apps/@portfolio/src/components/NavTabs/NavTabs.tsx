import React, { FC, useEffect, useState } from 'react'
import { Tabs, Tab } from '@mikoshi/components/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RouteData } from '@/types/route'

interface NavTabsProps {
    routes: Array<RouteData>
}

export const NavTabs: FC<NavTabsProps> = (props: NavTabsProps) => {
  // == Props ================================
  const { routes } = props
  const router = useRouter()

  // == States ===============================
  const [currentRoute, setCurrentRoute] = useState(0)

  // == Hooks ================================
  useEffect(() => {
    if (router.isReady) {
      setCurrentRoute(routes.map(route => route.route).indexOf(router.route))
    }
  }, [router.isReady, router.route])

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Tabs selected={currentRoute}>
      {routes.map((route: RouteData) => (
        <Link key={route.route} href={route.route} passHref legacyBehavior>
          <Tab
            value={route.route}
            label={route.label}
            to={route.route}
          />
        </Link>
      ))}
    </Tabs>
  )
}
