import React from 'react'
import { Button as MuiButton, SxProps } from '@mui/material'
import { type Color, type Size, type Variant, type ButtonRef } from '@/types/button'

interface ButtonProps {
  onClick?: (event?: any) => void,
  sx?: SxProps,
  color?: Color,
  disableElevation?: boolean,
  disabled?: boolean,
  size?: Size,
  variant?: Variant,
  component?: React.ForwardRefExoticComponent<any>
  to?: string,
  className?: string,
  children?: React.ReactNode
}

export default React.forwardRef((props: ButtonProps, ref: ButtonRef) => {
  // == Props ================================
  const {
    children,
    color = 'inherit',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiButton
      {...props}
      className={`mikoshi-button ${color} ${className}`}
      ref={ref}
    >
      {children}
    </MuiButton>
  )
})