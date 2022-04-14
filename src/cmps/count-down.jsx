import React from 'react'

export class CountDown extends React.Component {
  state = {
    currTime: Date.now(),
    timeDiff: this.props.targetTime - Date.now(),
  }
  interval = null
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeDiff: this.state.timeDiff - 1000,
      })
      if (this.state.timeDiff < 1000) {
        clearInterval(this.interval)
        this.props.due()
      }
    }, 1000)
  }

  get countMinutes() {
    const { timeDiff } = this.state
    var date = new Date(timeDiff)
    var minutes =
      date.getMinutes() < 10
        ? '0' + date.getMinutes()
        : date.getMinutes()
    return timeDiff > 0 ? `${minutes}` : '00'
  }

  get countSeconds() {
    const { timeDiff } = this.state
    var date = new Date(timeDiff)
    var seconds =
      date.getSeconds() < 10
        ? '0' + date.getSeconds()
        : date.getSeconds()
    return timeDiff >= 0 ? `${seconds}` : '00'
  }

  get counterStyle() {
    if (this.state.timeDiff <= 11000) {
      return 'times-up'
    }
  }

  render() {
    return (
      <section className="count-down">
        <h2>COUNTDOWN</h2>
        <div className="counter">
          <span>{this.countMinutes}</span>:
          <span className={this.counterStyle}>
            {this.countSeconds}
          </span>
        </div>
      </section>
    )
  }
}
