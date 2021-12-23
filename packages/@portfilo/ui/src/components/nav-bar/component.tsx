import React from 'react'
import {
  AppBar,
  Zoom,
  Container,
  Typography,
  Box,
  Toolbar
} from '@mui/material'
import NavTabs from 'components/nav-bar/nav-tabs/component'
import { RouteData } from 'types/route'

const AUTHOR_NAME = 'Anthony Y. Zhu'

export default function NavBar (props: {routes: Array<RouteData>, onRouteChange: (route: string) => void, currentRoute?: string}) {
  const { routes, currentRoute, onRouteChange } = props

  return (
    <Zoom in={true}>
      <AppBar className='nav-bar' color='transparent' position='fixed' >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: {xs: 'none', md: 'flex'}}}>
              {AUTHOR_NAME}
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex', justifyContent: 'flex-end'}}}>
              <NavTabs routes={routes} currentRoute={currentRoute} onRouteChange={onRouteChange} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Zoom>
  )
}
