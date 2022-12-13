import React, { FC } from 'react'
import { Menu as MuiMenu, MenuProps as MuiMenuProps, SxProps } from '@mui/material'

interface MenuProps extends MuiMenuProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export const Menu: FC<MenuProps> = (props) => {
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
    <MuiMenu
      className={`mikoshi-menu ${className}`}
      {...props}
    >
      {children}
    </MuiMenu>
  )
}
