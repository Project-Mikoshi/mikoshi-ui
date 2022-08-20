import React from 'react'
import {
  Card,
  CardHeader,
  CardActionArea,
  CardFooter,
  CardContent,
  CardMedia,
  Typography,
  IconButton
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
      <CardHeader title={project.title} />
      <CardActionArea href={project.projectDemoUrl} target='_blank'>
        <CardMedia
          className='project-card-media'
          component='img'
          image={project.imageUrl}
          title={project.title}
        />
      </CardActionArea>
      <CardContent className='project-card-content'>
        <Typography variant='body1'>{project.description}</Typography>
      </CardContent>
      {project.projectRepoUrl && (
        <CardFooter className='project-card-actions'>
          <IconButton href={project.projectRepoUrl} target='_blank'>
            <ICONS.GITHUB />
          </IconButton>
        </CardFooter>
      )}
    </Card>
  )
}