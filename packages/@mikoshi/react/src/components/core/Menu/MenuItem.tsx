import React from 'react'
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps, SxProps } from '@mui/material'

interface MenuItemProps extends MuiMenuItemProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export default function (props: MenuItemProps) {
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
    <MuiMenuItem
      className={`mikoshi-menu-item ${className}`}
      {...props}
    >
      {children}
    </MuiMenuItem>
  )
}
