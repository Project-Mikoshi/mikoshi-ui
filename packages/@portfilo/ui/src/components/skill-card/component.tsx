import React from 'react'
import { Paper, Typography, Box, Slide, Rating } from '@mui/material'
import { IconType } from 'react-icons'
import { SKILLS } from 'constants/skills-languages'

export default function SkillCard (props: {skillKey: string, label: string, level: number}) {
  const { skillKey, label, level } = props

  const iconComponents = SKILLS[skillKey.toUpperCase()] ?? []

  return (
    <Slide in={true} timeout={1000} direction='right'>
      <Paper sx={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          marginBottom: '10px',
          overflow: 'hidden',
          width: '100%'
        }
      }>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box sx={{minWidth: '30px', display: 'flex', justifyContent: 'flex-start', columnGap: '5px'}}>
            {iconComponents.map((Icon: IconType, index: number) => (
              <Icon key={index} style={{color: '#009eef'}} />
            ))}
          </Box>
          <Typography variant='body1'>{label}</Typography>
        </Box>

        <Rating value={level} defaultValue={0} precision={0.25} readOnly/>

      </Paper>
    </Slide>
  )
}
