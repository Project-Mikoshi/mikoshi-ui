import React from 'react'
import { Container } from '@/components/core/Container'

interface ModalHeaderProps {
    className?: string,
    children?: React.ReactNode,
}

export default function (props: ModalHeaderProps) {
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