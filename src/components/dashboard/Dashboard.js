import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {


  render() {

    // console.log(this.props)

    const { projects, auth } = this.props

    if(!auth.uid) return <Redirect to="/login" />

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
  // console.log(state)
  return{
    projects: state.firestore.ordered.project, 
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project'}
  ])
)(Dashboard)
