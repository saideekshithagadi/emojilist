// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topscore} = props
  return (
    <div className="back_ground">
      <div className="left_side">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
        />
        <p>Emoji Game</p>
      </div>
      <div className="rightside">
        <p>Score:{score}</p>
        <p>Topscore:{topscore}</p>
      </div>
    </div>
  )
}
export default NavBar
