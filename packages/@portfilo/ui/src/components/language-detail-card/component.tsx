import React from 'react'
import { Paper, Slide, Typography, Fade } from '@mui/material'
import { ReactComponent as CodingLaptopSVG} from 'static/coding.svg'

export default function ProgrammingLanguageCard (props: {language: string}) {
  const { language } = props
  if (!language || language === 'default') {
    return (
      <Slide in={true} timeout={1000} direction='left' className='coding-laptop start'>
        <CodingLaptopSVG />
      </Slide>
    )
  }

  return (
    <Fade in={true} timeout={1000}>
      <Paper
        sx={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
            marginBottom: '10px',
            overflow: 'hidden',
            width: '100%'
          }
        }
      >
        <Typography variant='h5' color='primary'>
          {language}
        </Typography>
      </Paper>
    </Fade>
  )
}
