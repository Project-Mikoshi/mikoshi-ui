import React from 'react'
import { Paper, Tooltip, IconButton, Color } from '@mikoshi/core-components'
import { PROGRAMING_LANGUAGE_ICONS } from 'constants/skills-languages'

interface ProgrammingLanguageCardProps {
    action: (_name: string) => void,
    selected?: string
}

export default function ProgrammingLanguageCard (props: ProgrammingLanguageCardProps) {
  const { action, selected } = props

  return (
    <Paper sx={
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        marginBottom: '10px',
        overflow: 'auto',
        width: '100%'
      }
    }>
      {PROGRAMING_LANGUAGE_ICONS.map((language, index: number) => {
        const { icon: Icon, name } = language
        return (
          <Tooltip title={name} key={index}>
            <IconButton
              key={index}
              color={selected === name ? Color.PRIMARY : Color.INHERIT}
              onClick={() => action(name)} sx={{ '&:hover': { color: '#009eef' } }}
            >
              <Icon key={index} />
            </IconButton>
          </Tooltip>
        )
      })}
    </Paper>
  )
}
