// Life Cycle methods 
import React from 'react';
import axios from 'axios';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props)

    this.change = this.change.bind(this); //BINDING: Now if we use this inside 'change' then it will call the class 'this'

    this.state = {
      num: 0,
      users: []
    }
  }
  // We use the first two methods when use we api calls
  async componentDidMount() { // When component load first time
    const { data } = await axios.get("https://api.github.com/users");
    this.setState({
      users: data
    })
  }
  componentDidUpdate() { // It will call when state change

  }
  componentWillUnmount() {

  }

  change() { //Don't write function keyword if function is inside class, write keyword function if it is inside function
    this.setState({
      num: Math.floor(Math.random() * 100)
    })
  }
  render() {
    return (
      <div>
        {/* <h1>{this.state.num}</h1>
        <button className="ui inverted blue button" onClick={this.change}>Click</button> */}
        {/* if fuction is defined inside render function then we don't need to write 'this' keyword */}


        <ul>
          {
            this.state.users.map((user => {
              return <li key={user.id}>{user.login}</li>
            }))
          }
        </ul>
      </div>
    )
  }
}