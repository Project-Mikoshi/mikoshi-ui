import React, { FC } from 'react'
import { Container as MuiContainer, SxProps } from '@mui/material'

interface ContainerProps {
  sx?: SxProps,
  maxWidth?: string,
  className?: string,
  children?: React.ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
  // == Props ================================
  const {
    sx,
    maxWidth,
    children,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiContainer className={`mikoshi-container ${className}`} maxWidth={maxWidth as any} sx={sx}>
      {children}
    </MuiContainer>
  )
}
