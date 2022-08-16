module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: '@storybook/react'
}
