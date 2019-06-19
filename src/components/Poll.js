import React, { Component } from 'react'
import Results from './Results'
import AnswerPoll from './AnswerPoll'
import { connect } from 'react-redux'
import { Card, Avatar, Typography } from 'antd'
import { formatQuestion } from '../utils/helpers'

const tabList = [
    {
        key: 'wouldyou',
        tab: 'wouldyou',
    },
    {
        key: 'results',
        tab: 'results',
    }
]

const { Text } = Typography

class Poll extends Component {
    state = {
        key: 'wouldyou'
    }



    onTabChange = (key) => {
        console.log(key);
        this.setState({ key });
    }
    
    render () {

        const contentList = {
            wouldyou: <AnswerPoll question={this.props.question} authedUser={this.props.authedUser}/>,
            results: <Results 
                        optionOne={this.props.question.optionOne}
                        optionTwo={this.props.question.optionTwo}
                        />,
        }

        return (
                <Card
                    style={{width: '100%'}}
                    title={
                    <div>
                        <Avatar src={this.props.question.avatar} />
                        <br />
                        <Text>{this.props.question.name} wants to know would you rather...?</Text>
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

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question , users[question.author], authedUser)
    }
}


export default connect(mapStateToProps)(Poll)