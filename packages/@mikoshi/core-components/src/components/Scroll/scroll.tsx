import React, { FC } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ScrollProps {
  className?: string,
  children?: React.ReactNode
}

export const Scroll: FC<ScrollProps> = (props) => {
  // == Props ================================
  const {
    children,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <PerfectScrollbar className={`mikoshi-scroll ${className}`}>
      {children}
    </PerfectScrollbar>
  )
}
