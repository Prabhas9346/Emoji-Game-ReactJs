import './index.css'

const NavBar = props => {
  const {gameOver, renderedScore} = props
  return (
    <nav>
      <div className="inside-nav">
        <img
          className="image1"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      {!gameOver && renderedScore()}
    </nav>
  )
}
export default NavBar
