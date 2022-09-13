import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mikoshi/core-components'
import '@testing-library/jest-dom'

describe('components/core/card', () => {
  it('should render', () => {
    const title = 'Test'
    const subTitle = 'sub'

    render(
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={title} secondary={subTitle} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={title} secondary={subTitle} />
          </ListItemButton>
        </ListItem>
      </List>
    )

    expect(screen.getAllByText(title)[0]).toBeInTheDocument()
    expect(screen.getAllByText(subTitle)[0]).toBeInTheDocument()
  })
})
