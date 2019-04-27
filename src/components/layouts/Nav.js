import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

function Nav(props) {

  const { auth } = props

  const link = auth.uid ? <SignInLinks /> : <SignOutLinks />

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
} // 29

const mapStateToProps = state =>{
  // console.log(state)
  return{
    auth: state.firebase.auth
  }
}



export default connect(mapStateToProps)(Nav)
