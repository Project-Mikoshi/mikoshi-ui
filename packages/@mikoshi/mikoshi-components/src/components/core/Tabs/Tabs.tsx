import React from 'react'
import { Tabs as MuiTabs } from '@mui/material'

interface TabsProps {
  indicatorColor?: 'primary' | 'secondary',
  orientation?: 'horizontal' | 'vertical',
  variant?: 'fullWidth' | 'scrollable' | 'standard',
  selected?: number | string,
  children?: React.ReactNode,
  className?: string
}

export default React.forwardRef((props: TabsProps, ref: React.ForwardedRef<any>) => {
  // == Props ================================
  const {
    children,
    selected = 0,
    indicatorColor = 'secondary',
    orientation = 'horizontal',
    variant = 'standard',
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTabs
      className={`mikoshi-tabs ${className}`}
      value={selected}
      indicatorColor={indicatorColor}
      orientation={orientation}
      variant={variant}
      ref={ref}
    >
      {children}
    </MuiTabs>
  )
})
