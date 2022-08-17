import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Container, Typography } from '@mikoshi/core-components'
import { SimpleDialog } from '@mikoshi/application-components'
import { PROJECTS } from 'constants/projects'
import { ProjectCard } from 'components/ProjectCard'
import { SkillCard } from 'components/SkillCard'
import { LanguageList as ProgrammingList } from 'components/LanguageList'
import { LanguageDetailCard } from 'components/LanguageDetailCard'

export const Projects = () => {
  // == Props ================================
  const TITLE = 'Technical Skills'

  // == Hooks ================================
  const [language, setLanguage] = useState('')
  const [launchModal, toggleModal] = useState(false)

  // == Functions ============================

  // == Actions ==============================
  function handleLanguageSelection (key: string) {
    setLanguage(key)
  }

  function selectLanguage (language: string) {
    handleLanguageSelection(language)
    toggleModal(true)
  }

  function closeModal () {
    toggleModal(false)
  }

  // == Template =============================
  return (
    <Container className='projects' disableGutters flex>
      <Grid
        container
        className='project-cards'
        spacing={2}
        padding={2}
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
      >
        {Object.keys(PROJECTS).map((project: string) => (
          <Grid item key={project}>
            <ProjectCard key={project} project={PROJECTS[project]} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        className='skills'
        spacing={2}
        padding={2}
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Grid item xs={10}>
          <Typography variant='h4' color='primary' fontWeight={600}>{TITLE}</Typography>
          <SkillCard skillKey='Performance' label='Performance Optimization' level={5} />
          <SkillCard skillKey='Troubleshooting' label='Troubleshooting and Solutions Deployment' level={5} />
          <SkillCard skillKey='Analysis' label='Analytical Thinking Skills' level={4.5} />
          <SkillCard skillKey='Software' label='Software Design and Development' level={4} />
          <ProgrammingList action={selectLanguage} selected={language} />
        </Grid>
        <SimpleDialog title={language} isOpen={launchModal} onCancel={closeModal} onAfterClose={() => handleLanguageSelection('')}>
          <LanguageDetailCard language={language} />
        </SimpleDialog>
      </Grid>
    </Container>
  )
}

