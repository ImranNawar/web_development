import { Component } from "react";
import Image from './Image'
import Details from './Details'

export default class App extends Component {
  render() {
    return (
      <div>     {/* This app component render these two components */}
        <Image
          url="https://randomuser.me/portraits/men/54.jpg"
        />
        <Details
          para="Any text"
          buttonText="Click Here" />
      </div>
    )
  }
}