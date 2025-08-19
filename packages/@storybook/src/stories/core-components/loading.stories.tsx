import React from 'react'
import { Paper, Container, Loading, Typography } from '@mikoshi/components'

export default {
  title: 'Core/Loading',
  component: Loading,
  args: {
    variant: 'indeterminate',
    type: 'circle',
    progress: 0,
    buffer: 0
  },
  argTypes: {
    variant: {
      options: ['determinate', 'indeterminate'],
      control: 'inline-radio'
    },
    type: {
      options: ['circle', 'line'],
      control: 'inline-radio'
    },
    progress: {
      control: 'number'
    },
    buffer: {
      control: 'number'
    }
  }
}

const Template = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Paper className='m-width-100 m-height-100 m-flex m-flex-justify-center m-flex-align-center'>
      <Container flex className='m-flex-column m-width-100 m-height-100 m-flex m-flex-justify-center m-flex-align-center'>
        <Typography variant='h6'>Loading</Typography>
        <Loading {...props} className={props.type === 'line' ? 'm-width-100' : ''} />
      </Container>
    </Paper>
  )
}

export const LoadingDemo = Template.bind({})
