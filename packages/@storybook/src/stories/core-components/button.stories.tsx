import React from 'react'
import { Container, Button } from '@mikoshi/components'

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    variant: 'contained',
    size: 'medium',
    disableElevation: false,
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: 'inline-radio'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'inline-radio'
    },
    disableElevation: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
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
