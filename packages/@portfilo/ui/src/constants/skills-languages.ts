import { FaLaptopCode, FaRegLightbulb, FaTools, FaJava } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiCplusplus,
  SiHaskell
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
  HASKELL = 'Haskell',
  JAVA = 'Java'
}

export const SKILLS: Record<string, Array<IconType>> = {
  TROUBLESHOOTING: [FaTools],
  PERFORMANCE: [CgPerformance],
  ANALYSIS: [FaRegLightbulb],
  SOFTWARE: [FaLaptopCode]
}

export const PROGRAMING_LANGUAGE_ICONS = [
  {icon: SiHtml5, name: Languages.HTML5},
  {icon: SiCss3, name: Languages.CSS},
  {icon: SiJavascript, name: Languages.JAVASCRIPT},
  {icon: SiTypescript, name: Languages.TYPESCRIPT},
  {icon: GrMysql, name: Languages.SQL},
  {icon: SiPython, name: Languages.PYTHON},
  {icon: SiCplusplus, name: Languages.CPP},
  {icon: DiProlog, name: Languages.PROLOG},
  {icon: SiHaskell, name: Languages.HASKELL},
  {icon: FaJava, name: Languages.JAVA}
]