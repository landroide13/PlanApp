import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) =>{
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e =>{
    e.preventDefault(e)
    // console.log(this.state)
    this.props.signIn(this.state)
  }

  render() {

    const { authError } = this.props

    return (

      <React.Fragment>

        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">LogIn</button>
            </div>

            { authError ? 
              <div className="red-text center" role="alert">
                <p>{ authError }</p> 
              </div>
              : null
            }
          
          </form>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>{
  return{
    authError: state.auth.authError
  }
}



const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
