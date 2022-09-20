import React from 'react'
import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip
} from '@mikoshi/core-components'
import { ProjectCardData } from 'types/project'
import { ICONS } from 'constants/social-media'

export const ProjectCard = (props: {project: ProjectCardData}) => {
  // == Props ================================
  const { project } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Card className='project-card'>
      <CardHeader
        title={project.title}
        avatar={
          <Tooltip title='Check out source code'>
            <IconButton href={project.projectRepoUrl} target='_blank' disabled={!project.projectRepoUrl}>
              <ICONS.GITHUB />
            </IconButton>
          </Tooltip>
        }
      />
      <CardActionArea href={project.projectDemoUrl} target='_blank'>
        <CardMedia
          className='project-card-media'
          component='svg'
          height={200}
          image={project.imageUrl}
          title={project.title}
        />
      </CardActionArea>
      <CardContent className='project-card-content'>
        <Typography variant='body1'>{project.description}</Typography>
      </CardContent>
    </Card>
  )
}