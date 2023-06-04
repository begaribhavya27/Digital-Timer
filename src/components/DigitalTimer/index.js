// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timerRunning: false, timerInSec: 0, timerInMin: 25}

  componentDidMount() {
    console.log('Component Did Mount Called')
  }

  onToggleStart = () => {
    this.setState(prevState => {
      const {timerRunning} = prevState
      return {timerRunning: !timerRunning}
    })
  }

  onIncrement = () => {
    this.setState(prevState => ({timerInMin: prevState.timerInMin + 1}))
  }

  onDecrement = () => {
    const {timerInMin} = this.state
    if (timerInMin > 0) {
      this.setState(prevState => ({timerInSec: prevState.timerInMin - 1}))
    }
  }

  render() {
    const {timerRunning, timerInMin} = this.state
    const startText = timerRunning ? 'Pause' : 'Start'
    const imgUrl = timerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altText = timerRunning ? 'pause icon' : 'play icon'
    const statusText = timerRunning ? 'Running' : 'Paused'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="bottom-container">
          <div className="timer-app-container">
            <div className="timer-container">
              <div className="timer">
                <h1 className="time">25:00</h1>
                <p className="status">{statusText}</p>
              </div>
            </div>
          </div>

          <div className="set-timer-container">
            <div className="top">
              <div className="start-pause-container">
                <button
                  type="button"
                  className="start-btn"
                  onClick={this.onToggleStart}
                >
                  <img src={imgUrl} alt={altText} className="image" />
                  <p className="text">{startText}</p>
                </button>
              </div>
              <div className="start-pause-container">
                <button type="button" className="start-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="image"
                  />
                  <p className="text">Reset</p>
                </button>
              </div>
            </div>

            <p className="para1">Set Timer Limit</p>
            <div className="set-timer">
              <button type="button" className="btn" onClick={this.onDecrement}>
                <p className="plus-minus">-</p>
              </button>

              <button
                type="button"
                className="btn-1"
                onClick={this.onIncrement}
              >
                <p className="para">{timerInMin}</p>
              </button>

              <button type="button" className="btn" onClick={this.onIncrement}>
                <p className="plus-minus">+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
