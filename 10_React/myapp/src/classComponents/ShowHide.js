import React, { Component } from 'react'

export default class ShowHide extends Component {
  constructor() {
    super();
    this.state = {
      label: "hide",
      status: true
    }
  }
  render() {
    return (
      <div>
        {this.state.status && <h1>Some text that needs to be a longer text</h1>}
        <button className="ui inverted blue button" onClick={() => {
          this.setState({
            label: "show",
            status: !this.state.status
          })
        }}>{this.state.label}</button>
      </div>
    )
  }
}