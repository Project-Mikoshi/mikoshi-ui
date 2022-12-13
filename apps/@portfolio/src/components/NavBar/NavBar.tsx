import React, { FC } from 'react'
import {
  Box,
  Toolbar,
  SxProps
} from '@mui/material'
import { AppBar, DarkModeSwitch } from '@mikoshi/components/specialized'
import { Container, Typography } from '@mikoshi/components/core'
import { NavTabs } from '@/components/NavTabs'
import { RouteData } from '@/types/route'
import { Theme } from '@/types/theme'

interface NavBarProps {
  sx?: SxProps,
  routes: Array<RouteData>,
  theme?: Theme,
  onThemeChange: (theme: Theme) => void
}

export const NavBar: FC<NavBarProps> = (props) => {
  // == Props ================================
  const { routes, onThemeChange, theme, sx } = props
  const AUTHOR_NAME = 'Anthony Y. Zhu'

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================
  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    onThemeChange(checked ? 'dark' : 'light')
  }

  // == Template =============================
  return (
    <AppBar
      color='primary'
      position='sticky'
      sx={sx}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' sx={{ mr: 2, display: { xs: 'none', sm: 'block', md: 'block' } }}>
            {AUTHOR_NAME}
          </Typography>
          <Box sx={ { flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <NavTabs routes={routes} />
          </Box>
          <DarkModeSwitch checked={theme === 'dark'} onChange={handleDarkModeToggle} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
