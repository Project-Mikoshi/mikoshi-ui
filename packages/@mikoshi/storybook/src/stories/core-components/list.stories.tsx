import React from 'react'
import {
  List,
  ListItem,
  Paper,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mikoshi/core-components'
import { InboxOutlined, DraftsOutlined } from '@mui/icons-material'

export default {
  title: 'Core/List',
  component: List,
  args: {
    disablePadding: false,
    dense: false
  },
  argTypes: {
    disablePadding: { control: 'boolean' },
    dense: { control: 'boolean' }
  }
}

const Template = (props: any) => {
  // == Props ================================

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Paper>
      <List {...props}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="Inbox" secondary='check inbox' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DraftsOutlined />
            </ListItemIcon>
            <ListItemText primary="Drafts" secondary='view draft' />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  )
}

export const ListDemo = Template.bind({})
