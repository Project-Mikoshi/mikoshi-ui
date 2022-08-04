/**
 *
 *  Panes Badge Stories
 *
 */

import React from 'react'
import { Container, Button } from '@mikoshi/core-components'

export default {
  title: 'Core/Button'
}

const Template = () => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Container className='m-flex-justify-around m-flex-align-center'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Container>
  )
}

export const ButtonDemo = Template.bind({})
