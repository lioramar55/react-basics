import './App.css'
import React from 'react'
import { ShowTime } from './cmps/show-time'
import { CountDown } from './cmps/count-down'
import { WhoWatch } from './cmps/who-watch'
import { ShowCoords } from './cmps/show-coords'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ShowTime />
        <CountDown
          targetTime={Date.now() + 61 * 1000}
          due={playSound}
        />
        <WhoWatch />
        <ShowCoords />
      </div>
    )
  }
}

function playSound() {
  const sound = new Audio(require('./assets/done.wav'))
  sound.play()
}

export default App
