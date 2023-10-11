// Event Handling
import React, { Component } from 'react'

export default class Events extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    if (e.target.id === "1") {
      console.log("Button 1 clicked")
    }
    else if (e.target.id === "2") {
      console.log("Button 2 clicked")
    }
  }
  render() {
    return (
      <div>
        <button className="ui inverted blue button"
          onClick={(e) => this.handleClick(e)}
          id='1'
          name='btn1'
        >Click 1
        </button>
        <button className="ui inverted blue button"
          onClick={(e) => this.handleClick(e)}
          id="2"
          name='btn2'
        >Click2
        </button>
        {/* Call back functions the "e" knows from this event generate*/}
      </div>
    )
  }
}
