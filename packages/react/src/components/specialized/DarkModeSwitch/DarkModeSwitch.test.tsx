import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DarkModeSwitch } from '@/components/specialized/DarkModeSwitch'
import '@testing-library/jest-dom'

describe('components/application/dark-mode-switch', () => {
  it('should render', () => {
    const props = {
      checked: true,
      onChange: () => {}
    }

    render(
      <DarkModeSwitch {...props} />
    )

    expect(screen.getByTestId('mikoshi-dark-mode-switch')).toBeTruthy()
  })
})