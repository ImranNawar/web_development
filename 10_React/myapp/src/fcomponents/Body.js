import { useState } from "react"  //export hooks as  named export

export const Body = ({ id, title, desc }) => {  //Destructuring
  return (
    <div>
      <h1>ID {id}</h1>
      <h1>Title {title}</h1>
      <h1>Description {desc}</h1>
    </div>
  )
}
