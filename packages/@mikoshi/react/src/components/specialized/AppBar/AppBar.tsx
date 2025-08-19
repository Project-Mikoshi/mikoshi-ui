import React from 'react'
import { AppBar as MuiAppBar,  SxProps } from '@mui/material'
import { Color, Position } from '@/types/app-bar'

interface AppBarProps {
  sx?: SxProps,
  color?: Color,
  position?: Position,
  className?: string,
  children?: React.ReactNode
}

export default function (props: AppBarProps) {
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
    <MuiAppBar className={`mikoshi-app-bar ${color} ${className}`} position={position} sx={sx}>
      {children}
    </MuiAppBar>
  )
}