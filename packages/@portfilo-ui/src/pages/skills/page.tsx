import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ConfirmationDialog } from '@mikoshi/application-components'
import SkillCard from 'components/skill-card/component'
import ProgrammingList from 'components/language-list/component'
// @ts-expect-error
import { ReactComponent as CodingLaptopSVG } from 'svgs/coding.svg'
import LanguageDetailCard from 'components/language-detail-card/component'

export default function Skills () {
  const TITLE = 'Technical Skills'

  const [language, setLanguage] = React.useState('')
  const [launchModal, toggleModal] = React.useState(false)
  const handleLanguageSelection = (key: string) => {
    setLanguage(key)
    toggleModal(!launchModal)
  }

  return (
    <Grid
      container
      className='skills'
      spacing={2}
      height='80vh'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Grid item xs={10} sm={10} md={10} lg={10} xl={4}>
        <Typography variant='h4' color='primary' fontWeight={600}>{TITLE}</Typography>
        <SkillCard skillKey='Performance' label='Performance Optimization' level={5} />
        <SkillCard skillKey='Troubleshooting' label='Troubleshooting and Solutions Deployment' level={5} />
        <SkillCard skillKey='Analysis' label='Analytical Thinking Skills' level={4.5} />
        <SkillCard skillKey='Software' label='Software Design and Development' level={4} />
        <ProgrammingList action={handleLanguageSelection} selected={language} />
      </Grid>

      <Grid item xs={10} sm={10} md={10} lg={10} xl={4}>
        <CodingLaptopSVG />
      </Grid>

      <ConfirmationDialog title={language} isOpen={launchModal} onCancel={() => handleLanguageSelection('')} onConfirm={() => {}}>
        <LanguageDetailCard language={language} />
      </ConfirmationDialog>
    </Grid>
  )
}
