import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/components/specialized/Modal'
import '@testing-library/jest-dom'

describe('components/core/modal', () => {
  it('should render', () => {
    const props = {
      isOpen: true,
      onOpen: () => {},
      onClose: () => {},
      bindingElement: document.body
    }

    const title = 'Test'
    const content = 'A simple modal component'
    const footer = 'control'

    render(
      <Modal {...props}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>{content}
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    )

    expect(screen.getAllByText(title)[0]).toBeInTheDocument()
    expect(screen.getAllByText(content)[0]).toBeInTheDocument()
    expect(screen.getAllByText(footer)[0]).toBeInTheDocument()
  })
})