import React, { Component } from 'react'
import Results from './Results'
import { connect } from 'react-redux'
import { Card } from 'antd'
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
            wouldyou:<p>would you rather...</p>,
            results: <Results 
                        optionOne={this.props.question.optionOne}
                        optionTwo={this.props.question.optionTwo}
                        />,
        }

        return (
                <Card
                    style={{width: '100%'}}
                    title="Would you rather...?"
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