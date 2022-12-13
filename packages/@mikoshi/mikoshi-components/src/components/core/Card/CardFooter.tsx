import React, { FC } from 'react'
import { CardActions as MuiCardActions, SxProps } from '@mui/material'

interface CardFooterProps {
  sx?: SxProps,
  disableSpacing?: boolean,
  className?: string,
  children?: React.ReactNode
}

export const CardFooter: FC<CardFooterProps> = (props) => {
  // == Props ================================
  const {
    children,
    sx,
    disableSpacing = false,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiCardActions className={`mikoshi-card-footer ${className}`} sx={sx} disableSpacing={disableSpacing}>
      {children}
    </MuiCardActions>
  )
}
