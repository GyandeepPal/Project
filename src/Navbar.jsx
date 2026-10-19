import React from 'react'
import "./App.css"
import { useEffect } from 'react'

const Conponant = ({ color }) => {

  useEffect(() => {
    alert("I am the Navbar")
    return () => {
      alert("componant is unmounted")
    }
    
  }, [color])

 
  

  return (
    <>
      Hii I am the boy of {color} hehe...
    </>
  )
}

export default Conponant