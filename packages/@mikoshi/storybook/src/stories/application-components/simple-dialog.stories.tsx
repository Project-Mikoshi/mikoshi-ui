import React, { useState } from 'react'
import { SimpleDialog } from '@mikoshi/application-components'
import { Button, Container, Typography } from '@mikoshi/core-components'

export default {
  title: 'Application/Simple Dialog',
  component: SimpleDialog
}

const Template = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const props = {
    title: 'Simple Dialog Title',
    isOpen,
    onCancel: closeModal
  }

  return (
    <Container>
      <Button onClick={openModal} variant='contained'>Launch dialog</Button>
      <SimpleDialog {...props}>
        <Typography variant='h6'>A simple modal component</Typography>
        <Typography variant='body1' paragraph={true}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </SimpleDialog>
    </Container>
  )
}

export const SimpleDialogDemo = Template.bind({})
