import React from 'react'

export class ShowTime extends React.Component {
  state = {
    imgUrl: '',
    currTime: new Date(),
    isDark: false,
  }
  interval = null
  seasons = [
    { name: 'Autumn', range: [9, 10, 11] },
    { name: 'Spring', range: [4, 5, 6] },
    { name: 'Winter', range: [12, 1, 2, 3] },
    { name: 'Summer', range: [7, 8, 9] },
  ]

  get formattedTime() {
    const { currTime } = this.state
    var hours = currTime.getHours()
    var minutes = currTime.getMinutes()
    var seconds = currTime.getSeconds()
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    var ampm = hours >= 12 ? 'PM' : 'AM'
    return `${hours}:${minutes}:${seconds} ${ampm}`
  }

  get currSeason() {
    let { currTime } = this.state
    currTime = currTime.getMonth() + 1
    return this.seasons.find((season) => {
      for (var key in season.range) {
        if (season.range[key] === currTime) return season
      }
    })
  }

  get currMode() {
    let className = this.state.isDark ? 'dark-mode' : ''
    return className
  }

  toggleMode = () => {
    this.setState({ isDark: !this.state.isDark })
  }

  componentDidMount = () => {
    const currSeason = this.seasons.find(
      (season) => (season.name = this.currSeason.name)
    )
    this.setState({
      imgUrl: require(`../assets/${currSeason.name.toLowerCase()}.png`),
    })

    this.interval = setInterval(
      () => this.setState({ currTime: new Date() }),
      1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render() {
    return (
      <section
        className={'show-time ' + this.currMode}
        onClick={this.toggleMode}
      >
        <h1 className="slide-header">
          It's {this.currSeason.name}
        </h1>
        {this.state.imgUrl && (
          <img src={this.state.imgUrl} />
        )}
        <span>{this.formattedTime}</span>
      </section>
    )
  }
}
