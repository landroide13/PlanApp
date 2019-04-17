import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

export default function Nav() {

  return (
    <React.Fragment>

        <nav className="nav-wrapper green darken-1">
          <div className="container">
            <Link to="/" className="brand-logo">Plan-App</Link>
            <SignInLinks />
            <SignOutLinks />
          </div>
        </nav>
      
    </React.Fragment>


  )
}
