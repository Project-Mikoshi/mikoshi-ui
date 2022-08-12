import React, { FC } from 'react'
import { IconButton as MuiIconButton, SxProps } from '@mui/material'
import { Color } from 'constants/generic'

interface IconButtonProps {
  onClick: () => void,
  sx?: SxProps,
  color?: Color,
  component?: string,
  className?: string,
  children?: React.ReactNode
}

export const IconButton: FC<IconButtonProps> = (props) => {
  // == Props ================================
  const {
    onClick,
    sx,
    color,
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
      color={color}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  )
}
