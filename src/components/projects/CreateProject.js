import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActons'
import { Redirect } from 'react-router-dom'
 
class CreateProject extends Component {
  state = {
    title: '',
    desc: ''
  }

  handleChange = (e) =>{
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e =>{
    e.preventDefault(e)
    // console.log(this.state)
    this.props.createProject(this.state)
  }

  render() {

    const { auth } = this.props

    if(!auth.uid) return <Redirect to="/login" />

    return (

      <React.Fragment>

        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
            <div className="input-field">
              <label htmlFor="email">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Description</label>
              <textarea className="materialize-textarea" id="desc" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">Create</button>
            </div>
          
          </form>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>{
  return{
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = dispacth =>{
  return{
    createProject: (project) => dispacth(createProject(project))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
