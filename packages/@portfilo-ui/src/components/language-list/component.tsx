import React from 'react'
import { Paper, Tooltip, IconButton, Scroll, Container } from '@mikoshi/core-components'
import { PROGRAMING_LANGUAGE_ICONS } from 'constants/skills-languages'

interface ProgrammingLanguageCardProps {
    action: (_name: string) => void,
    selected?: string
}

export default function ProgrammingLanguageCard (props: ProgrammingLanguageCardProps) {
  // == Props ================================
  const { action, selected } = props
  // == Hooks ================================

  // == Functions ============================
  function getProgrammingLanguageIcons () {
    return PROGRAMING_LANGUAGE_ICONS.map((language, index: number) => {
      const { icon: Icon, name } = language
      return (
        <Tooltip title={name} key={index}>
          <div>
            <IconButton
              key={index}
              color={selected === name ? 'primary' : 'inherit'}
              onClick={() => action(name)} sx={{ '&:hover': { color: '#009eef' } }}
            >
              <Icon key={index} />
            </IconButton>
          </div>
        </Tooltip>
      )
    })
  }

  // == Actions ==============================

  // == Template =============================
  return (
    <Paper sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      overflow: 'auto',
      width: '100%'
    }}>
      <Scroll>
        <Container flex disableGutters className='m-flex-justify-around'>
          {getProgrammingLanguageIcons()}
        </Container>
      </Scroll>
    </Paper>
  )
}
