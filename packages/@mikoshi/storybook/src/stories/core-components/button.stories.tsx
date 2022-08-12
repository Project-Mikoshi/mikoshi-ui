import React from 'react'
import { Container, Button } from '@mikoshi/core-components'

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: 'inline-radio',
      defaultValue: 'contained'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'inline-radio',
      defaultValue: 'medium'
    },
    disableElevation: {
      control: 'boolean',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
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
