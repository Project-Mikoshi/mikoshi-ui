import { RecursivePartial, IOptions } from 'tsparticles-engine'

export const OPTIONS: RecursivePartial<IOptions> = {
  fpsLimit: 60,
  particles: {
    color: {
      value: '#000'
    },
    links: {
      color: '#000',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      random: true,
      speed: 5
    },
    number: {
      density: {
        enable: true,
        area: 1000
      },
      value: 20
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true,
  themes: [
    {
      name: 'light',
      default: {
        value: true,
        mode: 'light'
      },
      options: {
        particles: {
          color: {
            value: '#414141'
          }
        }
      }
    },
    {
      name: 'dark',
      default: {
        value: true,
        mode: 'dark'
      },
      options: {
        particles: {
          color: {
            value: '#fff'
          }
        }
      }
    }
  ]
}
