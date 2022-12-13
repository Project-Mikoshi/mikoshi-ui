import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AppBar } from '@/components/specialized/AppBar'
import '@testing-library/jest-dom'

describe('components/specialized/app-bar', () => {
  it('should render', () => {
    render(<AppBar>app bar</AppBar>)

    expect(screen.getByText('app bar')).toBeInTheDocument()
  })
})