import React from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'

export default React.forwardRef((props: TooltipProps, ref) => {
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
