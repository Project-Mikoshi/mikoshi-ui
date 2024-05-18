import React from 'react'
import { Container } from '@/components/core/Container'

interface ModalFooterProps {
    className?: string,
    children?: React.ReactNode,
}

export default function (props: ModalFooterProps) {
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
    <Container className={`mikoshi-modal-footer ${className}`} disableGutters>
      {children}
    </Container>
  )
}