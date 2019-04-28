import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

function SignInLinks(props) {


  return (
    <React.Fragment>
      <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><a href="/" onClick={props.signOut}>LogOut</a></li>
        <li><NavLink to="/" className="btn btn-floating blue lighten-1">{ props.profile.initials }</NavLink></li>
      </ul>
      
    </React.Fragment>

  )
}


const mapDispatchToProps = dispatch =>{
  return{
    signOut: () => dispatch(signOut())
  }
}



export default connect(null, mapDispatchToProps)(SignInLinks)
