import React, { useState } from 'react'
import { DarkModeSwitch } from '@mikoshi/application-components'
import { Container, Typography } from '@mikoshi/core-components'

export default {
  title: 'Application/Dark Mode Switch',
  component: DarkModeSwitch
}

const Template = () => {
  const [checked, setCheck] = useState(false)

  const toggleTheme = () => {
    setCheck(!checked)
  }

  const text = checked ? 'Dark Mode Enabled' : 'Light Mode Enabled'

  return (
    <div className={`app m-height-100 m-width-100 ${checked ? 'm-bg-night-2' : 'm-bg-lgrey-1'}`} data-theme={`${checked ? 'dark' : 'light'}`}>
      <Container>
        <Typography variant='h6'>{text}</Typography>
        <DarkModeSwitch onChange={toggleTheme} checked={checked} />
      </Container>
    </div>
  )
}

export const ConfirmationDialogDemo = Template.bind({})
