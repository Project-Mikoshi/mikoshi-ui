import React from 'react'
import './style.scss'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Zoom } from '@material-ui/core'

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