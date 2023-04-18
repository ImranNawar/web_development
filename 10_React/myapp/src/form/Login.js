import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <form>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Login