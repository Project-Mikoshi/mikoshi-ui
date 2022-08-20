import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import UCLEI from 'svgs/UCLEI.png'
import SHOPPIES from 'svgs/Shoppies.png'
import QUICKIN from 'svgs/QuickIn.png'
import Mikoshi from 'svgs/Mikoshi.svg'
import { type ProjectCardData } from 'types/project'

export const PROJECTS: Record<string, ProjectCardData> = {
  MIKOSHI: {
    title: 'Mikoshi',
    description: 'A comprehensive library of react ui components that features Google\'s Material Design system and Glassmorphism',
    imageUrl: Mikoshi,
    projectDemoUrl: 'https://62fc0f7c0d92b3b43bd42f5d-aftsqdiujd.chromatic.com/',
    projectRepoUrl: 'https://github.com/anthony-y-zhu14/MikoshiUI'
  },
  QuickIn : {
    title: 'QuickIn',
    description: 'A simple check-in app that simplfies the gathering of contact tracing information',
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: QUICKIN,
    projectDemoUrl: 'https://quickin.herokuapp.com/',
    projectRepoUrl: 'https://github.com/anthony-y-zhu14/QuickIn'
  },
  UCLEI : {
    title: 'UCLEI',
    description: 'A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works',
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: UCLEI,
    projectDemoUrl: 'https://uclei.herokuapp.com/',
    projectRepoUrl: 'https://github.com/anthony-y-zhu14/UCLEI'
  },
  Shoppies : {
    title: 'The Shoppies',
    description: 'A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.',
    subtitles: [FaReact],
    imageUrl: SHOPPIES,
    projectDemoUrl: 'https://anthony-y-zhu14.github.io/The-Shoppies/',
    projectRepoUrl: 'https://github.com/anthony-y-zhu14/Shoppies'
  }
}
