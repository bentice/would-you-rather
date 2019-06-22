import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import CreateNewQuestion from './CreateNewQuestion'
import LeaderBoard from './LeaderBoard'




class App extends Component {
  
  componentDidMount (){
    this.props.dispatch(handleInitialData())
  }
  
  render () {
    return (
      <Router>
      <Fragment>
        <NavBar />
        <Route path='/' exact component={Dashboard}/>
        <Route path='/new' exact component={CreateNewQuestion}/>
        <Route path='/leaderboard' exact component={LeaderBoard}/>
      </Fragment>
      </Router>

  
    );
  }
}


export default connect()(App)
