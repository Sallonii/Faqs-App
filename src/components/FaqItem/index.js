// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqDetails, plusClicked} = props
  const {questionText, answerText, id, isPlusClicked} = faqDetails

  const onClickingPlus = () => {
    plusClicked(id)
  }

  const plusMinusImg = isPlusClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const plusMinusAltTxt = isPlusClicked ? 'minus' : 'plus'

  return (
    <li className="faq-item-container">
      <div className="faq">
        <h1 className="question-text">{questionText}</h1>
        <img
          src={plusMinusImg}
          alt={plusMinusAltTxt}
          onClick={onClickingPlus}
          className="img"
        />
      </div>
      {isPlusClicked && <hr />}
      {isPlusClicked && <p className="answer-text">{answerText}</p>}
    </li>
  )
}

export default FaqItem
