import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grow
} from '@mui/material'
import { ProjectCardData } from 'types/project'

export default function ProjectCard (props: {project: ProjectCardData}) {
  const { project } = props

  return (
    <Grow in={true} timeout={1000}>
      <Card sx={{height: '400px', width: '400px', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
        <CardActionArea onClick={project.action}>
          <CardMedia
            className='project-card-media'
            component='img'
            image={project.imageUrl}
            title={project.title}
          />
        </CardActionArea>
        <CardContent>
          <Typography>
            {project.description}
          </Typography>
          <Typography color='primary'>
            {project.subtitles}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'center', marginTop: 'auto'}}>
          <Button variant='contained' color='primary' onClick={project.action}>
            {project.title}
          </Button>
        </CardActions>
      </Card>
    </Grow>
  )
}