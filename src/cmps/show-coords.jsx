import React, { Component } from 'react'

export class ShowCoords extends Component {
  state = {
    mouseMoved: false,
  }
  get mouseCoords() {
    const { mouseMoved } = this.state
    if (!mouseMoved) return
    return `X:${mouseMoved.pageX} | Y: ${mouseMoved.pageY}`
  }
  mouseMove = (ev) => {
    this.setState({ mouseMoved: ev })
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove)
  }
  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      this.mouseMove
    )
  }
  render() {
    const { x, y } = this.state
    return (
      <section className="coords">
        <span>{this.mouseCoords}</span>
      </section>
    )
  }
}
