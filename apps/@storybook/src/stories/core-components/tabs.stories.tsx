import React, { useState } from 'react'
import { AppBar, Container, Typography, Tabs, Tab } from '@mikoshi/components/core'

export default {
  title: 'Core/Tabs',
  component: Tab
}

const Template = () => {
  // == Props ================================

  // == Hooks ================================
  const [selectedTab, setSelectedTab] = useState(1)

  // == Functions ============================

  // == Actions ==============================
  function onTabSelection (tab: number) {
    setSelectedTab(tab)
  }

  // == Template =============================
  const TABS = [
    { value: 1, label: 'Tab 1' },
    { value: 2, label: 'Tab 2' },
    { value: 3, label: 'Tab 3' },
    { value: 4, label: 'Tab 4' },
    { value: 5, label: 'Tab 5' }
  ]

  return (
    <AppBar>
      <Container>
        <Typography variant='h6'>Tabs Demo</Typography>
      </Container>
      <Tabs selected={selectedTab} className='m-flex-justify-end m-flex-align-center'>
        {TABS.map((tab, index) => (
          <Tab key={index} value={tab.value} label={tab.label} onClick={() => onTabSelection(tab.value)} />
        ))}
      </Tabs>
    </AppBar>
  )
}

export const TabsDemo = Template.bind({})
