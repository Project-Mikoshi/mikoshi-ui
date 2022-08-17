import React, { FC } from 'react'
import { Container as MuiContainer, SxProps } from '@mui/material'

interface ContainerProps {
  sx?: SxProps,
  maxWidth?: string,
  flex?: boolean,
  fixed?: boolean,
  disableGutters?: boolean,
  className?: string,
  children?: React.ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
  // == Props ================================
  const {
    sx,
    maxWidth,
    children,
    flex = false,
    fixed = false,
    disableGutters = false,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiContainer
      className={`mikoshi-container ${flex ? 'm-flex' : ''} ${className}`}
      maxWidth={maxWidth as any}
      sx={sx}
      disableGutters={disableGutters}
      fixed={fixed}
    >
      {children}
    </MuiContainer>
  )
}
