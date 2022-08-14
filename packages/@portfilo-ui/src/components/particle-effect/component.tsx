import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'
import { OPTIONS } from 'constants/particles-options'

export default function ParticleBackground () {
  // == Props ================================

  // == Hooks ================================
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {}, [])

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Particles init={particlesInit} options={OPTIONS} loaded={particlesLoaded} />
  )
}
