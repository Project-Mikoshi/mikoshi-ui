import React from 'react'
import {
  AppBar,
  Slide,
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
    <Slide in={true} direction='down'>
      <AppBar color='primary' position='fixed' >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: {xs: 'none', sm: 'block', md: 'block'}}}>
              {AUTHOR_NAME}
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}, justifyContent: 'flex-end'}}>
              <NavTabs routes={routes} currentRoute={currentRoute} onRouteChange={onRouteChange} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  )
}
