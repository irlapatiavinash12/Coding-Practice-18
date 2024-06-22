/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameActive: true,
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameActive: true})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="icon-unordered-list-styling">
        {shuffledEmojisList.map(eachIcon => (
          <EmojiCard
            eachIconDetails={eachIcon}
            key={eachIcon.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  onShowResultCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWin = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = clickedEmojiLength => {
    const {topScore} = this.state
    let newTopScore = 0
    if (clickedEmojiLength > topScore) {
      newTopScore = clickedEmojiLength
    }
    this.setState({
      topScore: newTopScore,
      isGameActive: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojiList} = this.state

    const isEmojiPresent = clickedEmojiList.includes(id)

    const clickedEmojiLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  render() {
    const {clickedEmojiList, topScore, isGameActive} = this.state
    return (
      <div className="main-bg">
        <NavBar
          count={clickedEmojiList.length}
          topScore={topScore}
          isGameActive={isGameActive}
        />
        <div className="content-container">
          {isGameActive ? this.renderEmojiList() : this.onShowResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
