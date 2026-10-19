import React from 'react'
import { useState } from 'react'
import './Hooks.css'

const Hooks = () => {
  const [first, setfirst] = useState(0)

  return (
    <>
      <div className="hooks">
        <h1>{first}</h1>

        <button onClick={() => setfirst(first + 1)}>
          Update the value
        </button>
      </div>
    </>
  )
}

export default Hooks