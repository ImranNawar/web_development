import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("incomplete")
  const [search, setSearch] = useState("")

  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter