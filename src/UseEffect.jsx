import React, { useState, useEffect } from 'react'

import './useEffect.css'

const Hooks = () => {

    const [first, setfirst] = useState(0)

    const [second, setsecond] = useState(0)

    useEffect(() => {
        alert("Hello i am gyan deep pal")
    }, [])



    useEffect(() => {
        alert("Here was same thing okk ")


    }, [])

    return (
        <div className="hooks-container">

            <div className="counter-card">

                <h1>{first}</h1>
                <h1>{second}</h1>

                <button onClick={() => setfirst(first + 1,)}>Update First</button>


                <button onClick={() => setsecond(second + 1)}> Update Second </button>


            </div>

        </div>
    )
}

export default Hooks