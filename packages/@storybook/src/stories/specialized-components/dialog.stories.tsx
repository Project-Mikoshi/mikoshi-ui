import React, { useState } from 'react'
import { ConfirmationDialog, SimpleDialog } from '@mikoshi/components/specialized.js'
import { Button, Container, Typography } from '@mikoshi/components/core.js'

export default {
  title: 'Specialized/Dialog',
  component: ConfirmationDialog
}

const ConfirmationDialogTemplate = () => {
  // == Props ================================

  // == Hooks ================================
  const [isOpen, setOpen] = useState(false)

  // == Functions ============================

  // == Actions ==============================
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const onConfirm = () => {
    alert('Confirmed')
    closeModal()
  }

  // == Template =============================
  const args = {
    title: 'Confirmation Dialog Title',
    bindingElement: '#storybook-root',
    isOpen,
    onConfirm,
    onCancel: closeModal
  }


  return (
    <Container>
      <Button onClick={openModal} variant='contained'>Launch dialog</Button>
      <ConfirmationDialog {...args}>
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

const SimpleDialogTemplate = () => {
  // == Props ================================

  // == Hooks ================================
  const [isOpen, setOpen] = useState(false)

  // == Functions ============================

  // == Actions ==============================
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  // == Template =============================
  const args = {
    title: 'Simple Dialog Title',
    bindingElement: '#storybook-root',
    isOpen,
    onCancel: closeModal
  }

  return (
    <Container>
      <Button onClick={openModal} variant='contained'>Launch dialog</Button>
      <SimpleDialog {...args}>
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

export const ConfirmationDialogDemo = ConfirmationDialogTemplate.bind({})
export const SimpleDialogDemo = SimpleDialogTemplate.bind({})
