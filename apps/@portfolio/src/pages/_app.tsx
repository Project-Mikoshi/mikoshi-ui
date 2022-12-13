import React, { useState } from 'react'
import { Scroll } from '@mikoshi/components/core'
import { NavBar } from '@/components/NavBar'
import { ParticleEffectBackground } from '@/components/ParticleEffectBackground'
import { ROUTE } from '@/constants/route'
import { Theme } from '@/types/theme'
import './styles.scss'

export default function App (props: any) {
  // == Props ================================
  const { Component, pageProps } = props
  const { HOME, PROJECTS } = ROUTE

  // == Hooks ================================
  const [theme, setTheme] = useState('light' as Theme)

  // == Functions ============================
  function updateBodyTheme (newTheme: Theme) {
    const bodyClassList = document.body.classList
    const theme = ['dark', 'light']

    theme.forEach(theme => {
      bodyClassList.remove(theme)
    })

    bodyClassList.add(newTheme)
    setTheme(newTheme)
  }

  // == Actions ==============================
  const onThemeChange = (newTheme: Theme) => updateBodyTheme(newTheme)

  // == Template =============================
  return (
    <div className='app' data-theme={theme}>
      <NavBar
        routes={[HOME, PROJECTS]}
        onThemeChange={onThemeChange}
        theme={theme}
      />
      <ParticleEffectBackground theme={theme} />
      <Scroll className='outlet'>
        <Component {...pageProps} />
      </Scroll>
    </div>
  )
}
