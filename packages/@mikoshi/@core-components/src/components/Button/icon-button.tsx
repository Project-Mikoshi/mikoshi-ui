import React, { FC } from 'react'
import { IconButton as MuiIconButton } from '@mui/material'

interface IconButtonProps {
  onClick: () => void,
  component?: string,
  className?: string,
  children?: React.ReactNode
}

export const IconButton: FC<IconButtonProps> = (props) => {
  // == Props ================================
  const {
    onClick,
    component,
    children,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiIconButton
      className={`mikoshi-icon-button ${className}`}
      component={component as any}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  )
}
