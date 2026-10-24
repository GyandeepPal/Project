import React from 'react'
import { BrowserRouter, RoutesProvider, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Routing = () => {
    const router = BrowserRouter([
        {
            path:'/',
            element:<About/>
        },
        {
              path:'/',
            element:<Contact/>
        }
    ])
  return (
    <div>
        <nav>
            <link to="/"><li>Home</li></link>
            <link to="About"><li>About</li></link>
            <link to="Contact"><li>Contact us</li></link>
        </nav>link
       
    </div>
  )
}

export default Routing