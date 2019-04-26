import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

function Nav() {

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

const mapStateToProps = state =>{
  // console.log(state)
  return{

  }
}



export default connect(mapStateToProps)(Nav)
