import React from 'react'
import PorjectCard from 'components/project-card/component'
import { projects } from 'constants/projects'
import { Grid, Typography } from '@mui/material'

export default function Projects () {
  const TITLE = 'Projects'

  return (
    <Grid
      container
      className='works'
      spacing={6}
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Typography variant='h3' color='primary' fontWeight={600}>{TITLE}</Typography>
      </Grid>
      {Object.keys(projects).map((project: string) => (
        <Grid item key={project}>
          <PorjectCard key={project} project={projects[project]} />
        </Grid>
      ))}
    </Grid>
  )
}
