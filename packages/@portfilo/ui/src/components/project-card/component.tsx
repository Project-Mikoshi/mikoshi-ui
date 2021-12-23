import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Zoom } from '@mui/material'

export interface ProjectCardData {
  title: string,
  subtitles: string
  imageUrl?: string,
  description?: string,
  action?: () => void
}

export default function ProjectCard (props: {project: ProjectCardData}) {
  const { project } = props
  const buttonLabel = 'Check out this Project'

  return (
    <Zoom in={true}>
      <Card className='project-card'>
        <CardActionArea onClick={project.action}>
          <CardMedia className='project-card-media' image={project.imageUrl} title={project.title} />
        </CardActionArea>
        <CardContent className='project-card-content'>
          <Typography className='project-card-content-desription'>{project.description}</Typography>
          <Typography className='project-card-content-subtitles'>{project.subtitles}</Typography>
        </CardContent>
        <CardActions className='project-card-action'>
          <Button variant='contained' color='primary' onClick={project.action}>{buttonLabel}</Button>
        </CardActions>
      </Card>
    </Zoom>
  )
}