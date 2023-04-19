import React, { lazy, Suspense } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Products from './Products';
import Error from './Error'
const About = lazy(() => import('./About'));
const Product = lazy(() => import('./Product'));

const App = () => {
  return (
    <div>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/product'>Product</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<p>Loading...</p>}> <About /></Suspense>} />
          <Route path="/products" element={<Products />} />        {/* to make on portion dynammic */}
          <Route path="/product/:prod_id" element={<Suspense fallback={<p>Loading...</p>}><Product /></Suspense>} />

          <Route path="*" element={<Error />} />
          {/* when no page match it will display error page but it should be last one */}
        </Routes>
      </Router>
    </div>
  )
}

export default App