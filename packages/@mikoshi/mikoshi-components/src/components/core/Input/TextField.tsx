import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'

export default React.forwardRef((props: TextFieldProps, ref: React.ForwardedRef<any>) => {
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
