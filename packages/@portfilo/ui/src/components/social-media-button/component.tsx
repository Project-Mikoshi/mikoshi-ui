import React from 'react'
import { IconButton } from '@mui/material'
import { LinkedIn, GitHub } from '@mui/icons-material'
import { SOCIAL_MEDIAS } from 'constants/external-links'

export default function SocialMediaButton (props: {type: string}) {
  const type = props.type.toUpperCase()
  const icons: Record<string, React.FunctionComponent> = {
    GITHUB: GitHub,
    LINKEDIN: LinkedIn
  }
  const IconComponent = icons[type]

  return (
    <IconButton href={SOCIAL_MEDIAS[type]} target='_blank' sx={{'&:hover': {color: '#009eef'}}}>
      <IconComponent />
    </IconButton>
  )
}
