/**
 *
 *  Panes Badge Stories
 *
 */

import React from 'react'
import { AppBar, Container, Button } from '@mikoshi/core-components'

export default {
  title: 'Core/AppBar'
}

const Template = () => (
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  <AppBar>
    <Container>
      <h3>APP Bar</h3>
    </Container>
    <Container className='m-flex-justify-around m-flex-align-center'>
      <Button>Dashboard</Button>
      <Button>Report</Button>
      <Button>Setting</Button>
      <Button>Contact</Button>
    </Container>
  </AppBar>
)

export const AppBarDemo = Template.bind({})
