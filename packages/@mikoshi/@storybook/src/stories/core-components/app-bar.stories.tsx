import React from 'react'
import { AppBar, Container, Button } from '@mikoshi/core-components'

export default {
  title: 'Core/App Bar',
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
        <h3>APP Bar</h3>
      </Container>
      <Container className='m-flex-justify-around m-flex-align-center'>
        <Button onClick={onClick}>Dashboard</Button>
        <Button onClick={onClick}>Report</Button>
        <Button onClick={onClick}>Setting</Button>
        <Button onClick={onClick}>Contact</Button>
      </Container>
    </AppBar>
  )
}

export const AppBarDemo = Template.bind({})
