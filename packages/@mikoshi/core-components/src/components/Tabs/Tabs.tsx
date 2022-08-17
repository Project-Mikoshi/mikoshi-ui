import React, { FC } from 'react'
import { Tabs as MuiTabs } from '@mui/material'

interface TabsProps {
  indicatorColor?: 'primary' | 'secondary',
  orientation?: 'horizontal' | 'vertical',
  variant?: 'fullWidth' | 'scrollable' | 'standard',
  selectedTab?: any,
  children?: React.ReactNode,
  className?: string
}

export const Tabs: FC<TabsProps> = React.forwardRef((props, ref) => {
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
      className={`mikoshi-tabs ${className}`}
      value={selectedTab}
      indicatorColor={indicatorColor}
      orientation={orientation}
      variant={variant}
    >
      {children}
    </MuiTabs>
  )
})
