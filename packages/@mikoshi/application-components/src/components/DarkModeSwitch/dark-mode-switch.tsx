import { Switch } from '@mikoshi/core-components'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import React, { FC } from 'react'

interface DarkModeSwitchProps {
  checked?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
}

export const DarkModeSwitch: FC<DarkModeSwitchProps> = (props) => {
  // == Props ================================
  const {
    checked = false,
    onChange,
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Switch
      className={`mikoshi-dark-mode-switch ${className}`}
      checkedIcon={<DarkModeOutlinedIcon fontSize='medium' />}
      unCheckedicon={<LightModeOutlinedIcon fontSize='medium' />}
      size='medium'
      checked={checked}
      onChange={onChange}
    />
  )
}