// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {imageUrl, emojiName, id, changecard} = props
  const changegame = () => {
    changecard(id)
  }
  return (
    <div className="emoji_con">
      <li className="card_con">
        <button className="card_btn">
          <img
            src={imageUrl}
            alt={emojiName}
            className="emoimg"
            onClick={changegame}
          />
        </button>
      </li>
    </div>
  )
}
export default EmojiCard
