import React, { FC } from 'react'
import { Card as MuiCard, SxProps } from '@mui/material'

interface CardProps {
  sx?: SxProps,
  raised?: boolean,
  className?: string,
  children?: React.ReactNode
}

export const Card: FC<CardProps> = (props) => {
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
