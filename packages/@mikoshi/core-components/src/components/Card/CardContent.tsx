import React, { FC } from 'react'
import { CardContent as MuiCardContent } from '@mui/material'
import { Scroll } from 'components/Scroll'

interface CardContentProps {
  className?: string,
  children?: React.ReactNode
}

export const CardContent: FC<CardContentProps> = (props) => {
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
