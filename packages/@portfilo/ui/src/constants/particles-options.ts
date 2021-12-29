export const OPTIONS = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#000",
    },
    links: {
      color: "#000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      random: true,
      speed: 5
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 25,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}
