import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  CardFooter,
  Typography
} from '@mikoshi/core-components'
import '@testing-library/jest-dom'

describe('components/core/card', () => {
  it('should render', () => {
    const title = 'Test'
    const content = 'A simple modal component'
    const footer = 'control'

    render(
      <Card>
        <CardHeader title={title}/>
        <CardActionArea>
          <Typography>{content}</Typography>
        </CardActionArea>
        <CardContent>
          <Typography>{content}</Typography>
        </CardContent>
        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    )

    expect(screen.getAllByText(title)[0]).toBeInTheDocument()
    expect(screen.getAllByText(content)[0]).toBeInTheDocument()
    expect(screen.getAllByText(footer)[0]).toBeInTheDocument()
  })
})
