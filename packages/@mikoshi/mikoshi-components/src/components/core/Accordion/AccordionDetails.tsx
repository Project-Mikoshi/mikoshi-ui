import React from 'react'
import { AccordionDetails as MuiAccordionDetails, AccordionDetailsProps as MuiAccordionDetailsProps, SxProps } from '@mui/material'

interface AccordionDetailsProps extends MuiAccordionDetailsProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export default function (props: AccordionDetailsProps) {
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
    <MuiAccordionDetails
      className={`mikoshi-accordion-details ${className}`}
      {...props}
    >
      {children}
    </MuiAccordionDetails>
  )
}
