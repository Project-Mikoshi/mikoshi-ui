import React, { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Container,
  Button,
  Typography
} from '@mikoshi/core-components'

export default {
  title: 'Core/Modal',
  component: Modal
}

const Template = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const onClick = () => {}

  return (
    <Container>
      <Button onClick={openModal}>Click me</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <Typography variant='body1'>Modal Title</Typography>
        </ModalHeader>
        <ModalBody>
          <Typography variant='h6'>A simple modal component</Typography>
          <Typography variant='body1' paragraph={true}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClick} variant='contained'>Footer action</Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export const SimpleModal = Template.bind({})
