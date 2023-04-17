import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/product/1">Oven</Link>
      <Link to="/product/2">Salt</Link>
      <Link to="/product/3">Microwave</Link>
    </div>
  )
}

export default Home