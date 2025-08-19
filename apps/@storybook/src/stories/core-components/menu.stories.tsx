import React from 'react'
import {
  Menu,
  MenuItem,
  Button
} from '@mikoshi/react'

export default {
  title: 'Core/Menu',
  component: Menu
}

const Template = () => {
  // == Props ================================

  // == Hooks ================================
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  // == Functions ============================

  // == Actions ==============================
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // == Template =============================

  return (
    <>
      <Button variant='contained' onClick={handleClick}>Menu</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export const MenuDemo = Template.bind({})
