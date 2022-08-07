import React, { FC } from 'react'
import { Container } from 'components/Container'

interface ModalBodyProps {
    className?: string,
    children?: React.ReactNode,
}

export const ModalBody: FC<ModalBodyProps> = (props) => {
  // == Props ================================
  const {
    children,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Container className={`mikoshi-modal-body ${className}`} fixed disableGutters>
      {children}
    </Container>
  )
}