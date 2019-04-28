import React from 'react'
import moment from 'moment'

export default function ProjectSummary(props) {

  const { project } = props

  return (
    
    <React.Fragment>

      <div className="card z-depth-0 project-sumary">
          <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>{project.desc}</p>
              <p>Created By: { project.authorFirstName } { project.authorLastName }</p>
              <p className="grey-text">{ moment(project.createdAt.toDate().toString()).calendar() }</p>
          </div>
        </div>
      
    </React.Fragment>
  )
}
