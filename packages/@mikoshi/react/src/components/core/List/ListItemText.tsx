import React from 'react'
import { ListItemText as MuiListItemText, ListItemTextProps as MuiListItemTextProps, SxProps } from '@mui/material'

interface ListItemTextProps extends MuiListItemTextProps {
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export default React.forwardRef((props: ListItemTextProps, ref: React.ForwardedRef<any>) => {
  // == Props ================================
  const {
    children,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiListItemText
      className={`mikoshi-list-item-text ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </MuiListItemText>
  )
})
