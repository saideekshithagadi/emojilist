// Write your code here.
import {Component} from 'react'
import './index.css'
const WinOrLoseCard = props => {
  const {score, topscore, win, againplay} = props
  const dispalytext = win ? 'You Won' : 'You Lose'
  const displayurl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playagain = () => {
    againplay()
  }
  return (
    <div className="card_con">
      <div className="left_side">
        <h1>{dispalytext}</h1>
        <p>Score</p>
        <p>
          {score}/{topscore}
        </p>
        <button className="playbtn" onClick={playagain()}>
          Play again
        </button>
      </div>
      <div className="right_side">
        <img src={displayurl} />
      </div>
    </div>
  )
}
export default WinOrLoseCard
