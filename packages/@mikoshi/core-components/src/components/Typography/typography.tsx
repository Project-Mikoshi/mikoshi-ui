import React, { FC } from 'react'
import { Typography as MuiTypography, SxProps } from '@mui/material'

interface TypographyProps {
  sx?: SxProps,
  align?: string,
  noWrap?: boolean,
  paragraph?: boolean,
  textOverflow?: string,
  whiteSpace?: string,
  overflow?: string,
  variant?: string,
  component?: string
  className?: string,
  children?: React.ReactNode
}
type TypographyRef = React.ForwardedRef<HTMLElement>

export const Typography: FC<TypographyProps> = React.forwardRef((props, ref: TypographyRef) => {
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
    className = '',
    ...otherProps
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiTypography
      className={`mikoshi-typography ${className}`}
      variant={variant as any}
      align={align as any}
      noWrap={noWrap}
      paragraph={paragraph}
      component={component as any}
      whiteSpace={whiteSpace as any}
      textOverflow={textOverflow}
      overflow={overflow}
      {...otherProps}
    >
      {children}
    </MuiTypography>
  )
})
