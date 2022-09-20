import { create } from '@storybook/theming'
// @ts-expect-error
import logo from './logo.svg'

export default create({
  base: 'light',
  brandTitle: '@Mikoshi Storybook',
  brandImage: logo
})
