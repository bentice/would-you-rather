import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import Poll from './Poll'

class PollList extends Component {

    render (){
        return(
            <List 
                itemLayou="vertical"
                dataSource={this.props.questionIDs}
                renderItem={item => (
                    <List.Item>
                        <Poll id={item} />
                    </List.Item>
                )}
            />
        )
    }
}

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


export default connect(mapStateToProps)(PollList)