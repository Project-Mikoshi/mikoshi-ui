import React, { FC } from 'react'
import { Button as MuiButton, SxProps } from '@mui/material'
import { Color, Size, Variant } from 'constants/generic'

type ButtonColor = Color.ERROR | Color.INFO | Color.INHERIT | Color.PRIMARY | Color.SECONDARY | Color.SUCCESS | Color.WARNING
type ButtonVariant = Variant.CONTAINED | Variant.OUTLINED | Variant.TEXT
type ButtonSize = Size.LARGE | Size.MEDIUM | Size.SMALL
interface ButtonProps {
  onClick?: () => void,
  sx?: SxProps,
  color?:ButtonColor,
  disableElevation?: boolean,
  disabled?: boolean,
  size?: ButtonSize,
  variant?: ButtonVariant,
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
      {...otherProps}
    >
      {children}
    </MuiButton>
  )
})