import React, { useState, useEffect, useRef } from 'react'

const UseRefe = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)
    const a = useRef(0)

    useEffect(() => {
        a.current = a.current + 1;
        console.log(`Rerendering and the valur of is.${a.current} `);
    });

    return (
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: 12, alignContent: 'center' }}>

            <h1>{first}</h1>
            <h1>{second}</h1>

            <button style={{ margin: 12 }} onClick={() => setfirst(first + 1,)}>Update First</button>


            <button style={{ margin: 12 }} onClick={() => setsecond(second + 1)}> Update Second </button>


        </div>
    )
}

export default UseRefe