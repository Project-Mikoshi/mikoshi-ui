import React from 'react'
import { Paper, Slide, Typography, Fade, Container } from '@mui/material'
import { ReactComponent as CodingLaptopSVG} from 'static/coding.svg'

export default function ProgrammingLanguageCard (props: {language: string}) {
  const { language } = props

  const Card: JSX.Element = renderCard(language)
  return (
    <Slide in={true} timeout={1000} direction='left'>
      <Container>
        <div className='coding-laptop start'>
          <CodingLaptopSVG />
        </div>
        {Card}
      </Container>
    </Slide>
  )
}

function renderCard (language: string): JSX.Element {
  if (!language || language === 'default') {
    return (<div />)
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
