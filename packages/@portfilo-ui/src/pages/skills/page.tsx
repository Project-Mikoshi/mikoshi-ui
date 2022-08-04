import React from 'react'
import { Grid, Typography, Modal } from '@mui/material'
import SkillCard from 'components/skill-card/component'
import ProgrammingList from 'components/language-list/component'
import { ReactComponent as CodingLaptopSVG } from 'svgs/coding.svg'
import LanguageDetailCard from 'components/language-detail-card/component'

export default function Skills () {
  const TITLE = 'Technical Skills'

  const [language, setLanguage] = React.useState('default')
  const [launchModal, toggleModal] = React.useState(false)
  const handleLanguageSelection = (key: string) => {
    if (key === language || key === 'default') {
      setLanguage('default')
      toggleModal(false)
    } else {
      setLanguage(key)
      toggleModal(true)
    }
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

      <Modal open={launchModal} onClose={() => handleLanguageSelection('default')}>
        <LanguageDetailCard language={language} />
      </Modal>
    </Grid>
  )
}
