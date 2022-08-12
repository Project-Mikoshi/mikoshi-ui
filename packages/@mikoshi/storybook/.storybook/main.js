module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    'storybook-addon-turbo-build'
  ],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
}