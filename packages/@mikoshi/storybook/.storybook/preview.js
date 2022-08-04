import "@mikoshi/core-components/style"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "dark",
    list: [
      { name: "dark", class: "m-bg-night-2", color: "#0C1121" },
      { name: "light", class: "m-bg-lgrey-3", color: "#F2F4F4" }
    ]
  }
}