// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachIconDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachIconDetails

  const filterationStart = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-item-emoji-container">
      <button
        onClick={filterationStart}
        type="button"
        className="button-manipulation"
      >
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-icon"
        />
      </button>
    </li>
  )
}

export default EmojiCard
