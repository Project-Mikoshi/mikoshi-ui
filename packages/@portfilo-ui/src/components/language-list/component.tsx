import React from 'react'
import { Paper, IconButton, Tooltip } from '@mui/material'
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
        console.log(selected, name)
        return (
          <Tooltip title={name} key={index}>
            <IconButton
              key={index}
              color={selected === name ? 'primary' : 'default'}
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
