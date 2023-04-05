import {Component} from 'react';
import './Home.css'
class Home extends Component
{
  render(){ //we are over riding render function and it function is to return jsx file
    return (
      <div>
        <p className='test'>This is a paragraph is a Home component</p>
        <button className= "btn btn-primary">Click</button>
      </div>
    );
  }
}

export default Home;