import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Typography, Button } from '@mui/material'
import SocialMediaButton from 'components/social-media-button/component'
import ParticlesBackground from 'components/particle-effect/component'
import { ROUTE } from 'constants/route'
// @ts-expect-error
import { ReactComponent as PhotoSketchSVG } from 'svgs/sketch-photo.svg'

interface DashboardProps {
    onRouteChange: (_newRoute: string) => void
}

export default function Dashboard (props: DashboardProps) {
  const { onRouteChange } = props

  return (
    <Grid container className='dashboard' direction='row' justifyContent='space-evenly' alignItems='center' sx={{ height: '80vh', zoom: { xs: '50%', lg: '100%' } }}>
      <Grid item className='intro'>
        <Typography variant='h3'>Hi,</Typography>

        <Box className='intro-name'>
          <Typography variant='h3'>{'I\'m'}&nbsp;</Typography>
          <Typography variant='h3' color='primary'>Anthony.</Typography>
        </Box>

        <Typography className='typewriter' variant='h3'>A Software Developer and Web Designer.</Typography>

        <br />

        <Button size='small' variant='contained' onClick={() => {onRouteChange(ROUTE.CONTACT.route)}} component={Link} to={ROUTE.CONTACT.route}>
          {ROUTE.CONTACT.label}
        </Button>
      </Grid>

      <Grid item className='avatar' sx={{}}>
        <PhotoSketchSVG />
      </Grid>

      <Grid item className='social-media' xs={10}>
        <SocialMediaButton type='LinkedIn' />
        <SocialMediaButton type='github' />
      </Grid>

      <ParticlesBackground />
    </Grid>
  )
}
