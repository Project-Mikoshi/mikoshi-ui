import React, { useState } from 'react'
import { ConfirmationDialog } from '@mikoshi/application-components'
import { Button, Container, Typography } from '@mikoshi/core-components'

export default {
  title: 'Application components/Confirmation Dialog',
  component: ConfirmationDialog
}

const Template = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const onConfirm = () => {
    alert('Confirmed')
    closeModal()
  }

  const props = {
    title: 'Confirmation Dialog Title',
    isOpen,
    onConfirm,
    onCancel: closeModal
  }

  return (
    <Container>
      <Button onClick={openModal} variant='contained'>Launch dialog</Button>
      <ConfirmationDialog {...props}>
        <Typography variant='h6'>A simple modal component</Typography>
        <Typography variant='body1' paragraph={true}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </ConfirmationDialog>
    </Container>
  )
}

export const ConfirmationDialogDemo = Template.bind({})
