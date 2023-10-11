import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props);

  }
  buttonClicked = () => {
    this.props.change(50)
  }
  render() {
    return (
      <div>
        <button onClick={this.buttonClicked}>Change</button>
      </div>
    )
  }
}
