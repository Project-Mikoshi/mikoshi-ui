import React, { FC } from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'

export const Tooltip: FC<TooltipProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    children,
    title
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTooltip title={title} ref={ref}>
      {children}
    </MuiTooltip>
  )
})
