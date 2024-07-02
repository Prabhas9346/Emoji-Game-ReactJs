import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, gameOver: false, savedIds: []}

  renderedScore = () => {
    const {score, topScore} = this.state
    return (
      <div className="navbox">
        <p className="scoreEL">Score: {score}</p>
        <p className="scoreEL">Top Score: {topScore}</p>
      </div>
    )
  }

  changegameOver = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({gameOver: false, score: 0})
  }

  render() {
    const playGame = id => {
      const {score, gameOver, savedIds} = this.state
      if (!savedIds.includes(id) && score < 11) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          savedIds: [...prevState.savedIds, id],
        }))
      } else if (score === 11 && !savedIds.includes(id)) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameOver: !gameOver,
          savedIds: [],
        }))
      } else {
        this.setState({gameOver: !gameOver, savedIds: []})
      }
    }

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const shuffledEmojis = shuffledEmojisList()
    const {score, gameOver} = this.state

    const renderGame = () => {
      if (!gameOver) {
        return (
          <div className="emojiBox1">
            <ul>
              {shuffledEmojis.map(each => (
                <EmojiCard key={each.id} emoji={each} playGame={playGame} />
              ))}
            </ul>
          </div>
        )
      }
      return (
        <WinOrLoseCard score={score} changegameOver={this.changegameOver} />
      )
    }

    return (
      <div className="emojiPage">
        <NavBar gameOver={gameOver} renderedScore={this.renderedScore} />
        {renderGame()}
      </div>
    )
  }
}

export default EmojiGame
