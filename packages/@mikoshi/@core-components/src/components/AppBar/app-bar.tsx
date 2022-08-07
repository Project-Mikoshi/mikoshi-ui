import React, { FC } from 'react'
import { AppBar as MuiAppBar, SxProps } from '@mui/material'

interface AppBarProps {
  sx?: SxProps,
  color?: string,
  position?: string,
  className?: string,
  children?: React.ReactNode
}

export const AppBar: FC<AppBarProps> = (props) => {
  // == Props ================================
  const {
    children,
    sx,
    color = 'primary',
    position = 'fixed',
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiAppBar className={`mikoshi-app-bar m-flex m-flex-justify-center m-flex-align-center ${className}`} color={color as any} position={position as any} sx={sx}>
      {children}
    </MuiAppBar>
  )
}