import React, { FC } from 'react'
import { CardHeader as MuiCardHeader, SxProps } from '@mui/material'

interface CardHeaderProps {
  title?: React.ReactNode,
  subTitle?: React.ReactNode,
  sx?: SxProps,
  className?: string
}

export const CardHeader: FC<CardHeaderProps> = (props) => {
  // == Props ================================
  const {
    sx,
    title,
    subTitle,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Headers ==============================

  // == Template =============================
  return (
    <MuiCardHeader
      className={`mikoshi-card-header ${className}`}
      sx={sx}
      title={title}
      subheader={subTitle}
      disableTypography={true}
    />
  )
}
