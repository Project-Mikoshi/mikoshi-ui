/* eslint-disable no-unused-vars */
import React, { FC } from 'react'
import { Container, Typography } from '@mikoshi/core-components'

export interface DataGridHeaderProps {
  enableExport?: boolean,
  title?: string,
  className?: string,
  children?: React.ReactNode
}

export const DataGridHeader: FC<DataGridHeaderProps> = (props) => {
  // == Props ================================
  const {
    title,
    children,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Container className={`mikoshi-data-grid-header ${className}`}>
      <Typography>{title}</Typography>
      {children}
    </Container>
  )
}