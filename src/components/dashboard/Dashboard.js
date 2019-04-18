import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux'

class Dashboard extends Component {


  render() {

    // console.log(this.props)

    const { projects } = this.props

    return (

      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset.m1">
              <Notification />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>{
  console.log(state)
  return{
    projects: state.firestore.ordered.project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project'}
  ])
)(Dashboard)
