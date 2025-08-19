import React from 'react'
import { Paper, Container, Typography } from '@mikoshi/react'

export default {
  title: 'Core/Typography',
  component: Typography
}

const Template = () => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Paper>
      <Container>
        <Typography variant="h1" component="div">
          h1. Heading
        </Typography>
        <Typography variant="h2" component="div">
          h2. Heading
        </Typography>
        <Typography variant="h3" component="div">
          h3. Heading
        </Typography>
        <Typography variant="h4" component="div">
          h4. Heading
        </Typography>
        <Typography variant="h5" component="div">
          h5. Heading
        </Typography>
        <Typography variant="h6" component="div">
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Typography variant="button">
          button text
        </Typography>
        <Typography variant="caption">
          caption text
        </Typography>
        <Typography variant="overline">
          overline text
        </Typography>
      </Container>
    </Paper>
  )
}

export const TypographyDemo = Template.bind({})
