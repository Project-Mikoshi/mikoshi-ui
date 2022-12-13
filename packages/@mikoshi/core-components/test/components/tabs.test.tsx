import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Tabs, Tab } from '@mikoshi/core-components'
import '@testing-library/jest-dom'

describe('components/core/tabs', () => {
  it('should render', () => {
    const TABS = [
      { value: 1, label: 'Tab 1' },
      { value: 2, label: 'Tab 2' },
      { value: 3, label: 'Tab 3' },
      { value: 4, label: 'Tab 4' }
    ]

    render(
      <Tabs selected={TABS[0].value}>
        {TABS.map((tab, index) => (
          <Tab key={index} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
    )

    TABS.forEach(tab => expect(screen.getByText(tab.label)).toBeInTheDocument())
  })
})