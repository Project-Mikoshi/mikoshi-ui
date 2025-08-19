import React from 'react'
import { Container, Paper, Button, Tooltip } from '@mikoshi/react'

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  args: {
    placement: 'bottom',
    arrow: false
  },
  argTypes: {
    placement: {
      options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'],
      control: 'inline-radio'
    },
    arrow: {
      control: 'boolean'
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
    <Paper className='m-flex-justify-center m-flex-align-center' sx={{ padding: 12 }}>
      <Container className='m-flex-column m-flex-justify-center m-flex-align-center' flex>
        <Tooltip title="Tooltip Text" {...props}>
          <Button variant='contained'>Press Me</Button>
        </Tooltip>
      </Container>
    </Paper>
  )
}

export const TooltipDemo = Template.bind({})
