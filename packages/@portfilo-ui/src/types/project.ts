import { IconType } from 'react-icons'

export type ProjectCardData = {
  title: string,
  imageUrl: string,
  description: string,
  projectDemoUrl: string,
  subtitles?: Array<IconType>,
  projectRepoUrl?: string
}