import React, { Component } from "react";
import axios from 'axios'

export default class Lists extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  render() {
    const loadData = async () => {

      const { data } = await axios.get("https://api.github.com/users")
      this.setState({
        users: data
      })

      // fetch("https://api.github.com/users")
      //   .then(json => {
      //     return json.json();
      //   })
      //   .then(data => {
      // this.setState({
      //   users: data
      // })
      //   })


    }

    return (
      <div>
        <ul>
          {
            this.state.users.map((m, i) => {
              return <li key={i}>{m.login} -
                <img src={m.avatar_url} alt="m.login" /> </li>
            })
          }
        </ul>
        <button className="ui inverted blue button" onClick={loadData}>Fetch</button>
      </div>
    )
  }
}