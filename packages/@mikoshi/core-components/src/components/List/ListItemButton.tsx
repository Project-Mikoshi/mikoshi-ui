import React, { FC } from 'react'
import { ListItemButton as MuiListItemButton, ListItemButtonProps as MuiListItemButtonProps, SxProps } from '@mui/material'

interface ListItemButtonProps extends MuiListItemButtonProps {
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export const ListItemButton: FC<ListItemButtonProps> = React.forwardRef((props, ref) => {
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
    <MuiListItemButton
      className={`mikoshi-list-item-button ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </MuiListItemButton>
  )
})
