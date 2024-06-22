// Write your code here.

import './index.css'

const NavBar = props => {
  const {count, topScore, isGameActive} = props
  return (
    <div className="nav-container">
      <div className="emoji-game-icon-container">
        <img
          className="emoji-game-icon"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h3 className="game-name-text">Emoji Game</h3>
      </div>
      {isGameActive && (
        <div className="scores-container">
          <p>Score: {count}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
