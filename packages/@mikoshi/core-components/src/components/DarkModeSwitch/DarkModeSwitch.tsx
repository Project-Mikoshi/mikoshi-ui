import React, { FC } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { Switch } from 'components/Switch'
import { Tooltip } from 'components/Tooltip'

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

  const tooltipText = checked ? 'Swtich to light mode' : 'Swtich to dark mode'

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