import React from 'react'
import { CardContent as MuiCardContent } from '@mui/material'
import { Scroll } from '@/components/core/Scroll'

interface CardContentProps {
  className?: string,
  children?: React.ReactNode
}

export default function (props: CardContentProps) {
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
    <MuiCardContent className={`mikoshi-card-content ${className}`}>
      <Scroll>
        {children}
      </Scroll>
    </MuiCardContent>
  )
}
