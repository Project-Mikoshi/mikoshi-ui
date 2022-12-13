import React from 'react'
import { Box, Rating, Tooltip } from '@mui/material'
import { Stars, StarBorder } from '@mui/icons-material'
import { Paper, Typography } from '@mikoshi/components/core'
import { IconType } from 'react-icons'
import { SKILLS } from '@/constants/skills-languages'

export const SkillCard = (props: {skillKey: string, label: string, level: number}) => {
  const { skillKey, label, level } = props

  const iconComponents = SKILLS[skillKey.toUpperCase()] ?? []

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        marginBottom: '10px',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden' }}>
        <Box sx={{ minWidth: '30px', display: 'flex', justifyContent: 'flex-start', columnGap: '5px' }}>
          {iconComponents.map((Icon: IconType, index: number) => (
            <Icon key={index} style={{ color: '#009eef' }} />
          ))}
        </Box>
        <Tooltip title={label}>
          <Typography variant='body1' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>{label}</Typography>
        </Tooltip>

      </Box>

      <Rating
        value={level}
        defaultValue={0}
        precision={0.25}
        icon={<Stars fontSize='inherit' color='primary' />}
        emptyIcon={<StarBorder fontSize='inherit' color='primary' />}
        readOnly
      />

    </Paper>
  )
}
