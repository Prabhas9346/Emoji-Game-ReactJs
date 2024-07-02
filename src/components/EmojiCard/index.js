import './index.css'

const EmojiCard = props => {
  const {emoji, playGame} = props
  const {id, emojiName, emojiUrl} = emoji
  const ClickedEmoji = () => {
    playGame(id)
  }
  return (
    <li>
      <button onClick={ClickedEmoji} type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
