import type { StorybookConfig } from '@storybook/react-vite'

export default {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes'
  ],

  framework: '@storybook/react-vite',

  async viteFinal(config, options) {
    // Add your configuration here
    return config
  }
} as StorybookConfig