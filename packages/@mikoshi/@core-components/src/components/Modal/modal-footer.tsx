import React, { FC } from 'react'
import { Container } from 'components/Container'

interface ModalFooterProps {
    className?: string,
    children?: React.ReactNode,
}

export const ModalFooter: FC<ModalFooterProps> = (props) => {
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
    <Container className={`mikoshi-modal-footer ${className}`}>
      {children}
    </Container>
  )
}