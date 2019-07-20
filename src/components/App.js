import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import CreateNewQuestion from './CreateNewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import PollPage from './PollPage'



class App extends Component {
  
  componentDidMount (){
    const { dispatch } = this.props
    
    dispatch(handleInitialData())
  }
  
  render () {
    
    return (
      <Router>
        { this.props.loading
        ? null
        : <Fragment>
            <NavBar /> 
            <Route key='login' path='/' exact component={Login} />
            <Route key='home' path='/home' component={Dashboard}/>
            <Route key='add' path='/add' exact component={CreateNewQuestion}/>
            <Route key='leaderboard' path='/leaderboard' exact component={LeaderBoard} />
            <Route key='questions' path='/questions/:qid' exact component={PollPage} />
        </Fragment>
        }
      </Router>

  
    );
  }
}

function mapStateToProps({ users, authedUser }){
  return {
    loading: users === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
