import React from 'react'
import { Paper as MuiPaper, SxProps } from '@mui/material'

interface PaperProps {
  sx?: SxProps,
  square?: boolean,
  elevation?: number,
  variant?: string,
  className?: string,
  children?: React.ReactNode
}

export default function (props: PaperProps) {
  // == Props ================================
  const {
    children,
    variant,
    sx,
    square = false,
    elevation = 0,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiPaper className={`mikoshi-paper ${className}`} variant={variant as any} elevation={elevation} square={square} sx={sx}>
      {children}
    </MuiPaper>
  )
}
