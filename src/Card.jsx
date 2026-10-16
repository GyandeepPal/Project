import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://images.unsplash.com/photo-1792060628652-d524e61f8693?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />

    <h1>{props.title}</h1>
    <p>{props.descreption}</p>
    
    </div>
  
  )
}

export default Card