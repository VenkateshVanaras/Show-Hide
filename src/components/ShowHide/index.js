// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">Show/Hide</h1>
          <div className="response-container">
            <div className="button-and-text">
              <button
                onClick={this.onClickFirstName}
                type="button"
                className="button"
              >
                Show/Hide Firstname
              </button>
              {isFirstName ? <p className="text-container">Joe</p> : null}
            </div>
            <div className="button-and-text">
              <button
                onClick={this.onClickLastName}
                type="button"
                className="button"
              >
                Show/Hide Lastname
              </button>
              {isLastName ? <p className="text-container">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
