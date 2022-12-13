import React, { FC } from 'react'
import { Paper, Tooltip, IconButton, Scroll, Container } from '@mikoshi/components/core'
import { PROGRAMING_LANGUAGE_ICONS } from '@/constants/skills-languages'

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
        <Container flex disableGutters key={index}>
          <Tooltip title={name}>
            <IconButton
              key={index}
              color={selected === name ? 'primary' : 'inherit'}
              onClick={() => action(name)}
            >
              <Icon key={index} />
            </IconButton>
          </Tooltip>
        </Container>
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
