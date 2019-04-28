import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

function Nav(props) {

  const { auth, profile } = props

  const link = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />

  return (
    <React.Fragment>

        <nav className="nav-wrapper green darken-1">
          <div className="container">
            <Link to="/" className="brand-logo">Plan-App</Link>
              { link }
          </div>
        </nav>
      
    </React.Fragment>


  )
} 

const mapStateToProps = state =>{
  
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}



export default connect(mapStateToProps)(Nav)
