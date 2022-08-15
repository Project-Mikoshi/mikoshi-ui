import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Scroll, Container } from '@mikoshi/core-components'
import '@testing-library/jest-dom'

describe('components/core/scroll', () => {
  it('should render', () => {
    const content = 'content'

    render(
      <Container fixed>
        <Scroll>
          <Container flex>
            {content}
          </Container>
        </Scroll>
      </Container>
    )

    expect(screen.getAllByText(content)[0]).toBeInTheDocument()
  })
})