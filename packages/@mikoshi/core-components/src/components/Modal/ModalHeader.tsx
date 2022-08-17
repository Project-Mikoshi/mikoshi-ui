import React, { FC } from 'react'
import { Container } from 'components/Container'

interface ModalHeaderProps {
    className?: string,
    children?: React.ReactNode,
}

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
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
    <Container className={`mikoshi-modal-header ${className}`}>
      {children}
    </Container>
  )
}