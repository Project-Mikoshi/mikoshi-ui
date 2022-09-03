import React, { FC } from 'react'
import { Tabs as MuiTabs } from '@mui/material'
import { type ButtonRef } from 'types/button'

interface TabsProps {
  indicatorColor?: 'primary' | 'secondary',
  orientation?: 'horizontal' | 'vertical',
  variant?: 'fullWidth' | 'scrollable' | 'standard',
  selectedTab?: number | string,
  children?: React.ReactNode,
  className?: string
}

export const Tabs: FC<TabsProps> = React.forwardRef((props, ref: ButtonRef) => {
  // == Props ================================
  const {
    children,
    selectedTab,
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
      {...props}
      className={`mikoshi-tabs ${className}`}
      value={selectedTab}
      indicatorColor={indicatorColor}
      orientation={orientation}
      variant={variant}
      ref={ref}
    >
      {children}
    </MuiTabs>
  )
})
