import React, { FC } from 'react'
import { InputBase as MuiInputBase, InputBaseProps as MuiInputBaseProps, SxProps } from '@mui/material'

interface InputBaseProps extends MuiInputBaseProps {
  sx?: SxProps,
  className?: string
}

export const InputBase: FC<InputBaseProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiInputBase
      {...props}
      className={`mikoshi-input-base ${className}`}
      ref={ref}
    />
  )
})