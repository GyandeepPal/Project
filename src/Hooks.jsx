import React from 'react'
import { useState } from 'react'

const Hooks = () => {
    const [first, setfirst] = useState(0)
  return (
    <>
    <div>
       <h1>{first}</h1>
    </div>
    <button onClick={()=>{setfirst(first+1)}}>Update the value</button>
    </>
  )
}

export default Hooks