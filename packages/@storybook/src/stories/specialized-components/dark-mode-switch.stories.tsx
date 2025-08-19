import React, { useState } from 'react'
import { DarkModeSwitch } from '@mikoshi/react/specialized.js'
import { Container, Typography } from '@mikoshi/react/core.js'

export default {
  title: 'Specialized/Dark Mode Switch',
  component: DarkModeSwitch
}

const Template = () => {
  const [checked, setCheck] = useState(true)

  const toggleTheme = () => {
    setCheck(!checked)
  }

  const text = checked ? 'Dark Mode Enabled' : 'Light Mode Enabled'

  return (
    <div className={`app m-height-100 m-width-100 ${checked ? 'm-bg-night-2' : 'm-bg-lgrey-4'}`} data-theme={`${checked ? 'dark' : 'light'}`}>
      <Container>
        <Typography variant='h6' color='primary'>{text}</Typography>
        <DarkModeSwitch onChange={toggleTheme} checked={checked} />
      </Container>
    </div>
  )
}

export const DarkModeSwitchgDemo = Template.bind({})
