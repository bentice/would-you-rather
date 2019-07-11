import React, { Component } from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'
import Poll from './Poll'
import { formatQuestion } from '../utils/helpers'

class PollList extends Component {

    render (){
        const { authedUser, questions, currentList, users } = this.props

        const questionIDs = currentList ==='answered'
        ? Object.keys(questions)
            .filter(id => 
            [...questions[id].optionOne.votes,
            ...questions[id].optionTwo.votes].includes(authedUser)).reverse()
        : Object.keys(questions)
        .filter(id =>
        !([...questions[id].optionOne.votes,
        ...questions[id].optionTwo.votes].includes(authedUser))).reverse()

        return(
            <List 
                itemLayout="vertical"
                dataSource={questionIDs}
                renderItem={item => (
                    <List.Item>
                        <Poll 
                        qid={item}
                        question={formatQuestion(questions[item], users[questions[item].author], authedUser)}
                        authedUser={authedUser}
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