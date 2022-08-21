import React, { FC } from 'react'
import { Paper, Tooltip, IconButton, Scroll, Container } from '@mikoshi/core-components'
import { PROGRAMING_LANGUAGE_ICONS } from 'constants/skills-languages'

interface LanguageListProps {
    action: (_name: string) => void,
    selected?: string
}

export const LanguageList: FC<LanguageListProps> = (props) => {
  // == Props ================================
  const { action, selected } = props
  // == Hooks ================================

  // == Functions ============================
  function getProgrammingLanguageIcons () {
    return PROGRAMING_LANGUAGE_ICONS.map((language, index: number) => {
      const { icon: Icon, name } = language
      return (
        <Tooltip title={name} key={index}>
          <Container flex disableGutters>
            <IconButton
              key={index}
              color={selected === name ? 'primary' : 'inherit'}
              onClick={() => action(name)} sx={{ '&:hover': { color: '#009eef' } }}
            >
              <Icon key={index} />
            </IconButton>
          </Container>
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
