import React from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { Switch } from '@/components/core/Switch'
import { Tooltip } from '@/components/core/Tooltip'

interface DarkModeSwitchProps {
  checked?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
}

export default function (props: DarkModeSwitchProps) {
  // == Props ================================
  const {
    checked = false,
    onChange,
    className = ''
  } = props

  const tooltipText = checked ? 'Switch to light mode' : 'Switch to dark mode'

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Tooltip title={tooltipText}>
      <Switch
        className={`mikoshi-dark-mode-switch ${className}`}
        checkedIcon={<DarkModeOutlinedIcon fontSize='medium' />}
        uncheckedIcon={<LightModeOutlinedIcon fontSize='medium' />}
        size='medium'
        checked={checked}
        onChange={onChange}
        data-testid='mikoshi-dark-mode-switch'
      />
    </Tooltip>
  )
}