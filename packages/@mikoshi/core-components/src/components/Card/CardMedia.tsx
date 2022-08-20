import React, { ElementType, FC } from 'react'
import { CardMedia as MuiCardMedia, SxProps } from '@mui/material'

interface CardMediaProps {
  sx?: SxProps,
  image?: string,
  title?: string,
  component?: ElementType<any>,
  src?: string,
  className?: string,
  children?: React.ReactNode
}

export const CardMedia: FC<CardMediaProps> = (props) => {
  // == Props ================================
  const {
    children,
    sx,
    image,
    src,
    title,
    component = 'img',
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Media ==============================

  // == Template =============================
  return (
    <MuiCardMedia className={`mikoshi-card-media ${className}`} title={title} sx={sx} image={image} src={src} component={component}>
      {children}
    </MuiCardMedia>
  )
}
