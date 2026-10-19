import React, { useState, useEffect, useRef } from 'react'
import './UseRef.css'

const UseRefe = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)

    const btnref1 = useRef(0)
    const btnref = useRef(0)

    useEffect(() => {
        console.log("Rerendering ...")

        btnref1.current.style.backgroundColor = "red"
        btnref.current.style.backgroundColor = "red"
    }, [])

    return (
        <div className="container">

            <h1 className="counter">{first}</h1>
            <h1 className="counter">{second}</h1>

            <button
                ref={btnref1}
                className="update-btn"
                onClick={() => setfirst(first + 1)}
            >
                Update First
            </button>
        <hr />
            <button
                ref={btnref}
                className="update-btn"
                onClick={() => setsecond(second + 1)}
            >
                Update Second
            </button>

            <button
                className="change-btn"
                onClick={() => {
                    btnref1.current.style.display = "none"
                }}
            >
                Change Me
            </button>

            <button
                className="change-btn"
                onClick={() => {
                    btnref.current.style.display = "none"
                }}
            >
                Change Me
            </button>

        </div>
    )
}

export default UseRefe