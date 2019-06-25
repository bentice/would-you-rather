import React, { Component, Fragment } from 'react'
import { Avatar, Typography } from 'antd'
import { connect } from 'react-redux'


const { Text } = Typography

class Results extends Component {

    render(){
        
        const {authedUser, question, users} = this.props
        const optionOneLength = question.optionOne.votes.length
        const optionTwoLength = question.optionTwo.votes.length

        return (
        <Fragment>
                <div>
                <Text strong>{question.optionOne.text} :  </Text>
                    {question.optionOne['votes'].map(item=>(
                    <Avatar src={users[item].avatarURL} />
                    ))}
                </div>
                <div>
                <Text strong>{question.optionTwo.text} :  </Text>
                    {question.optionTwo['votes'].map(item=>(
                    <Avatar src={users[item].avatarURL} />
                    ))}
                </div>
        </Fragment>
        )
    }
}
/*
function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        users,
        question: formatQuestion(question , users[question.author], authedUser)
    }
}*/

export default connect()(Results)