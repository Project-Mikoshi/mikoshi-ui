import React, { FC } from 'react'
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

interface SwitchProps extends MuiSwitchProps {
  size?: 'small' | 'medium',
  checkedIcon?: React.ReactNode,
  uncheckedIcon?: React.ReactNode,
  disabled?: boolean,
  className?: string
}

export const Switch: FC<SwitchProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    checkedIcon = <CircleIcon fontSize='inherit' />,
    uncheckedIcon = <CircleIcon fontSize='inherit' />,
    className = '',
    size = 'small',
    disabled = false,
    ...otherProps
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiSwitch
      className={`mikoshi-switch ${className}`}
      size={size}
      disabled={disabled}
      checkedIcon={checkedIcon}
      icon={uncheckedIcon}
      data-testid='mikoshi-switch'
      {...otherProps}
      ref={ref}
    />
  )
})
