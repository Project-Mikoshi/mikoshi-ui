import React from 'react'
import { IconButton as MuiIconButton, SxProps } from '@mui/material'
import { type Color, type ButtonRef } from '@/types/button'

interface IconButtonProps {
  onClick?: (event?: any) => void,
  disabled?: boolean,
  sx?: SxProps,
  color?: Color,
  href?: string,
  target?: string,
  className?: string,
  children?: React.ReactNode
}

export default React.forwardRef((props: IconButtonProps, ref: ButtonRef) => {
  // == Props ================================
  const {
    onClick,
    sx,
    color,
    children,
    disabled = false,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiIconButton
      {...props}
      className={`mikoshi-icon-button ${color} ${className}`}
      disabled={disabled}
      sx={sx}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </MuiIconButton>
  )
})
