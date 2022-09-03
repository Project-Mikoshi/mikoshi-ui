import React, { FC } from 'react'
import { Typography as MuiTypography, SxProps } from '@mui/material'

interface TypographyProps {
  sx?: SxProps,
  align?: string,
  noWrap?: boolean,
  color?: 'primary' | 'secondary',
  fontWeight?: number,
  paragraph?: boolean,
  textOverflow?: string,
  whiteSpace?: string,
  overflow?: string,
  variant?: string,
  component?: string
  className?: string,
  children?: React.ReactNode
}

export const Typography: FC<TypographyProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    children,
    variant,
    align,
    noWrap,
    paragraph,
    component,
    textOverflow,
    whiteSpace,
    overflow,
    color,
    fontWeight,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTypography
      {...props}
      className={`mikoshi-typography ${color} ${className}`}
      variant={variant as any}
      align={align as any}
      noWrap={noWrap}
      paragraph={paragraph}
      component={component as any}
      whiteSpace={whiteSpace as any}
      textOverflow={textOverflow}
      overflow={overflow}
      fontWeight={fontWeight}
      ref={ref}
    >
      {children}
    </MuiTypography>
  )
})
