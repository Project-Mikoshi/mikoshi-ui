import React from 'react'
import { Paper, Slide, Typography, Fade } from '@mui/material'
import { ReactComponent as CodingLaptopSVG} from 'static/coding.svg'
import { PROGRAMMING_LANGUAGE_DESCRIPTIONS } from 'constants/skills-languages'

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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          marginBottom: '10px',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <Typography variant='h5' color='primary'>
          {language}
        </Typography>
        <Typography variant='body1'>
          {PROGRAMMING_LANGUAGE_DESCRIPTIONS[language]}
        </Typography>
      </Paper>
    </Fade>
  )
}
