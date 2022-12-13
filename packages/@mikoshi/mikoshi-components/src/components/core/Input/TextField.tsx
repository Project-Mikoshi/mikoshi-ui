import React, { FC } from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'

export const TextField: FC<TextFieldProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTextField
      {...props}
      className={`mikoshi-text-field ${className}`}
      ref={ref}
    />
  )
})
