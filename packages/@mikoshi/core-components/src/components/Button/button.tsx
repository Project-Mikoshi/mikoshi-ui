import React, { FC } from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
  color?: string,
  variant?: string,
  className?: string,
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  // == Props ================================
  const {
    children,
    variant = 'text',
    color = 'primary',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiButton className={`mikoshi-button ${className}`} color={color as any} variant={variant as any}>
      {children}
    </MuiButton>
  )
}