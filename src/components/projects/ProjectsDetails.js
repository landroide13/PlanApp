import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function ProjectsDetails(props) {

  const { project } = props

  if(project){
    return(
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title } -</span>
            <p>{ project.desc }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by { project.authoFirstName } { project.authoFirstName }</div>
              <div>2th September</div> 
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="container center">
        <p>Loading Project....</p>
      </div>
    )
  }

  
} 

const mapStateToProps = (state, ownProps) =>{
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.project;
  const project = projects ? projects[id] : null;
  return{
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'project'}
  ])
)(ProjectsDetails)
