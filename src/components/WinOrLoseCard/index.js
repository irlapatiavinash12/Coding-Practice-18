// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWin, onClickPlayAgain, score} = props

  const onPlayAgain = () => {
    onClickPlayAgain()
  }
  const scoreText = isWin ? 'Best Score' : 'Score'
  const resultText = isWin ? 'You Won' : 'You Lose'
  const resultImg = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="result-container">
      <div className="initial-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="score-text">{score}/12</p>
        <button className="button-styling" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={resultImg} className="img-styling" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
