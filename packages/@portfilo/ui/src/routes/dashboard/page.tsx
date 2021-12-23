import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'
import { ROUTE } from 'constants/route'

export default function Dashboard (props: {onRouteChange: (newRoute: string) => void}) {
  const { onRouteChange } = props

  return (
    <Container className='dashboard'>
      <Box className='intro' >
        <Typography variant='h1'>Hi,</Typography>
        <Box className='intro-name'>
          <Typography variant='h1'>{'I\'m'}</Typography>
          <Typography variant='h1' color='primary' sx={{display: {marginLeft: '20px'}}}>Anthony</Typography>
        </Box>
        <Typography variant='h1'>A Web Designer</Typography>
        <Button variant='contained' onClick={() => {onRouteChange(ROUTE.WORKS.route)}} component={Link} to={ROUTE.WORKS.route}>
          {ROUTE.CONTACT.label}
        </Button>
      </Box>

      <Box className='avatar' >
        
      </Box>
    </Container>
  )
}
