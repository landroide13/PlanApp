import React from 'react'

export default function ProjectSummary(props) {

  const { project } = props

  return (
    
    <React.Fragment>

      <div className="card z-depth-0 project-sumary">
          <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>{project.desc}</p>
              <p className="grey-text">3rd Sept 2018</p>
          </div>
        </div>
      
    </React.Fragment>
  )
}
