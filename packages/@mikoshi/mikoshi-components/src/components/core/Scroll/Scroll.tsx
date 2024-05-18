import React, { useEffect, useRef, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ScrollProps {
  className?: string,
  children?: React.ReactNode
}

export default function (props: ScrollProps) {
  // == Props ================================
  const {
    children,
    className = ''
  } = props

  // == Hooks ================================
  const scrollRef = useRef<PerfectScrollbar>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [resizeObserver, setResizeObserver] = useState<ResizeObserver>()

  useEffect(() => {
    if (window.ResizeObserver && scrollRef.current && containerRef.current) {
      if (!resizeObserver) {
        setResizeObserver(new ResizeObserver(updatePerfectScroll))
      }

      resizeObserver!.observe(containerRef.current.parentElement as Element)
      resizeObserver!.observe(containerRef.current.firstChild as Element)
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [scrollRef.current, containerRef.current])

  // == Functions ============================
  function updatePerfectScroll () {
    scrollRef.current?.updateScroll()
  }

  // == Actions ==============================

  // == Template =============================
  return (
    <div ref={containerRef} className='m-height-100 m-width-100'>
      <PerfectScrollbar className={`mikoshi-scroll ${className ?? ''}`} ref={scrollRef} data-testid='mikoshi-scroll'>
        {children}
      </PerfectScrollbar>
    </div>
  )
}
