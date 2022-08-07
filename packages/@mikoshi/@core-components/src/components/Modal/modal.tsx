import { Container } from 'components/Container'
import React, { FC, useEffect } from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
    isOpen: boolean,
    className?: string,
    onOpen?: any,
    onClose?: any,
    onAfterClose?: any,
    closeTimeOut?: number,
    children?: React.ReactNode,
    bindingElement?: any
}

export const Modal: FC<ModalProps> = (props) => {
  // == Props ================================
  const {
    isOpen,
    onOpen,
    onClose,
    children,
    onAfterClose,
    className = '',
    bindingElement = '#root',
    closeTimeOut = 100
  } = props

  // == Hooks ================================
  useEffect(() => ReactModal.setAppElement(bindingElement), [])

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <ReactModal
      className={`mikoshi-modal col-11 col-xl-6 ${className}`}
      overlayClassName="mikoshi-modal-overlay"
      isOpen={isOpen}
      onAfterOpen={onOpen}
      onRequestClose={onClose}
      onAfterClose={onAfterClose}
      closeTimeoutMS={closeTimeOut}
    >
      <Container className="mikoshi-modal-content">
        {children}
      </Container>
    </ReactModal>
  )
}