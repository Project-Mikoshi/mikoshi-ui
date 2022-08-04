/**
 *
 *  Panes Badge Stories
 *
 */

import React from 'react'
import { AppBar } from '@mikoshi/core-components'

export default {
  title: 'Core/AppBar'
}

const Template = () => (
  <AppBar>
    <div>
      <button>hello</button>
    </div>
  </AppBar>
)

export const AppBarDemo = Template.bind({})
