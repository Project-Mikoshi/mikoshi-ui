import React from 'react'
import { IconButton } from '@mikoshi/core-components'
import { SOCIAL_MEDIAS, ICONS } from 'constants/social-media'

export default function SocialMediaButton (props: {type: string}) {
  const type = props.type.toUpperCase()
  const IconComponent = ICONS[type]

  return (
    <IconButton href={SOCIAL_MEDIAS[type]} target='_blank' rel='noopener' sx={{ '&:hover': { color: '#009eef' } }}>
      <IconComponent />
    </IconButton>
  )
}
