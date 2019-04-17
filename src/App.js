import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/layouts/Nav'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectsDetails'
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'

class App extends Component {

  render() {
    return (
      <Router>
        <Nav />
        <div className="App">
         
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
