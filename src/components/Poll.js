import React, { Component } from 'react'
import Results from './Results'
import AnswerPoll from './AnswerPoll'
import { Card, Avatar, Typography } from 'antd'

const tabList = [
    {
        key: 'unanswered',
        tab: 'wouldyou',
    },
    {
        key: 'answered',
        tab: 'results',
    }
]

const { Text } = Typography

class Poll extends Component {
    
    state = {
        key: this.props.currentList
    }

    onTabChange = (key) => {
        console.log(key);
        this.setState({ key });
    }
    
    render () {
        const { authedUser, question, users, currentList } = this.props

        const contentList = {
            unanswered: <AnswerPoll 
                            qid={this.props.qid} 
                            authedUser={authedUser} 
                            question={question} 
                            users={users}/>,
            answered: <Results 
                        qid={this.props.qid} 
                        authedUser={authedUser} 
                        question={question} 
                        users={users}
                        />,
        }

        return (
                <Card
                    style={{width: '100%'}}
                    title={
                    <div>
                        <Avatar src={question.avatar} />
                        <br />
                        <Text>{question.name} wants to know would you rather...?</Text>
                    </div>
                    }
                    tabList={tabList}
                    activateTabkey={this.state.key}
                    onTabChange={key=>{
                        this.onTabChange(key)
                    }}
                >
                    {contentList[this.state.key]}
                </Card>
        )
    }
}
/*
function mapStateToProps ({authedUser, users, questions}, {qid}) {
    const question = questions[qid]

    return {
        authedUser,
        question: formatQuestion(question , users[question.author], authedUser)
    }
}
*/

export default Poll