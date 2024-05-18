import React from 'react'
import { List as MuiList, ListProps as MuiListProps, SxProps } from '@mui/material'

interface ListProps extends MuiListProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export default function (props: ListProps) {
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
    <MuiList
      className={`mikoshi-list ${className}`}
      {...props}
    >
      {children}
    </MuiList>
  )
}