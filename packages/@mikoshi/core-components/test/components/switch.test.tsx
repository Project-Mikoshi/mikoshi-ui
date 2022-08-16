import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Switch } from '@mikoshi/core-components'
import '@testing-library/jest-dom'

describe('components/application/switch', () => {
  it('should render', () => {
    render(<Switch />)

    expect(screen.getByTestId('mikoshi-switch')).toBeInTheDocument()
  })
})