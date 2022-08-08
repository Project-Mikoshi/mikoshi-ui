import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiEmberdotjs, SiSpring, SiSwagger, SiApachecassandra } from 'react-icons/si'
import UCLEI from 'svgs/UCLEI.png'
import SHOPPIES from 'svgs/Shoppies.png'
import QUICKIN from 'svgs/QuickIn.png'
import MCP from 'svgs/MCP.png'
import { ProjectCardData } from 'types/project'

export const PROJECTS: Record<string, ProjectCardData> = {
  MCP: {
    title: 'MCP',
    description: 'A Manage, Control and Plan software that provides analytics, software control, and automation to optimize multi-layer network performance',
    subtitles: [SiEmberdotjs, SiSpring, SiSwagger, SiApachecassandra],
    imageUrl: MCP,
    projectDemoUrl: 'https://www.ciena.com/products/manage-control-plan',
    action: openDemo
  },
  QuickIn : {
    title: 'QuickIn',
    description: 'A simple check-in app that simplfies the gathering of contact tracing information',
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: QUICKIN,
    projectDemoUrl: 'https://quickin.herokuapp.com/',
    action: openDemo
  },
  UCLEI : {
    title: 'UCLEI',
    description: 'A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works',
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: UCLEI,
    projectDemoUrl: 'https://uclei.herokuapp.com/',
    action: openDemo
  },
  Shoppies : {
    title: 'The Shoppies',
    description: 'A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.',
    subtitles: [FaReact],
    imageUrl: SHOPPIES,
    projectDemoUrl: 'https://anthony-y-zhu14.github.io/The-Shoppies/',
    action: openDemo
  }
}

// not really a constant i guess...
function openDemo (url: string) {
  window.open(url, '_blank')
}