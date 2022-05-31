import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="app-container">
        <div className="sub-container">
          <div className="inner-container">
            <h1>Calculate the letters you enter</h1>
            <label>
              Enter the Phrase:
              <input
                type="text"
                name="name"
                placeholder="Enter the Phrase"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </label>
            <p>No.of letters: 0</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="img-style"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
