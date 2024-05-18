import React from 'react'
import { Card as MuiCard, SxProps } from '@mui/material'

interface CardProps {
  sx?: SxProps,
  raised?: boolean,
  className?: string,
  children?: React.ReactNode
}

export default function (props: CardProps) {
  // == Props ================================
  const {
    sx,
    raised = false,
    children,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiCard
      className={`mikoshi-card ${className}`}
      sx={sx}
      raised={raised}
    >
      {children}
    </MuiCard>
  )
}
