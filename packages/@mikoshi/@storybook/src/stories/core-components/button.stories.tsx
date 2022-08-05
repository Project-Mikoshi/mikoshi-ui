/**
 *
 *  Panes Badge Stories
 *
 */
import React from 'react'
import { Container, Button } from '@mikoshi/core-components'

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    disableElevation: {
      options: [true, false],
      control: { type: 'radio' }
    },
    onClick: { action: 'clicked' }
  }
}

const Template = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <>
      <Container className='m-flex-justify-center m-flex-align-center'>
        <Button {...props}>Test</Button>
      </Container>
    </>
  )
}

export const ButtonDemo = Template.bind({})
