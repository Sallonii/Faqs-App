// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    faqsList: [],
  }

  componentDidMount() {
    const {faqsList} = this.props

    // Initialize state with faqsList from props
    this.setState({
      faqsList: faqsList.map(faq => ({...faq, isPlusClicked: false})),
    })
  }

  plusClicked = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isPlusClicked: !eachFaq.isPlusClicked}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachItem => (
              <FaqItem
                faqDetails={eachItem}
                plusClicked={this.plusClicked}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
