import React, { FC } from 'react'
import { Paper as MuiPaper } from '@mui/material'

interface PaperProps {
  maxWidth?: string,
  className?: string,
  children?: React.ReactNode
}

export const Paper: FC<PaperProps> = (props) => {
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
    <MuiPaper className={`mikoshi-paper ${className}`}>
      {children}
    </MuiPaper>
  )
}
