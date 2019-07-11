import React, { Component, Fragment } from 'react'
import { Avatar } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
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
    
    const {authedUser, users, questions, dispatch } = this.props

    const questionIDs = Object.keys(questions)
    
    return (
      <Router>
        { this.props.loading
        ? null
        : (this.props.showLogin
        ? <Route path='/' component={Login} />
        :
         <Fragment>
          <NavBar authedUser={authedUser} users={users} dispatch={dispatch} /> 
            <Route path='/home' component={Dashboard}/>
            <Route path='/new' exact component={CreateNewQuestion}/>
            <Route path='/leaderboard' exact component={LeaderBoard} />
        </Fragment>)
        }
      </Router>

  
    );
  }
}

function mapStateToProps({ users, authedUser, questions }){
  return {
    loading: users === null,
    showLogin: authedUser===null,
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(App)
