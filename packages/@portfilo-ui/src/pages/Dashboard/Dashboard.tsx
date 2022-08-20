import React, { FC, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Grid, Box } from '@mui/material'
import { Typography, Button } from '@mikoshi/core-components'
// @ts-expect-error
import { ReactComponent as PhotoSketchSVG } from 'svgs/sketch-photo.svg'
import { SocialMediaButton } from 'components/SocialMediaButton'
import { ROUTE } from 'constants/route'

interface DashboardProps {
    onRouteChange: (newRoute: string) => void
}

export const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  // == Props ================================
  const { onRouteChange } = props
  const { PROJECTS } = ROUTE

  // == Hooks ================================
  const route = useLocation()

  useEffect(() => {
    onRouteChange(route.pathname)
  }, [route.pathname])

  // == Functions ============================

  // == Actions ==============================
  const transitionToProject = () => onRouteChange(PROJECTS.route)

  // == Template =============================
  return (
    <Grid
      container
      className='dashboard'
      padding={2}
      sx={{
        zoom: { xs: '40%', sm: '60%', md: '80%', lg: '100%' },
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid item className='intro'>
        <Typography className='m-color-grey-1' variant='h3'>Hi,</Typography>

        <Box className='intro-name'>
          <Typography className='m-color-grey-1' variant='h3'>{'I\'m'}&nbsp;</Typography>
          <Typography className='m-color-primary' variant='h3'>Anthony.</Typography>
        </Box>

        <Typography className='typewriter m-color-grey-1' variant='h3'>A Software Developer and Web Designer.</Typography>

        <br />

        <Button size='small' variant='contained' onClick={transitionToProject} component={Link} to={PROJECTS.route}>
          Check out my projects
        </Button>
      </Grid>

      <Grid item className='avatar'>
        <PhotoSketchSVG />
      </Grid>

      <Grid item className='social-media' xs={10}>
        <SocialMediaButton type='LinkedIn' />
        <SocialMediaButton type='Github' />
        <SocialMediaButton type='Facebook' />
        <SocialMediaButton type='Instagram' />
      </Grid>
    </Grid>
  )
}
