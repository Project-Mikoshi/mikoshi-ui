/* eslint-disable no-unused-vars */
import { FaLaptopCode, FaRegLightbulb, FaTools, FaJava } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiCplusplus,
  SiRacket
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { CgPerformance } from 'react-icons/cg'
import { DiProlog } from 'react-icons/di'
import { IconType } from 'react-icons'

export enum Languages {
  HTML5 = 'HTML5',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  SQL = 'SQL',
  PROLOG = 'Prolog',
  CPP = 'C++',
  PYTHON = 'Python',
  SCHEME = 'Scheme',
  JAVA = 'Java'
}

export const SKILLS: Record<string, Array<IconType>> = {
  TROUBLESHOOTING: [FaTools],
  PERFORMANCE: [CgPerformance],
  ANALYSIS: [FaRegLightbulb],
  SOFTWARE: [FaLaptopCode]
}

export const PROGRAMING_LANGUAGE_ICONS = [
  { icon: SiHtml5, name: Languages.HTML5 },
  { icon: SiCss3, name: Languages.CSS },
  { icon: SiJavascript, name: Languages.JAVASCRIPT },
  { icon: SiTypescript, name: Languages.TYPESCRIPT },
  { icon: GrMysql, name: Languages.SQL },
  { icon: SiPython, name: Languages.PYTHON },
  { icon: SiCplusplus, name: Languages.CPP },
  { icon: DiProlog, name: Languages.PROLOG },
  { icon: SiRacket, name: Languages.SCHEME },
  { icon: FaJava, name: Languages.JAVA }
]

const LOREM = `
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n
`

export const PROGRAMMING_LANGUAGE_DESCRIPTIONS: Record<string, string> = {
  [Languages.HTML5]: LOREM,
  [Languages.CSS]: LOREM,
  [Languages.JAVASCRIPT]: LOREM,
  [Languages.TYPESCRIPT]: LOREM,
  [Languages.SQL]: LOREM,
  [Languages.PROLOG]: LOREM,
  [Languages.CPP]: LOREM,
  [Languages.PYTHON]: LOREM,
  [Languages.SCHEME]: LOREM,
  [Languages.JAVA]: LOREM
}
