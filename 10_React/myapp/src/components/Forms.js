//Uncontrolled component & Controlled Components
import React, { Component } from 'react'
import axios from 'axios';

export default class Forms extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      keyword: "",
      results: []
    }
  }
  async handleSubmit(e) {
    e.preventDefault(); // do not refresh whole page
    // console.log(this.state.keyword) //this will display the value which is the value of search

    const key = "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE";
    const term = this.state.keyword
    const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)

    this.setState({
      results: data.results
    })
  }
  handleChange(e) { //It will call every time when value change
    this.setState({
      keyword: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="ui icon input">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={this.handleChange}
              value={this.state.keyword} //Now this is controlled component
            />
            <i className="circular search link icon"></i>
          </div>
          <button className="ui inverted blue button">Search</button>
        </form>
        <div>
          {
            this.state.results.map(image => {
              return <img src={image.urls.small} alt="images" />
            })
          }
        </div>
      </div>
    )
  }
}
