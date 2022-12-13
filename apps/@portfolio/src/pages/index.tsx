import React from 'react'
import { Grid, Box } from '@mui/material'
import { Typography, Button } from '@mikoshi/components/core'
import Link from 'next/link'
import { Silhouette } from '@/components/Silhouette'
import { SocialMediaButton } from '@/components/SocialMediaButton'
import { ROUTE } from '@/constants/route'

export default function Dashboard () {
  // == Props ================================
  const { PROJECTS } = ROUTE

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

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

        <Button size='small' variant='contained'>
          <Link href={PROJECTS.route}>
              Check out my projects
          </Link>
        </Button>
      </Grid>

      <Grid item className='avatar'>
        <Silhouette />
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
