import React from 'react'
import { IconButton } from '@mikoshi/core-components'
import { SOCIAL_MEDIAS, ICONS } from 'constants/social-media'

export const SocialMediaButton = (props: {type: string}) => {
  const type = props.type.toUpperCase()
  const IconComponent = ICONS[type]

  return (
    <IconButton href={SOCIAL_MEDIAS[type]} target='_blank'>
      <IconComponent />
    </IconButton>
  )
}
