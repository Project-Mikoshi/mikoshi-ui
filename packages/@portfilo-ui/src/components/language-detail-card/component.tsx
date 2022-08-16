import React from 'react'
import { Typography } from '@mikoshi/core-components'
import { PROGRAMMING_LANGUAGE_DESCRIPTIONS } from 'constants/skills-languages'

export default function ProgrammingLanguageCard (props: {language: string}) {
  const { language } = props
  if (!language || language === 'default') {
    return (<></>)
  }

  return (
    <>
      <Typography variant='h5' color='primary'>
        {language}
      </Typography>
      <Typography variant='body1'>
        {PROGRAMMING_LANGUAGE_DESCRIPTIONS[language]}
      </Typography>
    </>
  )
}
