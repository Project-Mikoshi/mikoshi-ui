import React from 'react'
import { Container, Button, Typography } from '@mikoshi/core-components'
import { AppBar } from '@mikoshi/application-components'

export default {
  title: 'Application/App Bar',
  component: AppBar
}

const Template = () => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================
  const onClick = () => {}

  // == Template =============================
  return (
    <AppBar>
      <Container>
        <Typography variant='h6'>App Bar</Typography>
      </Container>
      <Container className='m-flex-justify-end m-flex-align-center' flex>
        <Button onClick={onClick}>Dashboard</Button>
        <Button onClick={onClick}>Report</Button>
        <Button onClick={onClick}>Setting</Button>
        <Button onClick={onClick}>Contact</Button>
      </Container>
    </AppBar>
  )
}

export const AppBarDemo = Template.bind({})
