import React, { FC } from 'react'
import { Accordion as MuiAccordion, AccordionProps as MuiAccordionProps, SxProps } from '@mui/material'

interface AccordionProps extends MuiAccordionProps {
  sx?: SxProps,
  className?: string,
  children: NonNullable<React.ReactNode>
}

export const Accordion: FC<AccordionProps> = (props) => {
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
    <MuiAccordion
      className={`mikoshi-accordion ${className}`}
      {...props}
    >
      {children}
    </MuiAccordion>
  )
}
