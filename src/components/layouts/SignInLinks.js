import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignInLinks() {


  return (
    <React.Fragment>
      <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><NavLink to="/">LogOut</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating grey lighten-1">JD</NavLink></li>
      </ul>
      
    </React.Fragment>

  )
}
