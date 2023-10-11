import React, { Component } from "react";

export default class Details extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const t = 101;
    return (
      <div>
        {/* {t === 100 ? <p>{this.props.para}</p> : <p></p>} */}
        {/* {(t < 100) && <p>test...</p>}   Without conditional rendering we can do conditional rendering*/}
        <p>{this.props.para}</p>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}