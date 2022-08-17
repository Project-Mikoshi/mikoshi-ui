import React, { FC } from 'react'
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

interface SwitchProps extends MuiSwitchProps {
  size?: 'small' | 'medium',
  checkedIcon?: React.ReactNode,
  unCheckedicon?: React.ReactNode,
  disabled?: boolean,
  className?: string
}

export const Switch: FC<SwitchProps> = React.forwardRef((props, ref) => {
  // == Props ================================
  const {
    checkedIcon = <CircleIcon fontSize='inherit' />,
    unCheckedicon = <CircleIcon fontSize='inherit' />,
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
      icon={unCheckedicon}
      data-testid='mikoshi-switch'
      {...otherProps}
    />
  )
})
