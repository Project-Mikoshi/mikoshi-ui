import React from 'react'
import { CardActionArea as MuiCardActionArea, SxProps } from '@mui/material'

interface CardActionAreaProps {
  onClick?: () => void,
  href?: string,
  target?: string,
  sx?: SxProps,
  className?: string,
  children?: React.ReactNode
}

export default function (props: CardActionAreaProps) {
  // == Props ================================
  const {
    onClick,
    href = '',
    target = '_blank',
    children,
    sx,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == ActionArea ==============================

  // == Template =============================
  return (
    <MuiCardActionArea className={`mikoshi-card-action-area ${className}`} sx={sx} onClick={onClick} href={href} target={target}>
      {children}
    </MuiCardActionArea>
  )
}
