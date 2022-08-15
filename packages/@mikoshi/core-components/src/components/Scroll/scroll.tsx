import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ScrollProps {
  className?: string,
  children?: React.ReactNode
}

export class Scroll extends Component<ScrollProps> {
  // == Constructor ==========================
  constructor(props: ScrollProps) {
    super(props)
  }

  // == Props ================================
  container: Element | Text | null | undefined = null
  resizeObserver: ResizeObserver | null | undefined= null
  ref: PerfectScrollbar | null = null

  // == Lifecycle Hooks ======================
  componentDidMount () {
    // eslint-disable-next-line react/no-find-dom-node
    this.container = ReactDOM.findDOMNode(this)

    if (window.ResizeObserver && this.container) {
      this.resizeObserver = new ResizeObserver(this.updatePerfectScroll.bind(this))
      this.resizeObserver.observe(this.container.parentElement as Element)
      this.resizeObserver.observe(this.container.firstChild as Element)
    }
  }

  componentWillUnmount () {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  // == Functions ============================
  updatePerfectScroll () {
    this.ref?.updateScroll()
  }

  setScrollBarRef (ref: PerfectScrollbar | null) {
    this.ref = ref
  }

  // == Actions ==============================

  // == Template =============================
  render() {
    return (
      <PerfectScrollbar className={`mikoshi-scroll ${this.props.className ?? ''}`} ref={(ref) => this.setScrollBarRef(ref)} data-testid='mikoshi-scroll'>
        {this.props.children}
      </PerfectScrollbar>
    )
  }
}
