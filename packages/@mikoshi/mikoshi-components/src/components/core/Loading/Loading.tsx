import React, { FC } from 'react'
import { CircularProgress, LinearProgress } from '@mui/material'

interface LoadingOverlayProps {
  type?: 'circle' | 'line',
  variant?: 'determinate' | 'indeterminate',
  progress?: number,
  buffer?: number,
  color?: 'primary' | 'secondary' | 'success' | 'inherit',
  className?: string
}

export const Loading: FC<LoadingOverlayProps> = (props) => {
  // == Props ================================
  const {
    type = 'circle',
    color = 'primary',
    variant = 'indeterminate',
    className = '',
    progress = 0,
    buffer = 0
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <>
      {type === 'circle'
        ? <CircularProgress color={color} className={className} variant={variant} value={progress} />
        : <LinearProgress color={color} className={className} variant={variant} value={progress} valueBuffer={buffer} />}
    </>
  )
}
