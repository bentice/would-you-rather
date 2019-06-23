import React, { Component } from 'react'
import { Radio, Form, Button } from 'antd'
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

    handleVote = (info) => {
        const { dispatch } = this.props
        console.log("handling vote")
        dispatch(handleAnswerQuestion(info))
    }



    render(){
        const { authedUser, qid } = this.props
        const { answer } = this.state
        console.log({authedUser, qid, answer})
        return(
            <div>
                <Form onSubmit={()=>this.handleVote({authedUser, qid, answer})} >
                    <Form.Item>
                    <Radio.Group onChange={this.handleRadioState} buttonStyle="solid">
                        <Radio.Button name="myRadioInput" value="optionOne">{this.props.question.optionOne.text}</Radio.Button>
                        <Radio.Button name="myRadioInput" value="optionTwo">{this.props.question.optionTwo.text}</Radio.Button>
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


function mapStateToProps({}, {authedUser, qid, question}){
    return {
        authedUser,
        qid,
        question,
    }
}


export default connect(mapStateToProps)(AnswerPoll) 