import React, { Component } from 'react'
import { Radio, Form, Button, Skeleton } from 'antd'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

class AnswerPoll extends Component {

    state = {
        answer : ''
    }

    handleRadioState = e => {

        this.setState({
            answer: e.target.value
        })
    }

    handleVote = (e) => {
        e.preventDefault()

        const { dispatch, authedUser, qid } = this.props
        const { answer } = this.state
        dispatch(handleAnswerQuestion({ authedUser, qid, answer }))
    }



    render(){
        const { question } = this.props
        console.log("AnswerPoll props",this.props)
        return(
            <div>
                    <Form onSubmit={this.handleVote} >
                        <Form.Item>
                        <Radio.Group onChange={this.handleRadioState} buttonStyle="solid">
                            <Radio.Button name="myRadioInput" value="optionOne">{question.optionOne.text}</Radio.Button>
                            <Radio.Button name="myRadioInput" value="optionTwo">{question.optionTwo.text}</Radio.Button>
                        </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">Vote!</Button>
                        </Form.Item>
                    </Form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }, { question, qid }){
    return {
        authedUser,
        qid,
        question
    }
}


export default connect(mapStateToProps)(AnswerPoll) 