import React, { FC } from 'react'
import { Button as MuiButton, SxProps } from '@mui/material'

export interface ButtonProps {
  onClick: () => void,
  sx?: SxProps,
  color?: string,
  disableElevation?: boolean,
  disabled?: boolean,
  size?: string,
  variant?: string,
  className?: string,
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  // == Props ================================
  const {
    onClick,
    children,
    sx,
    disabled = false,
    size = 'medium',
    disableElevation = false,
    variant = 'text',
    color = 'primary',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiButton
      className={`mikoshi-button ${className}`}
      onClick={onClick}
      color={color as any}
      variant={variant as any}
      disableElevation={disableElevation}
      size={size as any}
      sx={sx}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  )
}