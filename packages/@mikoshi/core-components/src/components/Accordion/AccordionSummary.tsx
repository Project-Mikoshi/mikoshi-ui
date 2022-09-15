import React, { FC } from 'react'
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps as MuiAccordionSummaryProps, SxProps } from '@mui/material'
import ExpandMoreOutLinedIcon from '@mui/icons-material/ExpandMoreOutlined'

interface AccordionSummaryProps extends MuiAccordionSummaryProps {
  sx?: SxProps,
  className?: string,
  children: React.ReactNode
}

export const AccordionSummary: FC<AccordionSummaryProps> = (props) => {
  // == Props ================================
  const {
    children,
    expandIcon = <ExpandMoreOutLinedIcon />,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiAccordionSummary
      className={`mikoshi-accordion-summary ${className}`}
      expandIcon={expandIcon}
      {...props}
    >
      {children}
    </MuiAccordionSummary>
  )
}
