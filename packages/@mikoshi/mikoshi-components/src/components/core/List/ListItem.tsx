import React, { FC } from 'react'
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps, SxProps } from '@mui/material'

interface ListItemProps extends MuiListItemProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export const ListItem: FC<ListItemProps> = (props) => {
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
    <MuiListItem
      className={`mikoshi-list-item ${className}`}
      {...props}
    >
      {children}
    </MuiListItem>
  )
}