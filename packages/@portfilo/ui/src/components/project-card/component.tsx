import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grow,
  Box
} from '@mui/material'
import { ProjectCardData } from 'types/project'

export default function ProjectCard (props: {project: ProjectCardData}) {
  const { project } = props
  const subtitleIcons = project.subtitles

  return (
    <Grow in={true} timeout={1000}>
      <Card className='project-card'>
        <CardActionArea onClick={() => project.action(project.projectDemoUrl)}>
          <CardMedia
            className='project-card-media'
            component='img'
            image={project.imageUrl}
            title={project.title}
          />
        </CardActionArea>
        <CardContent className='project-card-content'>
          <Typography variant='body1'>{project.description}</Typography>
          <Box className='project-card-icons'>
            {subtitleIcons.map((Icon, index: number) => (
              <Icon className='icon' key={index} />
            ))}
          </Box>
        </CardContent>
        <CardActions className='project-card-actions'>
          <Button variant='contained' color='primary' onClick={() => project.action(project.projectDemoUrl)}>
            {project.title}
          </Button>
        </CardActions>
      </Card>
    </Grow>
  )
}