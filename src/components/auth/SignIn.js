import React, { Component } from 'react'

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) =>{
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e =>{
    e.preventDefault(e)
    console.log(this.state)
  }

  render() {

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
              <input type="password" id="pass" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">LogIn</button>
            </div>
          
          </form>
        </div>
        
      </React.Fragment>
    )
  }
}
