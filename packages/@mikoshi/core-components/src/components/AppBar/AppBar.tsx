import React, { FC } from 'react'
import { AppBar as MuiAppBar,  SxProps } from '@mui/material'
import { Color, Position } from 'types/app-bar'

interface AppBarProps {
  sx?: SxProps,
  color?: Color,
  position?: Position,
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
    <MuiAppBar className={`mikoshi-app-bar m-flex m-flex-justify-center m-flex-align-center ${className}`} color={color} position={position} sx={sx}>
      {children}
    </MuiAppBar>
  )
}