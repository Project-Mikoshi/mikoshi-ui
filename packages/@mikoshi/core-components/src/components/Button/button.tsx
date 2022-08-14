import React, { FC } from 'react'
import { Button as MuiButton, SxProps } from '@mui/material'
import { Color, Size, Variant } from 'types/button'

interface ButtonProps {
  onClick?: () => void,
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

type ButtonRef = React.ForwardedRef<HTMLButtonElement>

export const Button: FC<ButtonProps> = React.forwardRef((props, ref: ButtonRef) => {
  // == Props ================================
  const {
    children,
    color,
    className = '',
    ...otherProps
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiButton
      className={`mikoshi-button m-bg-${color} ${className}`}
      color='primary'
      {...otherProps}
    >
      {children}
    </MuiButton>
  )
})