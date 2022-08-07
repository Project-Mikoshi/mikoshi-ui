import React from 'react'
import { Typography } from '@mui/material'
import { Paper } from '@mikoshi/core-components'
import { PROGRAMMING_LANGUAGE_DESCRIPTIONS } from 'constants/skills-languages'

const style = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  bgcolor: 'background.paper',
  boxShadow: 24
}

export default function ProgrammingLanguageCard (props: {language: string}) {
  const { language } = props
  if (!language || language === 'default') {
    return (<></>)
  }

  return (
    <Paper
      sx={{
        ...style,
        position: 'absolute',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant='h5' color='primary'>
        {language}
      </Typography>
      <Typography variant='body1'>
        {PROGRAMMING_LANGUAGE_DESCRIPTIONS[language]}
      </Typography>
    </Paper>
  )
}
