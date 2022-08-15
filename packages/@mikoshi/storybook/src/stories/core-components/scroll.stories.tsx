import React, { useState } from 'react'
import { Container, Button, Scroll, Typography, Paper } from '@mikoshi/core-components'

export default {
  title: 'Core/Scroll',
  component: Scroll
}

const Template = () => {
  // == Props ================================
  const LOREM = `
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n
  `

  // == Hooks ================================
  const [content, setContent] = useState(LOREM)

  // == Functions ============================

  // == Actions ==============================
  const addContent = () => setContent(content.concat(LOREM))
  const removeContent = () => setContent(LOREM)

  // == Template =============================
  return (
    <Scroll>
      <Paper>
        <Container className='m-flex-column' flex>
          <Typography variant='h6'>A simple modal component</Typography>
          <Typography variant='body1' paragraph={true}>
            {content}
          </Typography>
          <Container className='m-flex-justify-around' flex>
            <Button onClick={addContent}>Add content</Button>
            <Button onClick={removeContent}>Reset</Button>
          </Container>
        </Container>
      </Paper>
    </Scroll>
  )
}

export const AppBarDemo = Template.bind({})
