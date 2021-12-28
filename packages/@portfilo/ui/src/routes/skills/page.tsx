import React from 'react'
import { Grid, Typography } from '@mui/material'
import SkillCard from 'components/skill-card/component'
import ProgrammingList from 'components/language-list/component'
import LanguageDetailCard from 'components/language-detail-card/component'

export default function Skills () {
  const TITLE = 'Technical Skills'

  const [language, setLanguage] = React.useState('default')
  const handleLanguageSelection = (key: string) => {
    if (key === language) {
      setLanguage('default')
      return
    }

    setLanguage(key)
  }

  return (
    <Grid
      container
      className='skills'
      spacing={2}
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <Grid item xs={10} lg={4}>
        <Typography variant='h4' color='primary' fontWeight={600}>{TITLE}</Typography>
        <SkillCard skillKey='Performance' label='Performance Optimization' level={5} />
        <SkillCard skillKey='Troubleshooting' label='Troubleshooting and Solutions Deployment' level={5} />
        <SkillCard skillKey='Analysis' label='Analytical Thinking Skills' level={4.5} />
        <SkillCard skillKey='Software' label='Software Design and Development' level={4} />
        <ProgrammingList action={handleLanguageSelection} selected={language} />
      </Grid>

      <Grid item xs={10} lg={4}>
        <LanguageDetailCard language={language} />
      </Grid>
    </Grid>
  )
}
