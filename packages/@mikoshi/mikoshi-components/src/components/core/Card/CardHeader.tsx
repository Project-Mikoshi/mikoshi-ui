import React from 'react'
import { CardHeader as MuiCardHeader, SxProps } from '@mui/material'

interface CardHeaderProps {
  title?: React.ReactNode,
  subTitle?: React.ReactNode,
  avatar?: React.ReactNode,
  sx?: SxProps,
  className?: string
}

export default function (props: CardHeaderProps) {
  // == Props ================================
  const {
    sx,
    title,
    subTitle,
    avatar,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Headers ==============================

  // == Template =============================
  return (
    <MuiCardHeader
      className={`mikoshi-card-header ${className}`}
      avatar={avatar}
      sx={sx}
      title={title}
      subheader={subTitle}
      disableTypography={true}
    />
  )
}
