import '@mikoshi/core-components/style'
import '@mikoshi/application-components/style'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'dark', class: ['dark', 'm-bg-grey-2'], color: '#0C1121' },
      { name: 'light', class: ['light', 'm-bg-lgrey-3'], color: '#F2F4F4' }
    ]
  }
}