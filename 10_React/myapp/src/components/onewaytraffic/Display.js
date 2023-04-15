import React, { Component } from 'react'
import Button from './Button'

export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    }
  }
  changeNumber = (n) => {  //Just like setter function
    this.setState({
      number: n
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <Button change={this.changeNumber} />
      </div>
    )
  }
}
