import React, { FC } from 'react'
import { ListItemIcon as MuiListItemIcon, ListItemIconProps as MuiListItemIconProps, SxProps } from '@mui/material'

interface ListItemIconProps extends MuiListItemIconProps {
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export const ListItemIcon: FC<ListItemIconProps> = React.forwardRef((props, ref) => {
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
