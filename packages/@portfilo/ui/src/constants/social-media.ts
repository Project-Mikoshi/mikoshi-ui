import { LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material'

export const SOCIAL_MEDIAS: Record<string, string> = {
  LINKEDIN: 'https://www.linkedin.com/in/anthony-y-zhu/',
  GITHUB: 'https://github.com/anthony-y-zhu14',
  FACEBOOK: 'https://www.facebook.com/anthony.zhu1114',
  INSTAGRAM: 'https://www.instagram.com/anthony.stardust/'
}

export const ICONS: Record<string, React.FunctionComponent> = {
  GITHUB: GitHub,
  LINKEDIN: LinkedIn,
  FACEBOOK: Facebook,
  INSTAGRAM: Instagram
}
