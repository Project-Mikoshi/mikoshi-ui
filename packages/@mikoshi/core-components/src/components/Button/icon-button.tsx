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

type ButtonRef = React.ForwardedRef<HTMLButtonElement>

export const IconButton: FC<IconButtonProps> = React.forwardRef((props, ref: ButtonRef) => {
  // == Props ================================
  const {
    onClick,
    sx,
    color,
    component,
    children,
    className = '',
    ...otherProps
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
      {...otherProps}
    >
      {children}
    </MuiIconButton>
  )
})
