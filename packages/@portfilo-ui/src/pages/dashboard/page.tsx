import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box } from '@mui/material'
import { Typography, Button } from '@mikoshi/core-components'
import SocialMediaButton from 'components/social-media-button/component'
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
        <Typography className='m-color-grey-1' variant='h3'>Hi,</Typography>

        <Box className='intro-name'>
          <Typography className='m-color-grey-1' variant='h3'>{'I\'m'}&nbsp;</Typography>
          <Typography className='m-color-primary' variant='h3'>Anthony.</Typography>
        </Box>

        <Typography className='typewriter m-color-grey-1' variant='h3'>A Software Developer and Web Designer.</Typography>

        <br />

        <Button size={'small' as any} variant={'contained' as any} onClick={() => {onRouteChange(ROUTE.CONTACT.route)}} component={Link} to={ROUTE.CONTACT.route}>
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
    </Grid>
  )
}
