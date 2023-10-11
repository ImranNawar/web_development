import { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {
      color: "blue",
      background: "yellow",
      borderTop: "5px black solid"
    }
    return (
      <div>
        <p style={style}>{this.props.title}</p>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}