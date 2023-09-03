import React from 'react'

const Jsx = () => {

  const date = new Date();
  const time = date.toLocaleTimeString();

  const name = "Imran";
  const age = 21;
  
  return (
    <div>
      <h1>{time}</h1>

      <h2>My name is {name} and my age is {age}</h2>

      <input style={{ border: '3px solid blue' }} type="number" min={5} />
      <br />

      <textarea autoFocus={true} spellCheck style={{ marginTop: '5px', borderRadius: '5px' }} />
    </div>
  )
}

export default Jsx