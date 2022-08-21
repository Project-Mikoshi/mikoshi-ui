import React, { useState, useEffect, FC } from 'react'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { SimpleDialog } from '@mikoshi/application-components'
import { PROJECTS } from 'constants/projects'
import { ProjectCard } from 'components/ProjectCard'
import { SkillCard } from 'components/SkillCard'
import { LanguageList as ProgrammingList } from 'components/LanguageList'
import { LanguageDetailCard } from 'components/LanguageDetailCard'

interface ProjectsProps {
  onRouteChange: (newRoute: string) => void
}

export const Projects: FC<ProjectsProps> = (props) => {
  // == Props ================================
  const { onRouteChange } = props
  const CARD_SIZE = {
    xl: 500,
    xs: 400
  }

  // == Hooks ================================
  const route = useLocation()
  const [language, setLanguage] = useState('')
  const [launchModal, toggleModal] = useState(false)

  useEffect(() => {
    onRouteChange(route.pathname)
  }, [route.pathname])

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
    <Grid className='projects' container justifyContent='center'>

      <Grid className='cards' container spacing={2} padding={2} xl={8} lg={10} md={12} sm={12} xs={12}>
        {Object.keys(PROJECTS).map((project: string) => (
          <Grid item key={project} sx={{ height: CARD_SIZE, width: CARD_SIZE }}>
            <ProjectCard key={project} project={PROJECTS[project]} />
          </Grid>
        ))}
      </Grid>

      <Grid className='skills' container spacing={2} padding={2} xl={4} lg={8} md={10} sm={10} xs={12}>
        <Grid item xs={10}>
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

    </Grid>
  )
}

