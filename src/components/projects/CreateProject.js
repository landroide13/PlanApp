import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActons'

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
              <button className="btn green lighten-1 z-depth-0">Submit</button>
            </div>
          
          </form>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispacth =>{
  return{
    createProject: (project) => dispacth(createProject(project))
  }
}



export default connect(null, mapDispatchToProps)(CreateProject)
