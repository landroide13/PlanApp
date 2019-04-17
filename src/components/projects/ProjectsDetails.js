import React from 'react'

export default function ProjectsDetails(props) {

  const id = props.match.params.id

  return (
    <React.Fragment>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
             <span className="card-title">Project - {id}</span>
             <p>Acm1pt</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Vegano Entregano</div>
            <div>2th September</div> 
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
