// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
class EmojiGame extends Component {
  state = {
    score: 0,
    topscore: 0,
    listofemoiji: emojisList,
    clickedlist: [],
    play: true,
    win: false,
  }

  shuffledEmojisList = () => {
    const {listofemoiji} = this.state
    const shuffledList = [...listofemoiji]
    return shuffledList.sort(() => Math.random() - 0.5)
  }

  shufflegame = id => {
    const {clickedlist, win, play, listofemoiji} = this.state
    const isEmojiPresent = clickedlist.includes(id)
    if (isEmojiPresent) {
      this.setState({play: false, win: false})
    } else {
      const updatedClickedList = [...clickedlist, id]
      this.setState(prevState => ({
        clickedlist: updatedClickedList,
        score: prevState.score + 1,
        topscore: Math.max(prevState.topscore, prevState.score + 1),
        listofemoiji: this.shuffledEmojisList(),
        win: updatedClickedList.length === listofemoiji.length,
      }))
    }
  }

  playAgain = () => {
    this.setState({
      clickedlist: [],
      play: true,
      win: false,
      score: 0,
    })
  }

  render() {
    const {score, topscore, listofemoiji, play, win} = this.state
    const {Emojicard} = listofemoiji
    console.log(Emojicard)

    return (
      <div className="app_con">
        <NavBar score={score} topscore={topscore} />
        {play ? (
          <ul className="listcon">
            {listofemoiji.map(each => (
              <EmojiCard
                imageUrl={each.emojiUrl}
                key={each.id}
                emojiName={each.emojiName}
                id={each.id}
                changecard={this.shufflegame}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={score}
            topscore={topscore}
            win={win}
            againplay={this.play}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
