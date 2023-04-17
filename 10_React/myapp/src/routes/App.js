import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Product from './Product';
import Products from './Products';
import Error from './Error'

const App = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/product'>Product</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />        {/* to make on portion dynammic */}
        <Route path="/product/:prod_id" element={<Product />} />

        <Route path="*" element={<Error />} />
        {/* when no page match it will display error page but it should be last one */}
      </Routes>
    </Router>
  )
}

export default App