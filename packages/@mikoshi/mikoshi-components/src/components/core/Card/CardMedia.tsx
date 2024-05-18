import React, { ElementType } from 'react'
import { CardMedia as MuiCardMedia, SxProps } from '@mui/material'

interface CardMediaProps {
  height?: number,
  sx?: SxProps,
  image?: string,
  title?: string,
  component?: ElementType<any>,
  src?: string,
  className?: string,
  children?: React.ReactNode
}

export default function (props: CardMediaProps) {
  // == Props ================================
  const {
    children,
    sx,
    image,
    src,
    title,
    height,
    component = 'img',
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Media ==============================

  // == Template =============================
  return (
    <MuiCardMedia className={`mikoshi-card-media ${className}`} title={title} sx={sx} image={image} src={src} component={component} height={height}>
      {children}
    </MuiCardMedia>
  )
}
