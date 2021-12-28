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
      <Card sx={{height: '400px', width: '400px', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
        <CardActionArea onClick={() => project.action(project.projectDemoUrl)}>
          <CardMedia
            className='project-card-media'
            component='img'
            image={project.imageUrl}
            title={project.title}
          />
        </CardActionArea>
        <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', height: '100%'}}>
          <Typography variant='body1'>{project.description}</Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            {subtitleIcons.map((Icon, index: number) => (
              <Icon key={index} style={{color: '#009eef', fontSize: '1.5rem'}}/>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
          <Button variant='contained' color='primary' onClick={() => project.action(project.projectDemoUrl)}>
            {project.title}
          </Button>
        </CardActions>
      </Card>
    </Grow>
  )
}