import React, { FC } from 'react'
import { Paper as MuiPaper } from '@mui/material'

interface PaperProps {
  square?: boolean,
  elevation?: number,
  variant?: string,
  className?: string,
  children?: React.ReactNode
}

export const Paper: FC<PaperProps> = (props) => {
  // == Props ================================
  const {
    children,
    variant,
    square = false,
    elevation = 0,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiPaper className={`mikoshi-paper ${className}`} variant={variant as any} elevation={elevation} square={square}>
      {children}
    </MuiPaper>
  )
}
