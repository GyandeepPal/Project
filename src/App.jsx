// import { useState, useEffect } from 'react'
// import React from 'react'
// import Navbar from './Navbar'

// const App = () => {
//   const [first, setfirst] = useState(1)
//   const [second, setsecond] = useState(2)

//   useEffect(() => {
//     alert("This is the first")
//   }, [first])

//   useEffect(() => {
//     alert("This is the second")
//   }, [second])

//   return (
//     <>
//       {/* <Navbar color={"red " + "green"} /> */}

//       <h1>First: {first}</h1>
//       <button onClick={() => setfirst(first + 1)}>
//         Click First
//       </button>

//       <h1>Second: {second}</h1>
//       <button onClick={() => setsecond(second + 1)}>
//         Click Second
//       </button>
//     </>
//   )
// }

// export default App

import React from 'react'
import UseRefe from './UseRefe'

const App = () => {
  return (
    <div>
      <UseRefe/>
      
    </div>
  )
}

export default App