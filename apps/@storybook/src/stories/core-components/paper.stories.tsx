import React from 'react'
import { Container, Paper } from '@mikoshi/core-components'

export default {
  title: 'Core/Paper',
  component: Paper,
  args: {
    elevation: 1,
    square: false
  },
  argTypes: {
    elevation: {
      options: [1, 2, 3, 4, 6, 8, 12, 16, 24],
      control: 'inline-radio'
    },
    square: {
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
    <Paper className='m-flex-justify-center m-flex-align-center' {...props}>
      <Container className='m-flex-column m-flex-justify-center m-flex-align-center'>
        <h3>What is Glassmorphism?</h3>
        <p>
          Glassmorphism is a design style, coined by Michal Malewicz from Hype4.Academy to connect and combine all of the uses of the “frosted glass” effect in the UI.
          By categorizing it and giving it a common name,
          it became easier to find and learn about it from resources all around the web.
          After the initial article, written in November of 2020, the trend and the name exploded online, with its own #glassmorphism hashtag and thousands of UI exercises created in this style.
          You can read the original article here, at the academy as well.
        </p>
      </Container>
    </Paper>
  )
}

export const PaperDemo = Template.bind({})
