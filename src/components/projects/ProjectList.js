import React from 'react'
import ProjectSummary from './ProjectSummary'

export default function ProjectList({ projects }) {

  return (

    <React.Fragment>

      <div className="project-list section">
        { projects && projects.map(project => {
          return  <ProjectSummary key={project.id} project={project} />
        }) }
      </div>
      
    </React.Fragment>

  )
}
