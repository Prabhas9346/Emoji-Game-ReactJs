import './index.css'

const WinOrLoseCard = props => {
  const {score, changegameOver} = props
  const retryGame = () => {
    changegameOver()
  }
  if (score === 12) {
    return (
      <div className="wonBox">
        <div className="wonSubBox">
          <h1 className="heading1">You Won</h1>
          <p className="para1">Best Score</p>
          <p className="para2">{score}/12</p>
          <button onClick={retryGame} type="button" className="playBtn">
            Play Again
          </button>
        </div>
        <img
          className="looseImg"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div className="wonBox">
      <div className="wonSubBox">
        <h1 className="heading1">You Lose</h1>
        <p className="para1">Score</p>
        <p className="para2">{score}/12</p>
        <button onClick={retryGame} type="button" className="playBtn">
          Play Again
        </button>
      </div>
      <img
        className="looseImg"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}
export default WinOrLoseCard
