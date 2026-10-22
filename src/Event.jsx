import React from 'react'
import { useState } from 'react'

const Event = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState("")
    const [name, setname] = useState("")
    // const [form, setform] = useState({ email: "", Phone: "" })
    const [form, setform] = useState({})

    console.log(form)
    const Gyan = () => {
        alert("Hello world")
        setfirst(first + 1);
    }

    const Deep = () => {
        // alert("Hello onMouseOver")
        // setsecond(second + 1);
    }

    const hendelchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    return (
        <>
            <div className='MAIN'>
                <h1>{first}</h1>
                <button onClick={Gyan}>Click me</button>
            </div>


            {/* <div className="red" onMouseOver={Deep}> */}
            <div className="red" onMouseEnter={Deep}>
                <h2>{second}</h2>
                Hey i am a red maous
            </div>

            <div className="input">

                <input
                    id="input"
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    value={form.email?form.email:""}
                    onChange={hendelchange}
                />

                {/* <input
                    id="input"
                    name="Phone"
                    type="text"
                    placeholder="Enter Phone"
                    value={form.Phone}
                    onChange={hendelchange}
                /> */}

                <input
                    id="input"
                    name="Phone"
                    type="text"
                    placeholder="Enter Phone"
                    value={form.Phone?form.Phone:""}
                    onChange={hendelchange}
                />
                {/* <button className='Summit'>Summit</button> */}
            </div>
        </>

    )
}

export default Event