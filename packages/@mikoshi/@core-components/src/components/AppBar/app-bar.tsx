import React, { FC } from 'react'
import { AppBar as MuiAppBar } from '@mui/material'

interface AppBarProps {
  color?: string,
  position?: string,
  className?: string,
  children?: React.ReactNode
}

export const AppBar: FC<AppBarProps> = (props) => {
  // == Props ================================
  const {
    children,
    color = 'primary',
    position = 'fixed',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiAppBar className={`mikoshi-app-bar ${className}`} color={color as any} position={position as any}>
      {children}
    </MuiAppBar>
  )
}