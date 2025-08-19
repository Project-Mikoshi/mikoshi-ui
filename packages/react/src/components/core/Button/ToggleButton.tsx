import React from 'react'
import { ToggleButton as MuiToggleButton, SxProps } from '@mui/material'

interface ToggleButtonProps {
  value: string | number,
  onClick?: (event: React.MouseEvent<HTMLElement>, value: any) => void,
  disabled?: boolean,
  selected?: boolean,
  size?: 'small' | 'medium' | 'large',
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export default function (props: ToggleButtonProps) {
  // == Props ================================
  const {
    value,
    onClick,
    sx,
    selected,
    children,
    size = 'medium',
    disabled = false,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiToggleButton
      className={`mikoshi-toggle-button ${className}`}
      value={value}
      disabled={disabled}
      selected={selected}
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiToggleButton>
  )
}
