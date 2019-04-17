import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignOutLinks() {


  return (
    <React.Fragment>
      <ul className="right">
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/login">LogIn</NavLink></li>
      </ul>
      
    </React.Fragment>

  )
}