import React, { Component } from 'react'
import { List } from 'antd'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Poll from './Poll'
import { formatQuestion } from '../utils/helpers'

class PollList extends Component {

    render (){
        const { authedUser, questions, users, currentList } = this.props

        console.log("pollList props", this.props)

        const questionIDs = currentList ==='answered'
        ? Object.keys(questions)
            .filter(id => 
            [...questions[id].optionOne.votes,
            ...questions[id].optionTwo.votes].includes(authedUser))
        : Object.keys(questions)
        .filter(id =>
        !([...questions[id].optionOne.votes,
        ...questions[id].optionTwo.votes].includes(authedUser)) )

        return(
            <List 
                itemLayout="vertical"
                dataSource={questionIDs}
                renderItem={item => (
                    <List.Item>
                        <Poll 
                        qid={item} 
                        authedUsers={authedUser} 
                        question={formatQuestion(questions[item] , users[questions[item].author], authedUser)} 
                        users={users} 
                        currentList={currentList}
                        />
                    </List.Item>
                )}
            />
        )
    }
}


export default connect()(PollList)