import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NavBar from './NavBar'



class App extends Component {
  
  componentDidMount (){
    this.props.dispatch(handleInitialData())
  }
  
  render () {
    return (
      <Fragment>
        <NavBar />
        <Dashboard />
      </Fragment>
  
    );
  }
}


export default connect()(App)
