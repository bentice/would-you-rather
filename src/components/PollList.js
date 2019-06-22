import React, { Component } from 'react'
import { List } from 'antd'
import Poll from './Poll'
import { formatQuestion } from '../utils/helpers'

class PollList extends Component {

    render (){
        const { authedUser, questions, users, currentList } = this.props

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
                itemLayou="vertical"
                dataSource={questionIDs}
                renderItem={item => (
                    <List.Item>
                        <Poll 
                        qid={item} 
                        authedUsers={authedUser} 
                        question={formatQuestion(questions[item] , users[questions[item].author], authedUser)} 
                        users={users} 
                        currentList={currentList} />
                    </List.Item>
                )}
            />
        )
    }
}
/*
function mapStateToProps ({ questions, authedUser }, { listCurrent }) {
    const listQuestions = listCurrent ==='answered'
    ? Object.keys(questions)
        .filter(id => 
        [...questions[id].optionOne.votes,
        ...questions[id].optionTwo.votes].includes(authedUser))
    : Object.keys(questions)
    .filter(id =>
    !([...questions[id].optionOne.votes,
    ...questions[id].optionTwo.votes].includes(authedUser)) )

    return {
        questionIDs: listQuestions
            .sort((a, b)=> questions[b].timestamp - questions[a].timestamp)
    }
}
*/

export default PollList