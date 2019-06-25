import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NavBar from './NavBar2'
import CreateNewQuestion from './CreateNewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'



class App extends Component {
  
  componentDidMount (){
    const { dispatch } = this.props
    
    dispatch(handleInitialData())
  }
  
  render () {
    console.log("current User on dashboard render", this.props.authedUser)
    return (
      <Router>
        { this.props.loading
        ? null
        : (this.props.showLogin
        ? <Route path='/' exact component={Login} />
        :
         <Fragment>
          <NavBar />
            <Route path='/home' exact component={Dashboard}/>
            <Route path='/new' exact component={CreateNewQuestion}/>
            <Route path='/leaderboard' exact component={LeaderBoard}/>
        </Fragment>)
        

        }
      </Router>

  
    );
  }
}

function mapStateToProps({ users, authedUser }){
  return {
    loading: users === null,
    showLogin: authedUser===null,
    users
  }
}

export default connect(mapStateToProps)(App)
