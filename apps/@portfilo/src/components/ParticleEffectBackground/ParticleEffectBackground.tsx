import React, { FC, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine, Container } from 'tsparticles-engine'
import { OPTIONS } from '@/constants/particles-options'

interface ParticleEffectBackgroundProps {
  theme?: 'dark' | 'light'
}

export const ParticleEffectBackground: FC<ParticleEffectBackgroundProps> = (props) => {
  // == Props ================================
  const { theme = 'light' } = props

  // == Hooks ================================
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    container?.loadTheme(theme)
  }, [theme])

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Particles init={particlesInit} options={OPTIONS} loaded={particlesLoaded} />
  )
}
