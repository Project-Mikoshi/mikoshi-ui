import React from 'react'
import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconProps, SxProps } from '@mui/material'

interface ListItemIconProps extends MuiListItemIconProps {
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export default React.forwardRef((props: ListItemIconProps, ref: React.ForwardedRef<any>) => {
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
    <MuiListItemIcon
      className={`mikoshi-list-item-icon ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </MuiListItemIcon>
  )
})
